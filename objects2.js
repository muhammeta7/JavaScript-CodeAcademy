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