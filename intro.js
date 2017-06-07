// Intro to JS

// Discover the length
'Muhammet'.length

// Basic Math
3+4
5*8

// Comments are written using // and will be ignored by the computer

// What am I learning
// Use confirm to ask the user "Yes" or "No"
confirm('This is an example of using JS to create some interaction on a website. Click OK to continue!');

// Use prompt to get user input
prompt('what is your name')

// Use console.log() to print and for debugging

// Comparison
console.log("Xiao Hui".length < 122);
console.log("Goody Donaldson".length > 8);
console.log(8*2 === 16);

// Decisions Decisions
// Use if else statements to do conditional logic
if ('Muhammet'.length >= 7 ) 
{
    console.log("Let's go down the first road!");
}
else 
{
    // What should we do if the condition is false? Fill in here:
    console.log('no way');
}

// Math 
 if ("Jon".length * 2 / (2+1) === 2 )
{
    console.log("The answer makes sense!");
} 
else {
    console.log('Error Error Error');
}

// Math and modulo
console.log(14 % 3); 
console.log(99 % 8); 
console.log(11 % 3); 

// Modulo and if/else
if( 6%3 == 0 ) {
    console.log("The first number is even");
} else {
    console.log("The first number is odd");
}

// Substrings
// "some word".substring(x, y) where x is where you start chopping 
// and y is where you finish chopping the original string.
"wonderful day".substring(3,7);

// More substring practice
console.log("January".substring(0,3));
console.log("Melbourne is great".substring(0,12));
console.log("Hamburgers".substring(3,10));

// Variables
