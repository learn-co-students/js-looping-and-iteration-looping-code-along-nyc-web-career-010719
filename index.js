// Code your solutions in this file
function printBadges(array) {
  for (let i = 0; i < array.length; i++) {
    let employee = i + 1
    console.log(`Welcome ${array[i]}! You are employee #${employee}.`);
  }
  return array;
}

function tailsNeverFails() {
  let flip = 0;
  let tails = Math.random();
  while (tails >= 0.5) {
    flip++;
  }
  console.log(`You got ${++flip} tails in a row!`)
}
