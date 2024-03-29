import { database } from "@/database/database";
import { Params, Query, Response } from "@/lib/shortener/shortener";

export default async function POST(
  query: Query["POST {shortened_url|url}"],
  params: Params["POST {shortened_url|url}"],
): Promise<Response["POST {shortened_url|url}"]> {
  const link = await database.links
    .add({ ...params })
    .then((id) => database.links.get(id));

  switch (link) {
    case undefined:
      throw new Error("Unable to add link to the database");
    default:
      return link;
  }
}
