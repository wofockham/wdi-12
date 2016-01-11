var app = {};

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

// Kind of like Backbone's alternative to ActiveRecord
app.Posts = Backbone.Collection.extend({
  model: app.Post,

  initialize: function () {
    this.on("add", function () {
      console.log( "Post was added to the blog" );
    });
  }
});

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

app.PostListView = Backbone.View.extend({
  tagName: 'li', // Create a new element for each instance of this view.
  events: {
    'click': 'showPost'
  },
  showPost: function () {
    app.router.navigate('posts/' + this.model.get('id'), true);
  },
  render: function () {
    this.$el.text( this.model.get('title') );
    this.$el.appendTo('#posts');
  }
});

app.PostView = Backbone.View.extend({
  el: '#main',
  render: function () {
    var postViewTemplater = _.template( $('#postView').html() );
    this.$el.html( postViewTemplater( this.model.toJSON() ) );
  }
});

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

app.router = new app.AppRouter(); // "Global" variable so we can use it in other places.
$(document).ready(function () {
  Backbone.history.start(); // Entry point of the application: first code that actually runs.
});



















