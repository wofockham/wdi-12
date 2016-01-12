var app = app || {};

app.PostView = Backbone.View.extend({
  el: '#main',
  render: function () {
    var postViewTemplater = _.template( $('#postView').html() );
    this.$el.html( postViewTemplater( this.model.toJSON() ) );
  }
});
