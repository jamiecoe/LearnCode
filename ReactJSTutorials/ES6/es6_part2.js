// Block scoping
var a = 1

function() {
    var b = 2; // only available in scope of function, it's function scoped
}

console.log(b) // Error because b doesn't exist outside function
 
let c = 1;
// same in for() loops
if(true) {
    var b = 2;
    let c = 3; // this c only exists in if() statement block, same for 'const' type
    const bar = { a: 1 }; // For a const Object, you can change its member variables
    bar.a = 2; // this is fine, however most of the time in Javascript you don't want to mutate a value
}

console.log(b) // Fine, will log 2
console.log(c) // will log 1


// Classes

class Parent{
    
    // In ES7, you can define some static class properties
    age = 34;
    
    constructor() {
        
    }

    foo() {
        
    }
    
    static bar() {
        
    }
}

var parent = new Parent();
parent.foo();
parent.age; // 34

Parent.bar();

class Child extends Parent {
    constructor() {
        super(); // calls Parent constructor
    }
    
    baz() {
        
    }
}

var child = new Child();
child.foo();
// child can't do child.bar() as this is static method
child.baz();


// ******* Arrow functions

var foo = (a, b) => {
    return a + b;
}
// same as saying
var foo = function(a, b) {
    return a + b;
}

// implict return, only for one liners, you can drop {}
do.something((a, b) => a + b);
// same as 
do.something((a, b) => { return a + b;});
// if only one arguement, you can drop parenthesis
do.something(a => a++);
// nice with map() 
[0,1,2].map(val => val++); // [1,2,3]

// lexical context binding

var module = {
    age:30,
    foo: function() {
        console.log(this.age);
    },
    bar: function() {
        setTimeout(function() {
            console.log(this.age);    
        }, 100); 
    }, 
    barBind: function() {
        setTimeout(function() {
            console.log(this.age);    
        }.bind(this), 100); 
    },
    barArrow: function() {
        setTimeout(() => {
            console.log(this.age);    
        }, 100); 
    } 
};

module.foo(); // logs 30
module.bar(); // Won't work! because function inside setTimeout is a completely different anonymous context and you nolonger have access to this.age
module.barBind(); // This is how you used to fix it
module.barArrow(); // Arrow function automatically do bind(this), 'this' inside arrow function automatically points to the context in which it's in

// Be careful about using arrow functions with jQuery, you will overide jQuery's value for 'this' so you can't do $(this) where 'this' is an event handler / binder / listener
$("some-thing").with().jQuery(() => {
    $(this)
});



// ********* es6 modules


// myModule.js

module.exports.foo = function() {
    
}

module.exports.bar = function() {
    
}

 // another file

var myModule = require("myModule");
// cleaner es6 way of doing same thing
import myModule from "myModule"; // Has to be at the top of the file!

// you can also detructure this, so you don't have to load in the whole module
import { foo, bar } from "myModule";
// same as 
var foo = myModule.foo;
var bar = myModule.bar;
// useful for lodash, if you just need certain methods
import { each, omit } from "lodash";


// Where you are replacing whole of module.exports as 1 function 
module.exports = function() {
    
}
// recode with es6
export default function() {
    
}
// or object
export default {
  age: 23,
  name: "jamie"
};


// also specific functions
module.exports.foo = function() {
    
}
// es6 recode
export function foo() {
    
}
// another file
import { foo } from "myModule";

// can also define and export variables
export var foo = 3;
// change variable name in new file
import { foo as foolish } from "myModule";
console.log(foolish) // 3





