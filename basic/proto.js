// properties are directly passed to `create` method
var Person = Class.create({
  initialize: function(name) {
    this.name = name;
  },
  say: function(message) {
	    return this.name + ': ' + message;
	  },
	  tell: function(message) {
		    return this.name + ': tell ' + message;
		  }
	});
    
// when subclassing, specify the class you want to inherit from
var Pirate = Class.create(Person, {
  // redefine the speak method
  say: function($super, message) {
    return $super(message) + ', yarr!';
  }
});
    
var john = new Pirate('Long John');
john.say('ahoy matey');
john.tell('ahoy matey');
//john.get('ahoy matey');
// -> "Long John: ahoy matey, yarr!"