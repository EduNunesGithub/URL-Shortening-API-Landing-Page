import { Link } from "@/database/database";
import GET from "@/lib/shortener/GET/GET";
import POST from "@/lib/shortener/POST/POST";

export type Queries = "GET {}" | "POST {url}";

export type Query = {
  "GET {}": "GET {}";
  "POST {url}": "POST {url}";
};

export type Params = {
  "GET {}": {};
  "POST {url}": {
    url: Link["url"];
  };
};

export type Response = {
  "GET {}": Link[];
  "POST {url}": Link;
};

export default async function shortener<T extends Queries>(
  query: T,
  params: Params[T],
): Promise<Response[T]> {
  switch (query) {
    case "GET {}":
      return GET("GET {}", {}) as Promise<Response[T]>;
    case "POST {url}":
      return POST("POST {url}", {
        ...(params as Params["POST {url}"]),
      }) as Promise<Response[T]>;
  }

  throw new Error("The query has not been processed");
}
