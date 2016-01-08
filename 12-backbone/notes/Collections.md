┌─────────────────────────┐
│                         │██
│    Backbone             │██
│       Collections       │██
│                         │██
│                         │██
│                         │██
└─────────────────────────┘██
  ███████████████████████████

---
### What are they?

- Always represent a group of models
  - In Ruby, it could represent a whole table
- They organize models

---
### Why use them?

- Events system
- Easy to work with (filtering etc.)
- Helps communication with the server
- Helper methods
- Do batch operations on all models

---
# Defining a Collection

As said before, we extend one of Backbone's core components.

Collections organize, and add features to, models.

```js
var Movies = Backbone.Collection.extend({
  model: Movie,

  initialize: function () {
    console.log( "New movie collection created" );
  }
});

var movies = new Movies(); // "New movies collection created"
```

---
# Creating a Collection and Adding Models

```js
// At it's most basic...
var movies = new Movies();

// With a single model...
var movie = new Movie();
var movies = new Movies( movie );

// With multiple models...
var movie = new Movie();
var movieTwo = new Movie();

var movies = new Movies([ movie, movieTwo ]);
var movies = new Movies([ {}, {} ]);
```

---
# Adding Models

```js
var movies = new Movies();

movies.add({
  name  : "Satantango"
});

var movie = new Movie();
movies.add( movie );
```

---
# Removing Models

```js
var badMovies = movies.where( { quality: "poor" } );

movies.remove( badMovies );
```

---
# Collections are ordered

```js
var movieOne = new Movie( { title: "movie one" } );
var movieTwo = new Movie( { title: "movie two" } );
var movieThree = new Movie( { title: "movie three" } );

movies.add( movieOne );
movies.add( movieTwo, { at: 0 } );
movies.add( movieThree );

movies.pluck( 'title' ); // [ "movie two", "movie one", "movie three" ]
```

---
# Retrieving Model Data

Lots of ways!

```js
var movie = new Movie( { id: 200, name: "Satantango" } );
movies.add( movie );

movies.get( 200 ); // Gets a model by an ID attribute
movies.get( 200 ).get( "name" ); // "Satantango"

var movie = new Movie( { name: "..." } );
movies.add( movie );

movies.get( "c0" );

// This is using the get method with a Cid. If an attribute
// doesn't have an ID property, you can still search for it
// using the Cid. This is automatically generated for us.
```

---
# Retrieving Model Data

```js
var movieOne = new Movie( { title: "movie one", rating: 3 } );
var movieTwo = new Movie( { title: "movie two", rating: 3 } );
var movieThree = new Movie( { title: "movie three", rating: 4 } );

movies.add( [movieOne, movieTwo, movieThree] );
movies.at( 0 ); // Index, it will get the first movie

movies.where({ rating: 3 }); // First two movies are returned

movies.pluck( 'title' ); // [ "movie one", "movie two" ]

// All underscore methods work on this!
// There is almost always an underscore method
```

---
# Listening for change events

```js
var Movies = Backbone.Collection.extend({
  initialize: function () {
    this.on( "add", function () {
      // Things to do when a model is added
    });

    this.on( "remove", function () {
      // Things to do when a model is removed
    });
  }
});
```

---
# That's all for the moment!

Let's have a go!