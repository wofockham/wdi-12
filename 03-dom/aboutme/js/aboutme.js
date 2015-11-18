var body = document.getElementsByTagName('body')[0];
body.style.fontFamily = "Arial, sans-serif";

var nickname = document.getElementById('nickname');
nickname.innerHTML = 'The Blade';

var favorites = document.getElementById('favorites');
favorites.innerHTML = 'hotdogs, Marx bros, metamathematics, mad bongs';

var hometown = document.getElementById('hometown');
hometown.innerHTML = 'Sydney';

var listItems = document.getElementsByTagName('li');
for (var i = listItems.length - 1; i >= 0; i--) {
  listItems[i].className = 'listitem';
};

var bill = document.createElement('img');
bill.src = 'http://fillmurray.com/80/80';
body.appendChild(bill);