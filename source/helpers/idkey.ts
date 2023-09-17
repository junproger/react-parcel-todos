export const idkey = (value: string): string => {
  const utf8 = 65;
  const sign = '#';
  const regx = /,*\s*|\s*|\s*,*/;
  const chars = value.split(regx).reduce((acc, cur) => {
    if (!acc.includes(cur)) {
      return acc + cur;
    } else {
      return acc;
    }
  }, '');
  const length = value.length - chars.length;
  const symbol = utf8 + (chars.length - 2);
  return chars + sign + length + String.fromCharCode(symbol);
};
