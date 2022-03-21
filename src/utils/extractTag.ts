export const extractTags = (str: string) =>
  [...str.matchAll(/#[^ ]+/g)].map((item) => item[0]);
