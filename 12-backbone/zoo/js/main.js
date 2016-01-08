var Animal = Backbone.Model.extend({
  defaults: {
    type: 'animal',
    ecosystem: '',
    stripes: 0
  },

  initialize: function () {
    console.log('animal created');

    this.on('change:type', function (model) {
      var type = model.get('type');
      console.log('this animal is now a', type);
    });
  }
});

var Zoo = Backbone.Collection.extend({
  model: Animal
});

var a1 = new Animal({type: 'giraffe', ecosystem: 'prairie', stripes: 7});
var a2 = new Animal({type: 'babboon', ecosystem: 'prairie'});
var a3 = new Animal({type: 'butterfly', ecosystem: 'forest'});

var ourZoo = new Zoo([a1, a2, a3]);


var ZooView = Backbone.View.extend({
  el: '#main',

  events: {
    'click h1': 'headerClick'
  },

  initialize: function () {
    console.log('ZooView initialized');
  },

  headerClick: function () {
    alert('you clicked');
  },

  render: function () {
    var zooTemplate = $('#zoo-template').html();
    this.$el.html(zooTemplate);

    this.collection.each(function (animal) {
      var av = new AnimalView({model: animal});
      av.render();
    });

  }
});

var AnimalView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click': 'animalClick'
  },

  animalClick: function () {
    alert('this animal lives in the ' + this.model.get('ecosystem'));
  },

  render: function () {
    this.$el.text(this.model.get('type'));
    this.$el.appendTo('#animals');
  }
});

var zv = new ZooView({collection: ourZoo});
zv.render();











