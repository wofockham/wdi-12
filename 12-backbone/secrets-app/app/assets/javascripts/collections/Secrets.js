var app = app || {};

app.Secrets = Backbone.Collection.extend({
  model: app.Secret,
  url: "/secrets"
});