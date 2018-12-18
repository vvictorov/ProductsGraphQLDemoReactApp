export const stringCapitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const stringReplaceAll = (string, search, replacement) => {
  return string.replace(new RegExp(search, 'g'), replacement);
};