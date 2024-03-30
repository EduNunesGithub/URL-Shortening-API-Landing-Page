import { database } from "@/database/database";
import { Params, Query, Response } from "@/lib/shortener/shortener";

export default async function GET(
  query: Query["GET {}"],
  params: Params["GET {}"],
): Promise<Response["GET {}"]> {
  return await database.links.toArray();
}
