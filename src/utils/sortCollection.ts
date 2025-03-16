import type { CollectionEntry } from "astro:content";

export function sortCollection(list: Array<CollectionEntry<"posts">>, sortType: "date" | "title") {
  return sortType === "date"
    ? list.sort((a, b) => {
        return new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf();
      })
    : list.sort((a, b) => {
        return a.data.title.localeCompare(b.data.title);
      });
}
