// We've come a long way
var answer = true;

if (answer) {
    console.log("This is true");
}
else {
    console.log("Not up in here my friend!");
}

// /Here is an array of multiples of 8. But is it correct?
var multiplesOfEight = [8,16,24,32,40,58];

// Test to see if a number from the array is NOT a true
// multiple of eight. Real multiples will return false.
var answer = multiplesOfEight[5] % 8 !== 0;
console.log(answer);

// Fizzbuzz
for ( var numbers = 1; numbers <= 20; numbers++) {
    if (numbers % 15 === 0 ) {
        console.log("FizzBuzz") }
    else if (numbers % 5 === 0) {
        console.log("Buzz") }
    else if (numbers % 3 === 0 ) {
        console.log("Fizz") }
    else {
        console.log(numbers) }
}

// I have to celebrate you baby
var getReview = function (movie) {
    switch (movie) {
        case 'Toy Story 2':
            return ("Great story. Mean prospector.");
            // break;
        case 'Finding Nemo':
            return ("Cool animation, and funny turtles.");
            // break;
        case 'The Lion King':
            return ("Great songs.");
            // break;
        default:
            return ("I don't know!");           
    }  
};

getReview("Toy Story 2");

// Make own object called me
var Spencer = {
  age: 22,
  country: "United States"
};

var me = {
    age: 27,
    country: 'United States'
}

// Accessing properties
var bob = {
  name: "Bob Smith",
  age: 30
};
var susan = {
  name: "Susan Jordan",
  age: 25
};

var name1 = bob.name;
var age1 = bob.age;

var name2 = susan.name;
var age2 = susan.age;

// Part 2
var dog = {
  species: "greyhound",
  weight: 60,
  age: 4
};

var species = dog["species"];
var weight = dog["weight"];
var age = dog["age"];

// Another way to create objects
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;
// Here is susan1, in literal notation
var susan1 = {
  name: "Susan Jordan",
  age: 24
};
// Make a new susan2 object, using a constructor instead
var susan2 = new Object();
susan2.name = "Susan Jordan";
susan2.age = 24;

// Putting it all together
var snoopy = {
    species: "beagle",
    age: 10
}

var buddy = new Object();
buddy.species= "golden retriever";
buddy.age= 5;

// More practice
var bicycle = new Object();
bicycle.speed = 0;
bicycle.gear = 1;
bicycle.frame_material= "carbon fiber";

console.log(bicycle)

// Function review
var square = function (x) {
  return x * x;
};

var multiply = function(x,y) {
    return x * y;
}

multiply(3,4);

// So What's a Method
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;

bob.setAge = function (newAge){
  bob.age = newAge;
};
// here we set bob's age to 40
bob.setAge(40);
// bob's feeling old.  Use our method to set bob's age to 20
bob.setAge(20);

// Why are methods important
var bob = new Object();
bob.age = 17;
// this time we have added a method, setAge
bob.setAge = function (newAge){
  bob.age = newAge;
};

bob.getYearOfBirth = function () {
  return 2014 - bob.age;
};

console.log(bob.getYearOfBirth());

// "this" keyword
var setAge = function (newAge) {
  this.age = newAge;
};

var bob = new Object();
bob.age = 30;
bob.setAge = setAge;
  
// change bob's age to 50 here
bob.setAge(50);

// This works for everyone
var setAge = function (newAge) {
  this.age = newAge;
};

var bob = new Object();
bob.age = 30;
bob.setAge = setAge;
  
// make susan here, and first give her an age of 25
var susan = new Object();
susan.age = 25;
susan.setAge = setAge;

// here, update Susan's age to 35 using the method
susan.setAge(35);

// Make your own Method
var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
// here is our method to set the height
rectangle.setHeight = function (newHeight) {
  this.height = newHeight;
};
// method to set height
rectangle.setWidth = function(newWidth) {
    this.width = newWidth;
}
  
// here change the width to 8 and height to 6 using our new methods
rectangle.setHeight(6);
rectangle.setWidth(8);

// More kinds of Methods
var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
  return this.sideLength * 4;
};

square.calcArea = function() {
    return this.sideLength*this.sideLength;
}

var p = square.calcPerimeter();
var a = square.calcArea();

// Custom Constructors
function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
// help us make george, whose name is "George Washington" and age is 275
var george = new Person("George Washington", 275);

// Try it out make a custom constructor
function Cat(age, color) {
  this.age = age;
  this.color = color;
}

function Dog(breed, age, name) {
    this.name = name;
    this.age = age;
    this.breed = breed;
}

// More options
function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally = new Person("Sally Bowles", 39);
var holden =  new Person("Holden Caulfield", 16);
console.log("sally's species is " + sally.species + " and she is " + sally.age);
console.log("holden's species is " + holden.species + " and he is " + holden.age);

// Constructors with methods
function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
  // put our perimeter function here!
  this.calcPerimeter= function() {
      return this.height*2 + this.width*2;
  }
}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();

// Constructors in Review
function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits
var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");

console.log(rabbit1.describeMyself())