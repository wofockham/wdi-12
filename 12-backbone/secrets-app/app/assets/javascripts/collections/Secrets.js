var app = app || {};

app.Secrets = Backbone.Collection.extend({
  model: app.Secret,
  url: "/secrets",

  initialize: function () {
    // This is where my event handler will be added
    this.on("add", function (secret) {
      var secretView = new app.SecretView({ model: secret });
      // Create a new SecretView and give it some information to represent
      secretView.render();
      // Call render on it
    });
  }
});