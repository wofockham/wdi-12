var app = app || {};

// Seed data
var postOne = new app.Post({
  id: 1,
  title: "First post",
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur porro id magni quos eaque rerum blanditiis, placeat praesentium, error aut sequi quidem. Dolorem laudantium asperiores, aspernatur non sunt corrupti."
});

var postTwo = new app.Post({
  id: 2,
  title: "Startups post",
  content: "Something about startups"
});

app.blog = new app.Posts( [postOne, postTwo] );

app.blog.add({
  id: 3,
  author: "Zero",
  title: "Game theory",
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis repellat, voluptatem, maxime perferendis voluptas laudantium excepturi tenetur debitis deleniti dolorem sapiente cumque, impedit molestias suscipit, eaque maiores odit nesciunt eos."
});

app.router = new app.AppRouter(); // "Global" variable so we can use it in other places.
$(document).ready(function () {
  Backbone.history.start(); // Entry point of the application: first code that actually runs.
});



















