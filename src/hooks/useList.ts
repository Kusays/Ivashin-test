import { useLocalState } from './useLocalState';
import { extractTag } from '../utils/extractTag';
import { removeDuplicates } from '../utils/removeDublicates';

export const useList = () => {
  const [list, setList] = useLocalState<string[]>('list', []);

  const tags = removeDuplicates(
    list.map(extractTag).filter((tag: string | void): tag is string => tag !== undefined)
  );

  const addElement = (value: string) => setList([...list, value]);

  const removeElement = (i: number) => setList(list.filter((_: string, itemI: number) => itemI !== i));

  const editElement = (i: number, value: string) =>
    setList(list.map((item: string, itemI: number) => (itemI === i ? value : item)));

  return [list, tags, addElement, removeElement, editElement];
};
