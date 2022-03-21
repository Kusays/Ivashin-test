import { useLocalState } from '../hooks/useLocalState';
import { extractTag } from '../utils/extractTag';
import { removeDuplicates } from '../utils/removeDublicates';

export const useList = () => {
  const [list, setList] = useLocalState('list', []);

  const tags = removeDuplicates(
    list.map(extractTag).filter((tag) => tag !== undefined)
  );

  const addElement = (value) => setList([...list, value]);

  const removeElement = (i) => setList(list.filter((_, itemI) => itemI !== i));

  const editElement = (i, value) =>
    setList(list.map((item, itemI) => (itemI === i ? value : item)));

  return [list, tags, addElement, removeElement, editElement];
};
