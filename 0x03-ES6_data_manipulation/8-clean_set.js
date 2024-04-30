export default function cleanSet(set, string) {
  if (string === '') {
    return '';
  }
  let subString = '';

  for (const element of set) {
    if (element.startsWith(string)) {
      subString += `${element.slice(string.length)}-`;
    }
  }
  return subString.slice(0, -1);
}
