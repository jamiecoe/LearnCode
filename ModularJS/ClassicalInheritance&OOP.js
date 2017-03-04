// Instantiation - we want to be able to make multiple copies of something




// Classical Inheritance

var Person = function(name) {
  this.name = name;

};

Person.prototype.sayName = function() {
    alert(this.name);
}

Person.prototype.shoutName = function() {
    alert(this.name + "!");
}

var john = new Person("john");
var bobby = new Person("bobby");

john.sayName(); // alert 'john'
bobby.shoutName(); // alert 'bobby!'

// Function to carry out Inheritance, where you pass in child and parent
// ctor is child
// superCtor is parent
function inherits(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
};

inherits(Musician, Person);

var Musician = function(name, instrument) {
  // This bascially runs the Person constructor against a new Musician object
  // Give you access to Person properties and functions
  Person.call(this, name);
  // You could also say Musician.super_.call(this, name), which would be exactly the same
  // Musician.super_ === Person, see inherits function

  this.instrument = instrument;
}

Musician.prototype.getInstrument = function() {
  console.log(this.instrument);
}

// We can overide parent methods
Musician.prototype.shoutName = function() {
  console.log("lalala" + this.name + "!!!");
}

var julia = new Musician("julia", "trombone");
julia.sayName(); //julia
julia.getInstrument(); //trombone

// Programme will first check child class (ie: Musician) to see if there is a shoutName method
// If it didn't find it, it would then look in parent class (ie: Person), this is what happened for sayName()
julia.shoutName(); // lalalajulia!

// remove that method for Musician class
delete Musician.prototype.shoutName
// still works because now we use Person class method
julia.shoutName(); //julia!
