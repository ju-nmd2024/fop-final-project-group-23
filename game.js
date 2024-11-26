function setup() {
  createCanvas(600, 600);
  background(255, 204, 204);
}

let heartX = 40;
let heartY = 30;
let brickX = 40;
let brickY = 30;
let s = 0.1;
let state = "game";

function HEARTS(x, y, s) {
  //HEART
  noStroke();
  fill(245, 255, 230);
  ellipse(x + 10 * s, y + 20 * s, 220 * s, 200 * s);
  ellipse(x + 200 * s, y + 20 * s, 220 * s, 200 * s);
  rect(x + 75 * s, y + 66 * s, 50 * s, 40 * s);
  triangle(
    x - 70 * s,
    y + 89 * s,
    x + 105 * s,
    y + 300 * s,
    x + 281 * s,
    y + 87 * s
  );
}

/*function BRICKS(x, y) {
  noStroke();
  fill(160, 20, 20);
  rect(brickX - 30, brickY + 30, 130, 30);
}*/

function startScreen() {
  //BACKGROUND
  background(255, 204, 204);

  //FIRST LINE
  for (let i = 0; i < 6; i++) {
    HEARTS(heartX + i * 100, heartY, s);
  }

  //SECOND LINE
  for (let i = 0; i < 8; i++) {
    HEARTS(heartX - 50 + i * 100, heartY + 80, s);
  }

  //THIRD LINE
  for (let i = 0; i < 6; i++) {
    HEARTS(heartX + i * 100, heartY + 160, s);
  }

  //FOURTH LINE
  for (let i = 0; i < 8; i++) {
    HEARTS(heartX - 50 + i * 100, heartY + 240, s);
  }

  //FIFTH LINE
  for (let i = 0; i < 6; i++) {
    HEARTS(heartX + i * 100, heartY + 320, s);
  }

  //SIXTH LINE
  for (let i = 0; i < 8; i++) {
    HEARTS(heartX - 50 + i * 100, heartY + 400, s);
  }

  //SEVENTH LINE
  for (let i = 0; i < 6; i++) {
    HEARTS(heartX + i * 100, heartY + 480, s);
  }

  //EIGHTH LINE
  for (let i = 0; i < 8; i++) {
    HEARTS(heartX - 50 + i * 100, heartY + 560, s);
  }

  //TITLE BUTTON
  noStroke();
  fill(255, 150, 150);
  rect(130, 180, 360, 90, 100);

  //TITLE HEART
  for (let i = 0; i < 1; i++) {
    // fill(i * 255, 255, 255);
    HEARTS(heartX + 310 + i * 100, heartY + 185, s);
  }

  //GAME TITLE TEXT
  fill(160, 20, 20);
  noStroke();
  textAlign(CENTER);
  text("BREAK    UT", 310, 243);
  textFont("Times New Roman");
  textSize(25);

  //START BUTTON
  noStroke();
  fill(255, 150, 150);
  rect(234, 310, 150, 40, 100);

  //START TEXT
  fill(160, 20, 20);
  noStroke();
  textAlign(CENTER);
  text("Start!", 310, 338);
  textSize(25);

  //INSTURCTIONS BUTTON
  noStroke();
  fill(255, 150, 150);
  rect(234, 360, 150, 40, 100);

  //INSTRUCTIONS TEXT
  fill(160, 20, 20);
  noStroke();
  textAlign(CENTER);
  text("Instructions", 310, 387);
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

  //FIRST LINE
  for (let i = 0; i < 6; i++) {
    HEARTS(heartX + i * 100, heartY, s);
  }

  //SECOND LINE
  for (let i = 0; i < 8; i++) {
    HEARTS(heartX - 50 + i * 100, heartY + 80, s);
  }

  //THIRD LINE
  for (let i = 0; i < 6; i++) {
    HEARTS(heartX + i * 100, heartY + 160, s);
  }

  //FOURTH LINE
  for (let i = 0; i < 8; i++) {
    HEARTS(heartX - 50 + i * 100, heartY + 240, s);
  }

  //FIFTH LINE
  for (let i = 0; i < 6; i++) {
    HEARTS(heartX + i * 100, heartY + 320, s);
  }

  //SIXTH LINE
  for (let i = 0; i < 8; i++) {
    HEARTS(heartX - 50 + i * 100, heartY + 400, s);
  }

  //SEVENTH LINE
  for (let i = 0; i < 6; i++) {
    HEARTS(heartX + i * 100, heartY + 480, s);
  }

  //EIGHTH LINE
  for (let i = 0; i < 8; i++) {
    HEARTS(heartX - 50 + i * 100, heartY + 560, s);
  }

  //INSTRUCTIONS
  noStroke();
  fill(255, 150, 150);
  rect(152, 50, 300, 500, 100);

  //INSTRUCTIONS TEXT
  fill(160, 20, 20);
  noStroke();
  textAlign(CENTER);
  text("Instructions", 305, 115);
  textFont("Times New roman");
  textSize(15);

  //FLOWING TEXT
  fill(255);
  noStroke();
  textAlign(CENTER);
  text("blah blah blah", 305, 170);
  textSize(18);

  //START PAGE BUTTON
  noStroke();
  fill(255, 150, 150);
  rect(30, 525, 100, 30, 100);

  //START PAGE TEXT
  fill(160, 20, 20);
  noStroke();
  textAlign(CENTER);
  text("Start page", 80, 545);
  textSize(18);

  //PLAY BUTTON
  noStroke();
  fill(255, 150, 150);
  rect(475, 525, 100, 30, 100);

  //PLAY TEXT
  fill(160, 20, 20);
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
  ellipse(300, 500, 20, 20);

  //PADEL
  noStroke();
  fill(160);
  rect(240, 530, 120, 10);

  //BRICKS
  /*for (let i = 0; i < 6; i++) {
    BRICKS(heartX + i * 100, heartY, s);
  }*/
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
  text("YOU WON!", 305, 275);
  textFont("Times New Roman");
  textSize(18);

  //START PAGE BUTTON
  noStroke();
  fill(255, 150, 150);
  rect(30, 525, 100, 30, 100);

  //START PAGE TEXT
  fill(160, 20, 20);
  noStroke();
  textAlign(CENTER);
  text("Start page", 80, 545);
  textSize(18);

  //HEART ABOVE START PAGE
  textAlign(CENTER);
  text("❤️", 78, 515);

  //HEART ABOVE PLAY
  textAlign(CENTER);
  text("❤️", 525, 515);

  //PLAY BUTTON
  noStroke();
  fill(255, 150, 150);
  rect(475, 525, 100, 30, 100);

  //PLAY TEXT
  fill(160, 20, 20);
  noStroke();
  textAlign(CENTER);
  text("Play again!", 526, 545);
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

  //LINES ON HEART
  strokeWeight(10);
  stroke(200, 50, 70);
  line(305, 175, 260, 250);
  line(260, 250, 340, 315);
  line(340, 315, 275, 375);
  line(275, 375, 305, 490);

  //YOU LOST TEXT
  fill(255);
  noStroke();
  textAlign(CENTER);
  text("YOU LOST!", 305, 275);
  textFont("Times New Roman");
  textSize(18);

  //START PAGE BUTTON
  noStroke();
  fill(255, 150, 150);
  rect(30, 525, 100, 30, 100);

  //START PAGE TEXT
  fill(160, 20, 20);
  noStroke();
  textAlign(CENTER);
  text("Start page", 80, 545);
  textSize(18);

  //HEART ABOVE START PAGE
  textAlign(CENTER);
  text("❤️", 78, 515);

  //HEART ABOVE PLAY
  textAlign(CENTER);
  text("❤️", 525, 515);

  //PLAY BUTTON
  noStroke();
  fill(255, 150, 150);
  rect(475, 525, 100, 30, 100);

  //PLAY TEXT
  fill(160, 20, 20);
  noStroke();
  textAlign(CENTER);
  text("Restart", 525, 545);
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
