// Prototypal Inheritance

// FYI: Object.create is only in IE8 and above


var human = {
  species: "human",
  // Make a special method for creating new 'humans'
  create: function(name) {
    var instance = Object.create(this);
    instance.name = name;
    return instance;
  },
  // You could also pass in whole object 'values', and extract keys
  createKeyVersion: function(values) {
    var instance = Object.create(this);
    // Object.keys extracts list of keys from an object
    // For example, Object.keys({a:1,b:2}) -> ["a","b"]
    // Then, for each value in the array...
    Object.keys(values).forEach(function(key) {
      // Assign it to the 'instance' object
      instance[key] = values[key];
      // same as saying: instance.key = value.key (Remember Cyril)
    });
    return instance;
  },
  saySpecies: function() {
    console.log(this.species);
  },
  sayName: function() {
    console.log(this.name);
  }
};

// Creates new object which inherits all of the properties of 'human'
var musician = Object.create(human);
// Easily add new methods
musician.playInstrument = function() {
  console.log("plays..." + this.instrument)
};

// Create a musician
var will = Object.create(musician);
will.name = "Will";
will.instrument = "Drums";

// Another way of creating a new human
var steve = human.create("Steve");


// Create another type of human, with all human features BUT with access to its own create method
// sportsman.species will now be 'Sportsman' rather than 'human', because it will check in sportsman object for 'species' parameter first, before looking in human object
var sportsman = human.createKeyVersion({
  species: "Sportsman",
  playSport: function() {
    console.log("plays " + this.sport);
  }
});

// You can now create specific sportsman
var andyMurray = sportsman.createKeyVersion({
  name: "Andy Murray",
  sport: "Tennis"
});

// Still have access to all human object methods
andyMurray.sayName() // Andy Murray
