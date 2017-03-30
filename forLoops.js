// Intro to for loops. Generally used to iterate through lists or dictionaries

// First for loop
for (var counter = 1; counter < 11; counter++) {
  console.log(counter);
}

// First part of loop tells the computer at which value to start
// The second part is the condition at which the loop stops
// The third step is the incrementation of each step
for (var i = 5; i < 11; i = i + 1){
  console.log(i);
}

for (var i = 4; i < 24; i++) {
  console.log(i);
}

for (var i = 5; i < 51; i+=5) {
  console.log(i);
}

for (var i = 8 ; i < 120; i+=12) {
  console.log(i);
}

// Practice counting down
for (var i = 10; i >= 0; i--) {
  console.log(i);
}

for (i=100 ; i>0 ; i-=5){
    console.log(i);
}

// Meet arrays 
var junkData = ["Eddie Murphy", 49, "peanuts", 31];

console.log(junkData[3]); // Should print 31

// Loops and arrays
var cities = ["Melbourne", "Amman", "Helsinki", "NYC", "Kansas"];

for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}

var names = ['Jack', 'Tim', 'Kim', 'Rando', 'Turd'];
for (var i=0; i<names.length ; i++) {
    console.log("I know someone called " + names[i] );
}

// Search for your name