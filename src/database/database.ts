import Dexie, { EntityTable } from "dexie";
import * as zod from "zod";

export type Link = zod.infer<typeof schemaLink>;

export const schemaLink = zod.object({
  id: zod.number(),
  shortened_url: zod.string(),
  url: zod.string().min(1, "Please add a link"),
});

export class Database extends Dexie {
  links!: EntityTable<Link, "id">;

  constructor() {
    super("database");

    this.version(1).stores({
      links: "++id, shortened_url, url",
    });
  }
}

export const database = new Database();
