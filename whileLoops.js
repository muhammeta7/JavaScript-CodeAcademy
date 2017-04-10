// While Loops Lesson

// Coin Flip 
var coinFace = Math.floor(Math.random() * 2);

while(coinFace === 0){
  console.log("Heads! Flipping again...");
  var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");

// while(condition) { code to be executed }

// While syntax
var understand = true;

while(understand){
  console.log("I'm learning while loops!");
  understand = false;
}

// Pratice makes Perfect
var count = 0;

var loop = function(){
  while(count<3){
    count++;
    console.log("I'm looping!");
  }
};

loop();

// Solo Loop
var bool=true;

var soloLoop = function(){
  while(bool){
    console.log("Looped once!");
    bool=false;
  }
};

soloLoop();

// When to while and when to for loop
for (var i=0; i<10 ; i++){
    console.log(i);
}

var bool=2;
while (bool < 10){
    bool++;
    console.log(bool);
}

// Do/While loop is hen you want to make sure your loop runs at least once
var loopCondition = false;

do {
  console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");  
} while (loopCondition);

// Get to the choppa
var getToDaChoppa = function(){
  bool=false;
  do {
      console.log("nothing");
  } while(bool)
};

getToDaChoppa();

// Review
var getToDaChoppa = function(){
  bool=false;
  do {
      console.log("nothing");
  }while(bool)
};

getToDaChoppa();

for(var i=0; i<10; i++){
    console.log(i);
}

// Dragon Slaying exercise 
var slaying= true;
var youHit = Math.floor(Math.random()*2);
var damageThisRound = Math.floor(Math.random()*5 + 1);

var totalDamage = 0;

while(slaying) {
  if(youHit){
     console.log("Congrats you have hit the dragon"); 
     totalDamage += damageThisRound;
     if(totalDamage >= 4) {
         console.log("Congrats you have hit the dragon");
         slaying = false;
         console.log(totalDamage);
     }
     else {
         var youHit = Math.floor(Math.random()*2);
     }
  }
  else {
      console.log("You have been burnt to a crisp by the dragon");
  }
  slaying = false;
}

// -----------------------------------------------------------------------------

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



