// Control Flow lesson

// IsEven function
var isEven = function(number) {
  if (number%2 == 0) {
      return true;
  }
  else if ( isNaN(number) == true){
      return "Your parameter is not a string";
  }
  else {
      return false;
  }
};

// Test Cases
isEven(4);
isEven(3);

// Switch Case examples
// Declare case and must break after each one (basically a if/then statement)
var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}

// Color example
var color = prompt("What's your favorite primary color?","Type your favorite color here");

switch(color) {
  case 'red':
    console.log("Red's a good color!");
    break;
  case 'blue':
    console.log("That's my favorite color, too!");
    break;
  case 'yellow':
      console.log("Just like the sun");
      break
  default:
    console.log("I don't think that's a primary color!");
}
