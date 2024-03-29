import { Link } from "@/database/database";
import POST from "@/lib/shortener/POST/POST";

export type Queries = "POST {shortened_url|url}";

export type Query = {
  "POST {shortened_url|url}": "POST {shortened_url|url}";
};

export type Params = {
  "POST {shortened_url|url}": {
    shortened_url: Link["shortened_url"];
    url: Link["url"];
  };
};

export type Response = {
  "POST {shortened_url|url}": Link;
};

export default async function shortener<T extends Queries>(
  query: T,
  params: Params[T],
): Promise<Response[T]> {
  switch (query) {
    case "POST {shortened_url|url}":
      return POST("POST {shortened_url|url}", { ...params });
  }

  throw new Error("The query has not been processed");
}
