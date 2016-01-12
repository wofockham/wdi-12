var app = app || {};

// Connects SPA hash URL to a bit of code.
app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'posts/:id': 'viewPost',
    ':default': 'sendToHome' // this matches any other URLs and functions as a 404 redirect
  },

  index: function () {
    var appView = new app.AppView({collection: app.blog});
    appView.render();
  },

  viewPost: function (id) {
    var post = app.blog.get(id);
    // Redirect back to the homepage if the request post doesn't exist:
    if (! post) {
      app.router.navigate('', true);
      return;
    }
    var postView = new app.PostView({model: post});
    postView.render();
  },

  sendToHome: function () {
    app.router.navigate('', true);
  }
});
