┌─────────────────────────┐
│                         │██
│    Backbone Models      │██
│                         │██
│                         │██
│                         │██
│                         │██
└─────────────────────────┘██
  ███████████████████████████

---
### What are they?

- Commonly represent a single resource returned from a server
  (but they don't need to!)
  - In Ruby, it could represent an instance of a database table (or class)
- Can be used for storing data in-memory (like any other object)
- They organize an object's attributes
- But they don't need any predefined data structures!

---
### Why use them?

Behind the scenes, they are just regular old objects...  But they
give you a lot more!

- Default values
- Validations
- Highly flexible
- Built-in events system that broadcasts lifecycle changes
- Computed properties
- Access control
- "Decorative data"
- Conversions
- Helps communication with the server

---
# Defining a Model

As said before, we extend one of Backbone's core components.

Models organize, and add features to, an object's attributes.

```js
var Movie = Backbone.Model.extend({
  initialize: function () {
    console.log( "New movie created" );
  }
});

var movie = new Movie(); // "New movie created"
```

---
# Defining a Model

In the previous example, we didn't provide any information.

```js
var bestMovie = new Movie({
  name      : "Satantango",
  director  : "Bela Tarr",
  duration  : 450
});

bestMovie.get( "name" ); // "Satantango"
```

---
# Accessing Model Attributes

```js
model.get('attributeName'); // Best
model.toJSON(); // Good

model.attributes.attributeName; // Bad
```

---
# Setting Model Attributes

```js
var bestMovie = new Movie();

bestMovie.set("director", "Bela Tarr"); // Or...

bestMovie.set({
  name      : "Satantango",
  duration  : 450
});

bestMovie.attributes.director = "Bela Tarr"; // BAD
```

---
# Setting Model Attributes

```js
var Movie = Backbone.Model.extend({
  defaults  : {
    name      : "N/A",
    duration  : "N/A",
    director  : "N/A"
  }
});
```

---
# Listening for change events

```js
var Movie = Backbone.Model.extend({
  initialize: function () {
    this.on( "change", function () {
      // Things to do when any attribute changes
    });

    this.on( "change:name", function () {
      // Things to do when the name changes
    });

    this.on( "change:director change:duration", function () {
      // Things to do when the director or the duration changes
    })
  }
});
```

---
# That's all for the moment!

Let's have a go!