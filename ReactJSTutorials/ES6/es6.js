/* destructuring */
var foo = {
    bar: 1,
    baz: 2
};

// Instead of having to do:
// var bar = foo.bar; var baz = foo.baz;
var { bar, baz } = foo;

// destructuring with arrays
var tenses = ["me","you","he"];
// This will snatch out first arguement of the array (ie: "me") and put into a new variable
// Helpful to leave spaces inside brackets [ variable ], to give visual cue that you aren't 'creating' an array, you're 'destructuring'  
var [ firstPerson ] = tenses;
// This gets first and seconds arguements of the array and puts them in new variables
var [ firstPerson, secondPerson ] = tenses;

// Useful with promises
Promise.all([ promise1, promise2 ]).then(function([ results1, results2 ]]) {
    var [ results1 ] = results;
});


// destructure Objects
var foo = 2;
var obj = {
    bar: 1,
    foo, // same as saying foo: 2
}

var name = 'will';
var age = 34;
// equivalent of passing in object {name:'will', age:34} 
some.method({ name, age });

// generate your own keys
var name = 'will';
var obj = {
    [ "name" + name ]: "some value"
    // same as saying nameWill: "some value"
}


// Destructuring arguements
// You can have default values (eg: max = 25)
// You can change name of arguements (eg: weight: w)
function calcBmi({ weight: w, height: h, max = 25, callback }) {
   var bmi = w / Math.pow(h, 2);
   if(bmi > max) console.log("you're overweight!");
   if(callback) {
       callback(bmi);
   }
}
// Doesn't matter that order of arguements isn't the same, it will still pull in correctly
calcBmi({ height, weight, callback: function() {} });


// Template strings
var name = 'will';
var thing = 'party';

// Instead of 'hi my name is ' + name etc
// You can also do multiple lines easily 
var greet = `hi, my name is ${name}
            and I like to 
            ${thing}`


