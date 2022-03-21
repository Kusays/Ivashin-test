export const extractTag = (str) => {
  const indexOfString = str.indexOf('#');

  if (indexOfString === -1) {
    return undefined;
  }
  let tag = '';
  for (let i = indexOfString; str[i] !== ' ' && i < str.length; i++) {
    tag += str[i];
  }

  return tag;
};
