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

// Candy switch case
var candy = prompt("What's your favorite candy?","Type your favorite candy here.");

switch(candy) {
  case 'licorice':
    console.log("Gross!");
    break;
  case 'gum':
    console.log("I like gum!");
    break;
  case 'beets':
    console.log("...is that even a candy?");
    break;
  default:
    console.log("Nah bruh how about a real candy");
}

// Switch Case example
var answer = prompt("How many girlfriends do you have?");

switch(answer) {
  case '1':
    console.log("Faithful I see!");
    break;
  case '2':
    console.log("You are in for some trouble");
    break;
  default:
    console.log("You lonely son.");
}

// Practice Example for Switch Case
var answer = prompt("How many kids do you want?");

switch(answer) {
    case '0':
        console.log("Guess you don't like kids");
        break;
    case '1':
        console.log("Economically sound I see");
        break;
    case '2':
        console.log("Probably one girl on boy I assume");
        break;
    default:
        console.log("you are looking to be stressed out");  
}

// And 
var hungry = true;
var foodHere = true;

var eat = function() {
  if (hungry && foodHere){
      return true;
  }
  else {
      return false;
  }
};

eat();

// Or
var tired = true;
var bored = false;

var nap = function() {
  if (tired || bored) {
      return true;
  }
  else {
      return false;
  }
};

nap();

// Not
var programming = false;

var happy = function() {
    if (!programming) {
        return true;
    }
    else {
        return false;
    }
};

happy();

// ------------------------------------------------------------------------------------------------------------------

// Code Your Own Adventure
var age = prompt("What's your age?");

if (age > 13) {
    console.log("You are free to play!");
}
else {
    console.log("You are not old enough to play.");
}

console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");
var userAnswer = prompt("Do you want to race Bieber on stage?");

if (userAnswer === "yes") {
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!"     );
}
else {
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race         without pacing.'");
}

var feedback = prompt ("Rate the game from 0-10");
if (feedback > 8) {
    console.log("Thank you! We should race at the next concert!");
}
else {
    console.log("I'll keep practicing coding and racing.");
}

// ---------------------------------------------------------------------------------------------------------------------

// Code Your Own Adventure 2
var troll = prompt("You're walking through the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN?").toUpperCase();

switch(troll) {
  case 'FIGHT':
    var strong = prompt("How courageous! Are you strong (YES or NO)?").toUpperCase();
    var smart = prompt("Are you smart?").toUpperCase();
    if(strong === 'YES' || smart === 'YES') {
      console.log("You only need one of the two! You beat the troll--nice work!");
    } else {
      console.log("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");
    }
    break;
  case 'PAY':
    var money = prompt("All right, we'll pay the troll. Do you have any money (YES or NO)?").toUpperCase();
    var dollars = prompt("Is your money in Troll Dollars?").toUpperCase();
    if(money === 'YES' && dollars === 'YES') {
      console.log("Great! You pay the troll and continue on your merry way.");
    } else {
      console.log("Dang! This troll only takes Troll Dollars. You get whomped!");
    }
    break;
  case 'RUN':
    var fast = prompt("Let's book it! Are you fast (YES or NO)?").toUpperCase();
    var headStart = prompt("Did you get a head start?").toUpperCase();
    if(fast === 'YES' || headStart === 'YES') {
      console.log("You got away--barely! You live to stroll through the forest another day.");
    } else {
      console.log("You're not fast and you didn't get a head start? You never had a chance! The troll eats you.");
    }
    break;
  default:
    console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
}