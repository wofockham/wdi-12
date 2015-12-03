// var lizzieTheCat = {
//   name: 'Lizzie',
//   age: 15,
//   furColor: 'white',
//   info: function () {
//     console.log('My name is', this.name, 'and my age is', this.age);
//   }
// };

// lizzieTheCat.info();

// var daemon = {
//   name: 'Daemon',
//   age: 1,
//   furColor: 'black',
//   info: function () {
//     console.log('My name is', this.name, 'and my age is', this.age);
//   }
// };

// daemon.info();




var catFactory = function (name, age, color, legCount) {
  var cat = {};
  cat.name = name;
  cat.age = age;
  cat.color = color;

  cat.info = function () {
    console.log('My name is', this.name);
  };

  if (legCount === undefined) {
    legCount = 4;
  }

  cat.legCount = legCount;
  cat.felineAIDS = false;

  cat.meow = function () {
    console.log('Meow...');
  }

  return cat;
};

var lizzie = catFactory('Lizzie', null, 'unknown', 3);
lizzie.legCount = 3;
lizzie.allergies = 'toothpaste';
console.log(lizzie.info());

var daemon = catFactory('Daemon', 1, 'black');
var professorCuddles = catFactory('Professor Cuddles', 0, 'tortoiseshell');

console.log(daemon.info());
console.log(professorCuddles.info());

var cats = [
  catFactory('Lizzie', 18, 'white'),
  catFactory('Daemon', 1, 'black'),
  catFactory('Professor Cuddles', 0, 'tortoishell')
];

console.log(cats);

var nameLogger = function (c) {
  console.log(c.name);
};

nameLogger(lizzie);
nameLogger(daemon);
nameLogger(professorCuddles);