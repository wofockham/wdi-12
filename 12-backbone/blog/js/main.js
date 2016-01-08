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
  title: "First post",
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur porro id magni quos eaque rerum blanditiis, placeat praesentium, error aut sequi quidem. Dolorem laudantium asperiores, aspernatur non sunt corrupti."
});

var postTwo = new Post({
  title: "Startups post"
  content: "Something about startups"
});

var blog = new Posts( postOne );

blog.add({
  author: "Zero",
  title: "Game theory",
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis repellat, voluptatem, maxime perferendis voluptas laudantium excepturi tenetur debitis deleniti dolorem sapiente cumque, impedit molestias suscipit, eaque maiores odit nesciunt eos."
});


