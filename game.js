function setup() {
  createCanvas(600, 600);
  background(255, 204, 204);
}

/*
let ballX = 300;
let ballY = 400; 
let s= 1;
*/

let state = "start";

function startScreen() {
  //BACKGROUND
  background(255, 204, 204);

  //TITLE BUTTON
  noStroke();
  fill(255);
  rect(130, 180, 360, 90, 100);

  //GAME TITLE TEXT
  fill(160);
  noStroke();
  textAlign(CENTER);
  text("BREAK❤️UT", 310, 243);
  textSize(20);

  //START BUTTON
  noStroke();
  fill(255);
  rect(234, 310, 150, 40, 100);

  //START TEXT
  fill(160);
  noStroke();
  textAlign(CENTER);
  text("Start!", 310, 337);
  textSize(20);

  //INSTURCTIONS BUTTON
  noStroke();
  fill(255);
  rect(234, 360, 150, 40, 100);

  //INSTRUCTIONS TEXT
  fill(160);
  noStroke();
  textAlign(CENTER);
  text("Instructions!", 310, 386);
  textSize(50);

  //MOUSE WHEN CLICKED START
  if (state === "start" && mouseIsPressed) {
    if (mouseX > 234 && mouseX < 384 && mouseY > 311 && mouseY < 351) {
      state = "game";
    }
  }

  //MOUSE WHEN CLICKED INSTRUCTIONS
  if (state === "start" && mouseIsPressed) {
    if (mouseX > 234 && mouseX < 384 && mouseY > 360 && mouseY < 401) {
      state = "instructions";
    }
  }
}

function instructionsScreen() {
  //BACKGROUND
  background(255, 204, 204);

  //INSTRUCTIONS
  noStroke();
  fill(255);
  rect(152, 50, 300, 500, 100);

  //INSTRUCTIONS TEXT
  fill(160);
  noStroke();
  textAlign(CENTER);
  text("Instructions!", 305, 115);
  textSize(15);

  //FLOWING TEXT
  fill(160);
  noStroke();
  textAlign(CENTER);
  text("blah blah blah", 305, 170);
  textSize(15);

  //START PAGE BUTTON
  noStroke();
  fill(255);
  rect(30, 525, 100, 30, 100);

  //START PAGE TEXT
  fill(160);
  noStroke();
  textAlign(CENTER);
  text("Start page", 80, 545);
  textSize(15);

  //PLAY BUTTON
  noStroke();
  fill(255);
  rect(475, 525, 100, 30, 100);

  //PLAY TEXT
  fill(160);
  noStroke();
  textAlign(CENTER);
  text("Play!", 525, 545);
  textSize(30);

  //MOUSE WHEN CLICKED START PAGE
  if (state === "instructions" && mouseIsPressed) {
    if (mouseX > 30 && mouseX < 131 && mouseY > 525 && mouseY < 556) {
      state = "start";
    }
  }

  //MOUSE WHEN CLICKED INSTRUCTIONS
  if (state === "instructions" && mouseIsPressed) {
    if (mouseX > 475 && mouseX < 575 && mouseY > 525 && mouseY < 556) {
      state = "game";
    }
  }
}

function gameScreen() {
  //BACKGROUND
  background(255, 204, 204);

  //BALL
  noStroke();
  fill(255);
  ellipse(300, 500, 40, 40);

  //PADEL
  noStroke();
  fill(160);
  rect(240, 530, 120, 20);
}

function winScreen() {
  //BACKGROUND
  background(255, 204, 204);

  //HEART
  noStroke();
  fill(255, 102, 102);
  ellipse(210, 220, 220, 200);
  ellipse(400, 220, 220, 200);
  rect(275, 266, 50, 40);
  triangle(130, 289, 305, 500, 481, 287);

  //YOU WON TEXT
  fill(255);
  noStroke();
  textAlign(CENTER);
  text("YOU WON!!", 305, 275);
  textSize(15);

  //START PAGE BUTTON
  noStroke();
  fill(255);
  rect(30, 525, 100, 30, 100);

  //START PAGE TEXT
  fill(160);
  noStroke();
  textAlign(CENTER);
  text("Start page", 80, 545);
  textSize(15);

  //HEART ABOVE START PAGE
  textAlign(CENTER);
  text("❤️", 78, 515);

  //HEART ABOVE PLAY
  textAlign(CENTER);
  text("❤️", 525, 515);

  //PLAY BUTTON
  noStroke();
  fill(255);
  rect(475, 525, 100, 30, 100);

  //PLAY TEXT
  fill(160);
  noStroke();
  textAlign(CENTER);
  text("Play!", 525, 545);
  textSize(50);

  //MOUSE WHEN CLICKED START PAGE
  if (state === "win" && mouseIsPressed) {
    if (mouseX > 30 && mouseX < 131 && mouseY > 525 && mouseY < 556) {
      state = "start";
    }
  }

  //MOUSE WHEN CLICKED INSTRUCTIONS
  if (state === "win" && mouseIsPressed) {
    if (mouseX > 475 && mouseX < 575 && mouseY > 525 && mouseY < 556) {
      state = "game";
    }
  }
}

function loseScreen() {
  //BACKGROUND
  background(255, 204, 204);

  //HEART
  noStroke();
  fill(255, 102, 102);
  ellipse(210, 220, 220, 200);
  ellipse(400, 220, 220, 200);
  rect(275, 266, 50, 40);
  triangle(130, 289, 305, 500, 481, 287);

  //YOU WON TEXT
  fill(255);
  noStroke();
  textAlign(CENTER);
  text("YOU LOST!!", 305, 275);
  textSize(15);

  //START PAGE BUTTON
  noStroke();
  fill(255);
  rect(30, 525, 100, 30, 100);

  //START PAGE TEXT
  fill(160);
  noStroke();
  textAlign(CENTER);
  text("Start page", 80, 545);
  textSize(15);

  //HEART ABOVE START PAGE
  textAlign(CENTER);
  text("❤️", 78, 515);

  //HEART ABOVE PLAY
  textAlign(CENTER);
  text("❤️", 525, 515);

  //PLAY BUTTON
  noStroke();
  fill(255);
  rect(475, 525, 100, 30, 100);

  //PLAY TEXT
  fill(160);
  noStroke();
  textAlign(CENTER);
  text("Play!", 525, 545);
  textSize(50);

  //MOUSE WHEN CLICKED START PAGE
  if (state === "lose" && mouseIsPressed) {
    if (mouseX > 30 && mouseX < 131 && mouseY > 525 && mouseY < 556) {
      state = "start";
    }
  }

  //MOUSE WHEN CLICKED INSTRUCTIONS
  if (state === "lose" && mouseIsPressed) {
    if (mouseX > 475 && mouseX < 575 && mouseY > 525 && mouseY < 556) {
      state = "game";
    }
  }
}

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "instructions") {
    instructionsScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "lose") {
    loseScreen();
  } else if (state === "win") {
    winScreen();
  }
}
