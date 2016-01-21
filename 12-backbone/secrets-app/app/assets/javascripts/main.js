var app = app || {}; // Create a global namespace (this is the way we group everything together and make everything cleaner)

// We wait until the page is loaded so that the elements all exist
$(document).ready(function () {
  app.secrets = new app.Secrets();
  app.secrets.fetch();

  // Create an interval that does a fetch every so often
  setInterval(function () {
    app.secrets.fetch();
  }, 1000);

  // We create a new instance of the router
  app.router = new app.AppRouter();

  // This starts the router and makes it listen for changes
  Backbone.history.start();
});