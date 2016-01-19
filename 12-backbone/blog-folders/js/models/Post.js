var app = app || {};

// Post Model, very similar concept to models in Rails.
app.Post = Backbone.Model.extend({
  // Defaults serve as documentation for the attributes of a typical post.
  defaults: {
    author: "Terry",
    title: "Untitled"
  },

  // Set up any behaviour in here.
  initialize: function () {
    // this.on("change:author", function () {
    //   console.log( "A posts author was changed" );
    // });
  }
});
