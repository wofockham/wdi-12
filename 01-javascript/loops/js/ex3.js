/*

The Grade Assigner

Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

*/

var assignGrade = function (score) {
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
};

for (var score = 100; score >= 30; score--) {
  console.log( "For", score, "you got a", assignGrade(score) );
}
