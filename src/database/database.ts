import Dexie, { EntityTable } from "dexie";

export interface Link {
  id: number;
  shortened_url: string;
  url: string;
}

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
