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
