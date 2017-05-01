// Objects 2

// Object review
var james = {
    job: "programmer",
    married: false
    
};

// Creat an object constructor 
// You can think of this constructor as a "template" from which you can create multiple objects. 
function Person(job, married) {
    this.job = job;
    this.married = married;
}

// create a "gabby" object using the Person constructor!
// To create a new object from a constructor, we use the new keyword.
var gabby = new Person("student", true);

console.log(gabby);

// Fun with Functions
function Person(job, married) {
    this.job = job;
    this.married = married;
    // add a "speak" method to Person!
    this.speak = function(){
        console.log("Hello!");
    };
}

var user = new Person("Codecademy Student",false);
user.speak();

// Literally Speaking
var james = {
    job: "programmer",
    married: false,
    speak: function( mood ) {
        console.log("Hello, I am feeling " + mood);
    }
};

james.speak("great");
james.speak("just okay");

// Can I see your references
var james = {
    job: "programmer",
    married: false,
    sayJob: function() {
        // complete this method
        console.log("Hi, I work as a " + this.job);
    }
};

// james' first job
james.sayJob();

// change james' job to "super programmer" here
james.job = "super programmer"

// james' second job
james.sayJob();

// Whats in Your Bracket
var james = {
    job: "programmer",
    married: false
};

// set to the first property name of "james"
var aProperty = "job";

// print the value of the first property of "james" 
// using the variable "aProperty"
console.log(james[aProperty]);

// I.D. Please
// complete these definitions so that they will have
// the appropriate types
var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";

console.log(typeof anObj  ); // should print "object"
console.log(typeof aNumber  ); // should print "number"
console.log(typeof aString  ); // should print "string"

// Know Thyself
var myObj = {
    // finish myObj
    name: "Something"
};

console.log( myObj.hasOwnProperty('name') ); // should print true
console.log( myObj.hasOwnProperty('nickname') ); // should print false

// Dressed to Impress
var suitcase = {
    shirt: "Hawaiian"
};

if(suitcase.hasOwnProperty("shorts")) {
    console.log(suitcase.shorts);
}
else {
    suitcase.shorts = "Gym shorts";
    console.log(suitcase.shorts);
}

// Simple for loop to print out keys of objects
var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

for (var i in nyc) {
    console.log(i);
};

// write a for-in loop to print the value of nyc's keys then values
for (i in nyc) {
    console.log(i);
    console.log(nyc[i]);
}

// Class is in Session
function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 35);

// make your own class here
function Circle(radius) {
    this.radius = radius;
}

// Teach Snoopy
function Dog (breed) {
  this.breed = breed;
}

// here we make buddy and teach him how to bark
var buddy = new Dog("Golden Retriever");
buddy.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
// we need you to teach snoopy how to bark here
snoopy.bark = function() {
    console.log("Woof");
}
// this causes an error, because snoopy doesn't know how to bark!
snoopy.bark();

// How do Classes Help Us Out
function Person(name,age) {
  this.name = name;
  this.age = age;
}
// a function that prints the name of any given person
var printPersonName = function (p) {
  console.log(p.name);
};

var bob = new Person("Bob Smith", 30);
printPersonName(bob);

// make a person called me with your name and age
// then use printPersonName to print your name
var me = new Person("Muhammet Aydin", 27);
printPersonName(me);