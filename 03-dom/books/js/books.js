var books = [
  {
   title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false
  },
  {
   title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
  }
];

var body = document.getElementsByTagName('body')[0];
var ul = document.createElement('ul');
body.appendChild(ul);

for (var i = 0; i < books.length; i++) {
  var book = books[i];

  // Create a paragraph with the title and author.
  var paragraph = document.createElement('p');
  paragraph.innerHTML = [book.title, 'by', book.author].join(' ');

  if (book.alreadyRead) {
    paragraph.style.color = '#ccc';
  }

  // Store the paragraph in a list item node.
  var li = document.createElement('li');
  li.appendChild(paragraph);

  // Display the list item node by inserting into the UL created earlier.
  ul.appendChild(li);
}
