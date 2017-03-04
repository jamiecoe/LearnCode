//events - a super-basic Javascript (publish subscribe) pattern
// Separate all event listerners/handlers into an individual module,
// Other modules can then turn their listeners on and off, and trigger handlers by passing in event names and callbacks


// THIS FILE MAY BE MISSING STUFF, weirdly - example code provided is not the same as code in video (https://www.youtube.com/watch?v=jDhDvnlbr4Q&index=5&list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f)

var events = {
  // this.events starts as an empty object
  events: {},
  // 'on' is when an event listener is turned on, you pass in an event name and a callback funciton
  on: function (eventName, fn) {
    // if events[eventName] doesn't exist yet, make it an empty array
    // Because arrays are objects, this.events[eventName] is the same as this.events.eventName
    this.events[eventName] = this.events[eventName] || [];
    // add the callback function to the array
    this.events[eventName].push(fn);
  },
  // 'off' is where you turn an event listener off, again pass in event name and callback function
  off: function(eventName, fn) {
    // if event name actually exists
    if (this.events[eventName]) {
      // Search through all the functions attached to that eventName
      for (var i = 0; i < this.events[eventName].length; i++) {
        // If one of them matches the function you passed in
        if (this.events[eventName][i] === fn) {
          // Remove it from array
          this.events[eventName].splice(i, 1);
          break;
        }
      };
    }
  },

  // 'emit' allows you to tigger all functions associated with an event,
  // 'data' refers to any data you want to pass into functions as parameters (eg: new length for people array)
  emit: function (eventName, data) {
      // if event name actually exists
    if (this.events[eventName]) {
      // For every function attached to this event name
      this.events[eventName].forEach(function(fn) {
        // trigger function and pass in 'data' as a parameter
        fn(data);
      });
    }
  }
};

// events.on('peopleChanged',function(data) {
//   console.log(data);
// });
// events.emit('peopleChanged', 3); // console logs 3
// events.off('peopleChanged',someHandler);








// Stats module
(function(){
    var people = 0;

    //cache DOM
    var $stats = $('#statsModule');
    var template = $('#stats-template').html();

    //bind events
    events.on('peopleChanged', setPeople);
    render();

    function render() {
       $stats.html(Mustache.render(template, {people: people}));
    }

    function setPeople(newPeople) {
        people = newPeople;
        render();
    }

})();








//people module
(function(){
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

    _render();

    function _render() {
       $ul.html(Mustache.render(template, {people: people}));
       // When you render, update PubSub module with current number of people, which will then update everything else that's listening
       events.emit("peopleChanged", people.length);
    }

    function addPerson(value) {
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
})();






// ******* HTML code
// <div class="hero-unit" id="statsModule"></div>
//         <script id="stats-template" type="text/template">
//             <h2>Stats</h2>
//             <strong>people: {{people}}</strong>
//         </script>
//
//
//         <div id="peopleModule">
//             <h1>People</h1>
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





// ***** CSS code
// body {
//     background: #fafafa;
//     font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
//     color: #333;
// }
//
// .hero-unit {
//     margin: 20px auto 0 auto;
//     width: 300px;
//     font-size: 12px;
//     font-weight: 200;
//     line-height: 20px;
//     background-color: #eee;
//     border-radius: 6px;
//     padding: 10px 20px;
// }
//
// .hero-unit h1 {
//     font-size: 60px;
//     line-height: 1;
//     letter-spacing: -1px;
// }
//
// .browsehappy {
//     margin: 0.2em 0;
//     background: #ccc;
//     color: #000;
//     padding: 0.2em 0;
// }
//
// input {
//     border: 1px solid #999;
//     border-radius: 4px;
//     padding: 10px;
// }
// button {
//     zoom: 2;
//     background-color: #999;
//     border: 1px solid #999;
//     border-radius: 4px;
//     padding: 1px 5px;
//
// }
//
// button.active {
//     background-color:rgb(165, 227, 158);
// }
// #peopleModule {
//     text-align: center;
// }
// #peopleModule ul {
//     padding: 0;
// }
// #peopleModule li {
//     display: inline-block;
//     list-style-type: none;
//     background: #98ec9b;
//     border-radius: 5px;
//     padding: 3px 8px;
//     margin: 5px 0;
//     width: 200px;
//     opacity: 0.8;
//     transition: opacity 0.3s;
// }
// #peopleModule li:hover {
//     opacity: 1;
// }
// #peopleModule li span {
//     display: inline-block;
//     width: 160px;
//     overflow: hidden;
//     text-overflow: ellipsis;
// }
//
// #peopleModule li i {
//     cursor: pointer;
//     font-weight: bold;
//     float: right;
//     font-style: normal;
//     background: #666;
//     padding: 2px 4px;
//     font-size: 60%;
//     color: white;
//     border-radius: 20px;
//     opacity: 0.7;
//     transition: opacity 0.3s;
//     margin-top: 3px;
// }
//
// #peopleModule li i:hover {
//     opacity: 1;
// }
