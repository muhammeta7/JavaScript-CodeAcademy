// Access by offset
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

console.log(languages[2]);
console.log(languages.length);

// Iterating over an array
for (var i=0; i<languages.length; i++) {
    console.log(languages[i]);
}

// Heterogeneous arrays (mixes data types)
var mix = [42, true, "towel"];

// An array of arrays 3x3
var newArray = [[2,3,4],[4,4,4],[4,5,6]];

// -----------------------------------------------------------------------------------
// Objects consist of key value pairs
var phonebookEntry = {};

phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};

phonebookEntry.phone();

// Me object
var me = {
    name: "Muhammet",
    age: 27
};

console.log(me);
// Object Constructor
var me = new Object();

me.name = "Muhammet";
me.age = 27;

console.log(me);

// Create 3 Objects
var object1 = new Object();
var object2 = new Object();
var object3 = new Object();

object1.name = "Moe";
object2.name = "Hannah";
object3.name = "Justin";

object1.age = 27;
object2.age = 22;
object3.age = 19;

// Heterogeneous arrays
var myArray = [19, true, 'string', {name: 'Moe'}];

// Multidimensional arrays
var me = {
    name: "Muhammet",
    age: 27
};

var newArray = [ [2,3], [me] ] ;

// Editing an existing object
var myObject = {
  name: 'Eduardo',
  type: 'Most excellent',
  interests: ["hiking", "coding", "traveling"]
};

// Creating your own object
ar myOwnObject = new Object();

myOwnObject.name = "Muhammet";
myOwnObject.age = 27;

// -------------------------------------------------------------------------------------

// Contact List
var friends = {};

friends.bill = {
    firstName: "Bill",
    lastName: "Gates",
    number: "(206) 555-5555",
    address: ['One Microsoft Way','Redmond','WA','98052']
};

friends.steve = {
  firstName: "Steve",
  lastName: "Jobs",
  number: "(408) 555-5555",
  address: ['1 Infinite Loop','Cupertino','CA','95014']
};

var list = function() {
    console.log("Your contacts \n__________________________");
    for (var key in friends) {
        console.log(key);
        console.log("-----------------------------------------------");
    }
}

var search = function(name) {
    for(var prop in friends) {
        if(friends[prop].firstName === name) {
          console.log(friends[prop]);
          return friends[prop];
        }
        else {
            console.log("Sorry that contact does not exist!");
        }
    }
 }
    

list()    
search("Bill");