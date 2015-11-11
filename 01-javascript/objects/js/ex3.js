/*
The Movie Database

It's like IMDB, but much much smaller!

Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
*/

var movie = {
  title: 'O Brother! Where Art Thou?',
  duration: 'Pretty long',
  stars: ['George Clooney', 'Gillian Welch', 'That Really Slinty Guy']
};

var movieInfo = function (movie) {
  // console.log(movie);
  // var info = movie.title + ' lasts for ' + movie.duration + '. Stars: ' + movie.stars.join(', ');
  var info = [ movie.title, 'lasts for', movie.duration + '.', 'Stars:', movie.stars.join(', ') ].join(' ');
  console.log(info);
};

movieInfo(movie);