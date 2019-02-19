// Code your solutions in this file
// function printBadges(employees) {
//   for (let i = 0; i < employees.length; i++) {
//     console.log(`Welcome ${employees[i]}! You are employee #${i + 1}.`);
//   }
//   return employees;
// }
//
// function coinFlip() {
//   let flip = Math.random();
//
//   if flip >= 0.5 {
//     return "tails";
//   } else {
//     return "heads";
//   }
// }
//
// function tailsNeverFails() {
//   let roundCount = 0;
//   let roundResult = " ";
//
//
//   do {
//     roundResult = coinFlip();
//     roundCount++;
//   } while roundResult === "tails";
//
//   return `You got ${roundCount} tails in a row!`;
// }

function printBadges (names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
  }

  return names;
}

function tailsNeverFails () {
  let tails = 0;

  while (Math.random() >= 0.5) {
    tails++;
  }

  return `You got ${tails} tails in a row!`;
}
