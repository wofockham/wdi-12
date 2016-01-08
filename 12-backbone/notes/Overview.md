┌─────────────────────────┐
│                         │██
│    Backbone.js ?        │██
│                         │██
│                         │██
│                         │██
│                         │██
└─────────────────────────┘██
  ███████████████████████████

---
# What is it?

Backbone was developed by Jeremy Ashkenas (the guy that
created Underscore and Coffeescript).

He built it while he was working at either DocumentCloud
or the New York Times (I think it was DocumentCloud).

It's a front-end framework (which we will explain soon).

It is worth checking out the [annotated source](http://backbonejs.org/docs/backbone.html)
when you are horribly bored and not willing to watch Satantango.

Here is its [website](http://backbonejs.org/) and
here it is on [Github](https://github.com/jashkenas/backbone)

---
# What is a Front-end Framework?

**The Problem**

When working with lots of Javascript, your code can get
hard to navigate, hard to organize, and can be hard
to understand.

It can also get really difficult to work with and harder to
explain to others. It also occassionally just mean that your
information is tied to the HTML (lots and lots of selectors).

Remember when we were writing Sinatra? Can you imagine building
a very large application with that?

**The Solution**

A Front-end Javascript framework - they provide structure to applications.

---
# What do Front-end Frameworks actually provide or allow?

- Code structure and organisation
- Seperates concerns
- Compatibility
- Easier to test
- Reduced bandwidth
- Application state no longer tied to the DOM
- Increased speed and performance
- Utilities for complicated things like AJAX
- Help when building single-page applications
- Can replicate the back-end structure
  - As some use an MVC structure
  - Recreate databases in the front end
- Assists, and synchronises, data structures
- Saves you from reinventing the wheel

They can make you far more productive and your code far clearer.

---
# What frameworks are there?

Lots and lots of them.

Some of the bigger ones at the moment:

- Backbone
- Angular
- Ember
- React
- Meteor

Polymer, Ampersand, Knockout, Framework,
Spine, Brick, Nuclear, Matreshka, Vue,
Knockback, Mithril, Troop, Flight, CanJS,
Dojo, Socketstream...  Way too many.

---
# Why do we teach Backbone?

- Lightweight (7.3kb + Underscore)
- Uses MVC and a RESTful architecture - like Rails
- Minimal (very customizable)
- Not opinionated
- Transferable concepts and easier to understand
- Single point of entry for data
- It is still teaching you Javascript
- Great community and has been around for the while (2010)
- Philosophy - "There's more than one way to do it"
- Backbone attempts to remain agnostic

---
# Who uses it?

See [here](http://backbonejs.org/#examples)

(LinkedIn, Reddit, BitBucket, Code Academy, TED, AirBnB,
 Trello, Khan Academy, Basecamp, Quartz, Disqus etc.)

---
# Backbone's Core Components

- Models
  + The smallest level (e.g. a single row from a database)
- Collections
  + Represents a table or a group of models
- Views
  + The side that deals with presentation
  + Custom events etc.
- Routers
  + Dealing with application state
  + Client-side URLs

The idea is that we extend these provided core components.

Our "classes" are created by extending Backbone core components
and they are essentially the blueprints. We create instances of these
blueprints by using the "new" keyword.

---
# A few things...

- Backbone is going to be really difficult
- There are lots of concepts that need to come together
- The average application combines those components
  + We have to teach them individually first!
