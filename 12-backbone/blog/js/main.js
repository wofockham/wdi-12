var Post = Backbone.Model.extend({
  defaults: {
    author: "Terry",
    title: "Untitled"
  },

  initialize: function () {
    console.log( "New post created" );

    this.on("change:author", function () {
      console.log( "A posts author was changed" );
    });
  }
});

var Posts = Backbone.Collection.extend({
  model: Post,

  initialize: function () {
    console.log( "New blog started" );
    this.on("add", function () {
      console.log( "Post was added to the blog" );
    });
  }
});

var postOne = new Post({
  id: 1,
  title: "First post",
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur porro id magni quos eaque rerum blanditiis, placeat praesentium, error aut sequi quidem. Dolorem laudantium asperiores, aspernatur non sunt corrupti."
});

var postTwo = new Post({
  id: 2,
  title: "Startups post",
  content: "Something about startups"
});

var blog = new Posts( [postOne, postTwo] );

blog.add({
  id: 3,
  author: "Zero",
  title: "Game theory",
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis repellat, voluptatem, maxime perferendis voluptas laudantium excepturi tenetur debitis deleniti dolorem sapiente cumque, impedit molestias suscipit, eaque maiores odit nesciunt eos."
});

var AppView = Backbone.View.extend({
  el: '#main',
  render: function () {
    var appViewHTML = $('#appView').html();
    this.$el.html( appViewHTML );

    this.collection.each(function (post) {
      var postListView = new PostListView({model: post});
      postListView.render();
    });
  }
});

var PostListView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click': 'showPost'
  },
  showPost: function () {
    router.navigate('posts/' + this.model.get('id'), true);
  },
  render: function () {
    this.$el.text( this.model.get('title') );
    this.$el.appendTo('#posts');
  }
});

var PostView = Backbone.View.extend({
  el: '#main',
  render: function () {
    var postViewTemplater = _.template( $('#postView').html() );
    this.$el.html( postViewTemplater( this.model.toJSON() ) );
  }
});

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'posts/:id': 'viewPost'
  },

  index: function () {
    var appView = new AppView({collection: blog});
    appView.render();
  },

  viewPost: function (id) {
    var post = blog.get(id);
    var postView = new PostView({model: post});
    postView.render();
  }
});

var router = new AppRouter();
$(document).ready(function () {
  Backbone.history.start();
});



















