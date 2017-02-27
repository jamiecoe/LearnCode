// object literal
var myModule = {
  name: 'will',
  age: 34,
  sayName: function() {
    alert(this.name);
  }
  setName: function(newName) {
    this.name = newName;
  }
};

myModule.sayName();
