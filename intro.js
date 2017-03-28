// Introducing Functions

// Function will take parameter and divide it by 3
var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};
// Should return 2
divideByThree(6); 

// Function syntax, declare function with variable 
var greeting = function)(name) {
  console.log("Great to see you," + "" + name);
};

greeting("Muhammet");

// Function to say what food you want
var foodDemand = function(food) {
  console.log("I want to eat " + food);
};

foodDemand("Chips");

// It is important to put ; at the end of eah line of code
var calculate = function(number) {
  var val = number*10;
  console.log(val);
};

var greeting = function(name) {
  console.log(name);
};

greeting("Mu");

// D.R.Y. is a method in which you don't repeat yourself
// If you feel you are retyping lines of code it may be simpler to just write a function instead
var orangeCost = function(cost) {
  var total = cost*5;
  console.log(total);
};

orangeCost(5);

// Return keyword
var twoTwimes = function(number) {
  return number*2;
};

var newNumber = twoTimes(3);
console.log(newNumber);

// Function called quarter
var quarter = function(number) {
  return number/4;
};

if (quarter(12) % 3 == 0) {
  console.log("This statement is true");
} else {
  console.log("This statement is false");
};

// Functions with two parameters
var perimeterBox = function (width, length) {
  return 2*width + 2*length;
};

perimeterBox(3,4);

// Global variables are variables that can be accessed inside any function
// Local variables can only be called upon within functions
var my_number = 7; //this has global scope

var timesTwo = function(number) {
    var my_number = number * 2;
    console.log("Inside the function my_number is: ");
    console.log(my_number);
}; 

timesTwo(7);
console.log("Outside the function my_number is: ")
console.log(my_number);

// Functions Recap
var nameString = function (name) {
  return "Hi, I am " + name;
};

console.log(nameString("muhammet"));

// Functions & if/else
var sleepCheck = function(numHours) {
    if(numHours >= 8 ){
        return "You're getting plenty of sleep! Maybe even too much!";
    }
    else {
        return "Get some more shut eye!";
    };
};

console.log(sleepCheck(10));
console.log(sleepCheck(5));
console.log(sleepCheck(8));

