var app = app || {};

app.Secret = Backbone.Model.extend({
  urlRoot: "/secrets", // This explains what the base URL is for this model
  defaults: {
    content: ""
  }
});