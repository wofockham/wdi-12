/*
The even/odd reporter

Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
*/

for (var i = 0; i <= 20; i++) {
  if (i % 2 === 0) { // Even numbers have no remainder when divided by 2.
    console.log(i, 'is even');
  } else {
    console.log(i, 'is odd');
  }
}
