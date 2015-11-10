var calculateAge = function (birthYear) {

  var today = new Date();
  var currentYear = today.getFullYear();

  var age1 = currentYear - birthYear;
  var age2 = age1 - 1;

  console.log('They are either ' + age2 + ' or ' + age1);

};

calculateAge(1983);
calculateAge(1888);