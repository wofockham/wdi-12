_.templateSettings = {
  evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
  interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};

var app = app || {};

app.blog = new app.Posts();

app.router = new app.AppRouter(); // "Global" variable so we can use it in other places.
$(document).ready(function () {

  if ($('#main').length === 0) { return; }

  app.blog.fetch().done(function () {
    Backbone.history.start(/* {pushState: Modernizr.history} */); // Entry point of the application: first code that actually runs.
  }); // Request the blog posts via AJAX and add them to the collection.
});



















