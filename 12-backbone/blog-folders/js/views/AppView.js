var app = app || {};

// Kinda like a combination of Rails views and controllers PLUS event handling.
app.AppView = Backbone.View.extend({
  el: '#main',
  render: function () {
    // Set up the overall page structure
    var appViewHTML = $('#appView').html();
    this.$el.html( appViewHTML );

    // Create individual views within the app for each of the blog posts.
    this.collection.each(function (post) {
      var postListView = new app.PostListView({model: post});
      postListView.render();
    });
  }
});
