import { useLocalState } from "./useLocalState";
import { extractTags } from "../utils/extractTags";
import { removeDuplicates } from "../utils/removeDublicates";
import { useState } from "react";

export const useList = () => {
  const [filterTag, setFilterTag] = useState<string | null>(null);
  const [listAll, setList] = useLocalState<string[]>("list", []);

  const tags = removeDuplicates(
    listAll
      .map(extractTags)
      .reduce((accumulator, item) => accumulator.concat(item), [])
  );

  const addElement = (value: string) => setList([...listAll, value]);

  const removeElement = (i: number) =>
    setList(listAll.filter((_: string, itemI: number) => itemI !== i));

  const editElement = (i: number, value: string) =>
    setList(
      listAll.map((item: string, itemI: number) => (itemI === i ? value : item))
    );

  const list =
    filterTag !== null
      ? listAll.filter((item) => extractTags(item).includes(filterTag))
      : listAll;

  return {
    list,
    tags,
    addElement,
    removeElement,
    editElement,
    setFilterTag,
  };
};
