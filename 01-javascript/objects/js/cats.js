var catFactory = function (name, age, color, legCount) {
  var cat = {};
  cat.nmae = name;
  cat.age = age;
  cat.color = color;

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
// lizzie.legCount = 3;
lizzie.allergies = 'toothpaste';
var daemon = catFactory('Daemon', 1, 'black');
var professorCuddles = catFactory('Professor Cuddles', 0, 'tortoiseshell');

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