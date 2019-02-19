// Code your solutions in this file
function printBadges(names){
  for (let x = 0; x < names.length; x ++){
    console.log(`Welcome ${names[x]}! You are employee #${x + 1}.`);
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
