var app = app || {};

// Connects SPA hash URL to a bit of code.
app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'posts/:id': 'viewPost'
  },

  index: function () {
    var appView = new app.AppView({collection: app.blog});
    appView.render();
  },

  viewPost: function (id) {
    var post = app.blog.get(id);
    var postView = new app.PostView({model: post});
    postView.render();
  }
});
