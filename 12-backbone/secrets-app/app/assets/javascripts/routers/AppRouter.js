var app = app || {}; // Global namespace

// We extend a core component
app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
    // If there is nothing in the client-side URL, call the index function
  },

  index: function () {
    var appView = new app.AppView();
    // Creates an instance of the appView
    appView.render(); // Calls render on it
  }
});