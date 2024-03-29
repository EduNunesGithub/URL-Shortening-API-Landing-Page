import { Link } from "@/database/database";
import POST from "@/lib/shortener/POST/POST";

export type Queries = "POST {url}";

export type Query = {
  "POST {url}": "POST {url}";
};

export type Params = {
  "POST {url}": {
    url: Link["url"];
  };
};

export type Response = {
  "POST {url}": Link;
};

export default async function shortener<T extends Queries>(
  query: T,
  params: Params[T],
): Promise<Response[T]> {
  switch (query) {
    case "POST {url}":
      return POST("POST {url}", { ...params });
  }

  throw new Error("The query has not been processed");
}
