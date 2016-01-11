var app = app || {};

// Kind of like Backbone's alternative to ActiveRecord
app.Posts = Backbone.Collection.extend({
  model: app.Post,

  initialize: function () {
    this.on("add", function () {
      console.log( "Post was added to the blog" );
    });
  }
});
