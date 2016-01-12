var app = app || {}; // Create a global namespace (this is the way we group everything together and make everything cleaner)

// We wait until the page is loaded so that the elements all exist
$(document).ready(function () {
  // We create a new instance of the router
  app.router = new app.AppRouter();

  // This starts the router and makes it listen for changes
  Backbone.history.start();
});