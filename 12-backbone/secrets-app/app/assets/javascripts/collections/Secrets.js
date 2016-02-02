var app = app || {};

app.Secrets = Backbone.Collection.extend({
  model: app.Secret,
  url: "/secrets",

  initialize: function () {
    // This is where my event handler will be added
    // Listen for any time a secret is added to the collection (store the one that was added as secret)
    this.on("add", function (secret) {
      var secretView = new app.SecretView({ model: secret });
      // Create a new SecretView and give it some information to represent
      secretView.render();
      // Call render on it
    });
  }
});