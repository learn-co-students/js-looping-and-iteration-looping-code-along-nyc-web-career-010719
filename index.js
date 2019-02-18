function printBadges(array) {
  for (i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`);
  };
  return array;
};

function tailsNeverFails() {
  let flip;
  let i = 0;

  while (flip !== 0) {
    i++;
    flip = Math.round(Math.random());
  };

  return `You got ${i - 1} tails in a row!`
};
