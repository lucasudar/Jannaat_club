import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export interface IRating {
  stars: number;
  total: number;
}
