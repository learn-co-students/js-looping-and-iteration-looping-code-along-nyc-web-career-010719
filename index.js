// Code your solutions in this file

function printBadges(arr)
{
  let i;
  for (i = 0; i <arr.length; i++) {
  // Runs 5 times, with values of step 0 through 4.
    console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`);
  }
  return arr
};

function tailsNeverFails()
{
  let x;
  let num_tails=0;
  while (x!='heads')
  {
     x = (Math.floor(Math.random() * 2) == 0);
    if(x){
       x ="heads";
    }
    else{
      num_tails++
      x="tails";
    }
  }
  return `You got ${num_tails} tails in a row!` ;
};
