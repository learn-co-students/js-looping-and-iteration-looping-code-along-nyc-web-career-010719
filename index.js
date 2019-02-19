
function printBadges(employees){
  for (let i = 0; i < employees.length; i++) {
    console.log(`Welcome ${employees[i]}! You are employee #${i + 1}.`);
  }
  return employees
}




function tailsNeverFails(){
  let count = 0;
  while (Math.random() >= 0.5) {
    count++;
}

// while (tailsNeverFails()) {
//     count += 1
    return `You got ${count} tails in a row!`;

}



//
// for (let i = 0; i < employees.length; i++) {
//   // do stuff
// }
//
// while (employees.length) {
//   employee = employees.pop
// }
