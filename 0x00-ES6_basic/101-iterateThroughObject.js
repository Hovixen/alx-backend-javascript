export default function iterateThroughObject(reportWithIterator) {
  let employeeString = '';

  for (const employee of reportWithIterator) {
    employeeString += ` ${employee} |`;
  }
  employeeString = employeeString.slice(0, -1);

  return employeeString;
}
