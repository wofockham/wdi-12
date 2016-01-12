var app = app || {}; // Global namespace

app.SecretInputView = Backbone.View.extend({
  el: "#secretForm", // Referencing an existing element

  events: { // Add a bunch of events, and tell Backbone what functions to call
    'click button': 'createSecret',
    'keypress textarea': 'checkForEnter'
  },

  checkForEnter: function (event) {
    app.ENTER_KEY = 13; // 13 is the keyCode on most computers
    if ( event.which === app.ENTER_KEY ) {
      // event.which tells us which key was pressed
      event.preventDefault(); // This stops the enter key from doing anything
      this.createSecret(); // Then we call the createSecret function
    }
  },

  createSecret: function () {
    var secret = new app.Secret(); // Create a new "instance"
    var currentSecret = this.$el.find('textarea').val();
    // Find the textarea within the el, and saves its value
    secret.set({ content: currentSecret });
    // On the instance of the secret, store the content
    secret.save(); // Send this secret up to the server
    this.$el.find('textarea').val('').focus();
    // Find the textarea and remove all the text, and then pick our cursor in there
    var secretView = new app.SecretView({ model: secret });
    // Create a new SecretView and give it some information to represent
    secretView.render();
    // Call render on it
  },

  render: function () {
    var secretInputViewTemplate = $("#secretInputViewTemplate").html();
    this.$el.html( secretInputViewTemplate );
    // this.$el.find('textarea').focus();
  }
});