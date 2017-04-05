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
    //Your code goes here!
    count++;
    console.log("I'm looping!");
  }
};

loop();