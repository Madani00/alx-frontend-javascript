export default function getStudentIdsSum(list) {
  // you must add 0 , otherwise will not work
  return list.reduce((accumulator, item) => accumulator + item.id, 0);
}
