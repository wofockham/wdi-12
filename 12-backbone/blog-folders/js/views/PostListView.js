var app = app || {};

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
