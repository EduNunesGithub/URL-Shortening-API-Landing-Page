import axios, { AxiosError } from "axios";
import { ShortenParams, ShortenResponse } from "@/app/api/shorten/route";
import { database } from "@/database/database";
import { Params, Query, Response } from "@/lib/shortener/shortener";

export default async function POST(
  query: Query["POST {url}"],
  { url }: Params["POST {url}"],
): Promise<Response["POST {url}"]> {
  const response: { data: any; init: ResponseInit | undefined } = {
    data: undefined,
    init: {},
  };
  const error: { fatal: boolean } = { fatal: false };
  const shortenParams: ShortenParams = {
    url: url,
  };

  await axios<ShortenResponse["200"]>({
    data: shortenParams,
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/shorten`,
  })
    .then((res) => {
      response.data = res.data;
      response.init = {
        status: res.status,
        statusText: res.statusText,
      };
    })
    .catch((err: Error | AxiosError) => {
      const axiosError = axios.isAxiosError(err);
      if (axiosError === false) return (error.fatal = true);

      const axiosResponse = err.response;
      if (axiosResponse === undefined) return (error.fatal = true);

      const status = axiosResponse.status;

      if (status === 200) {
        const data = axiosResponse.data as ShortenResponse["200"];
        response.data = data;
        response.init = {
          status: axiosResponse.status,
          statusText: axiosResponse.statusText,
        };
        return;
      }

      if (status === 400) {
        const data = axiosResponse.data as ShortenResponse["400"];
        response.data = data;
        response.init = {
          status: status,
          statusText: data.error,
        };
        return;
      }

      return (error.fatal = true);
    });

  if (error.fatal === true) throw new Error("fatal.at.shorten.client");

  if (response.init?.status !== 200) throw new Error(response.init?.statusText);

  const { result_url }: ShortenResponse["200"] = response.data;

  const link = await database.links
    .add({
      shortened_url: result_url,
      url: url,
    })
    .then((id) => database.links.get(id));

  switch (link) {
    case undefined:
      throw new Error("Unable to add link to the database");
    default:
      return link;
  }
}
