// Instead of using object ie: var people = { etc }, we can use a Revealing Module Pattern with a self executing anonymous function
// Wrapping function in parenthesis forces Javascript to evaluate it first
// We can even pass it arguements with extra set of brackets on the end
// We also create our own scope, so nobody can access our private variables from outside

var people = (function(name) {
    var age = 13;
    function sayName() {
      alert(name);
    };

    // self excuting anonymous function doesn't automatically return anything
    // We have to create object and return it

    return {
      sayName: sayName
    }

})("Will")

alert(age); // This will fail!


// Rewrite our previous code in this style
// No longer need an init function

var people = (function(){
    var people = ['Will', 'Steve'];

    //cache DOM
    var $el = $('#peopleModule');
    var $button = $el.find('button');
    var $input = $el.find('input');
    var $ul = $el.find('ul');
    var template = $el.find('#people-template').html();

    //bind events
    $button.on('click', addPerson);
    $ul.delegate('i.del', 'click', deletePerson);

    // Often, '_' is used to signify that something is private
    _render();

    function _render() {
       $ul.html(Mustache.render(template, {people: people}));
    }

    function addPerson(value) {
        // 'value' is click event when you click on button
        // You only want to use value if a string was passed in, so now somewhere else in code can use addPerson() and pass in name
        var name = (typeof value === "string") ? value : $input.val();
        people.push(name);
        _render();
        $input.val('');
    }

    function deletePerson(event) {
        var i;
        if (typeof event === "number") {
            i = event;
        } else {
            var $remove = $(event.target).closest('li');
            i = $ul.find('li').index($remove);
        }
        people.splice(i, 1);
        _render();
    }

    // Expose only the methods you choose by returning them in object
    return {
        addPerson: addPerson,
        deletePerson: deletePerson
    };

})();

//people.addPerson("Jake");
//people.deletePerson(0);

// ******* HTML that goes with this
// <div id="peopleModule"><h1>People</h1>
//             <input placeholder="name" type="text">
//             <button id="addPerson">Add Person</button>
//             <ul id="people">
//                 <script id="people-template" type="text/template">
//                     {{#people}}
//                         <li>
//                             <span>{{.}}</span>
//                             <i class="del">X</i>
//                         </li>
//                     {{/people}}
//                 </script>
//             </ul>
//
//         </div>
