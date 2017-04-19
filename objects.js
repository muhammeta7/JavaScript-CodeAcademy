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