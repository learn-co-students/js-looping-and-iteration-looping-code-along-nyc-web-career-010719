// Code your solutions in this file
// printBadges(['Ada', 'Brendan', 'Ali']);

function printBadges(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
    }
    return names;
}

function tailsNeverFails() {
  let turns = 0
  let maybeTails = (Math.random() >= 0.5)

  while (maybeTails){
    ++turns
    console.log(`You got ${turns} tails in a row!`)
  }
}



// function maybeTrue() {
//     return Math.random() >= 0.5;
// }
//
// while (maybeTrue()) {
//     console.log('And I ran... I ran so far away!');
// }
