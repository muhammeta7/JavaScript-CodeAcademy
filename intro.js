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


