import { useLocalState } from "./useLocalState";
import { extractTags } from "../utils/extractTag";
import { removeDuplicates } from "../utils/removeDublicates";

export const useList = () => {
  const [list, setList] = useLocalState<string[]>("list", []);

  const tags = removeDuplicates(
    list
      .map(extractTags)
      .reduce((accumulator, item) => accumulator.concat(item), [])
  );

  const addElement = (value: string) => setList([...list, value]);

  const removeElement = (i: number) =>
    setList(list.filter((_: string, itemI: number) => itemI !== i));

  const editElement = (i: number, value: string) =>
    setList(
      list.map((item: string, itemI: number) => (itemI === i ? value : item))
    );

  return {
    list,
    tags,
    addElement,
    removeElement,
    editElement,
  };
};
