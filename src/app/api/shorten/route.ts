import axios, { AxiosError } from "axios";
import { NextResponse } from "next/server";

export type ShortenParams = {
  url: string;
};

export type ShortenResponse = {
  200: { result_url: string };
  400: { error: string };
};

export async function POST(request: Request) {
  const { url }: ShortenParams = await request.json();

  const response: { data: any; init: ResponseInit | undefined } = {
    data: undefined,
    init: {},
  };
  const error: { fatal: boolean } = { fatal: false };

  await axios<ShortenResponse["200"]>({
    data: {
      url: url,
    },
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    url: "https://cleanuri.com/api/v1/shorten",
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

  if (error.fatal === true) throw new Error("fatal.at.shorten.server");

  return NextResponse.json(response.data, response.init);
}
