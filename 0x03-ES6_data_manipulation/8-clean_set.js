export default function cleanSet(mySet, startString) {
  let result = '';
  if (!startString || !startString.length) {
    return '';
  }
  for (const element of mySet) {
    if (element && element.startsWith(startString)) {
      result += `${element.slice(startString.length)}-`;
    }
  }
  return result.slice(0, -1);
}
