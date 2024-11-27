let padel;
let ball;
let heartX = 40;
let heartY = 30;
let s = 0.1;
let state = "game";
let x, y;
let speed = 5;

function setup() {
  createCanvas(600, 600);
  background(255, 204, 204);

  padel = new Padel();
  ball = new Ball(300, 300, 12, 3, -3);
}

function HEARTS(x, y, s) {
  //HEART
  noStroke();
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

function startScreen() {
  //BACKGROUND
  background(255, 204, 204);

  //FIRST LINE
  for (let i = 0; i < 6; i++) {
    fill(245, 255, 230);
    HEARTS(heartX + i * 100, heartY, s);
  }

  //SECOND LINE
  for (let i = 0; i < 8; i++) {
    fill(245, 255, 230);
    HEARTS(heartX - 50 + i * 100, heartY + 80, s);
  }

  //THIRD LINE
  for (let i = 0; i < 6; i++) {
    fill(245, 255, 230);
    HEARTS(heartX + i * 100, heartY + 160, s);
  }

  //FOURTH LINE
  for (let i = 0; i < 8; i++) {
    fill(245, 255, 230);
    HEARTS(heartX - 50 + i * 100, heartY + 240, s);
  }

  //FIFTH LINE
  for (let i = 0; i < 6; i++) {
    fill(245, 255, 230);
    HEARTS(heartX + i * 100, heartY + 320, s);
  }

  //SIXTH LINE
  for (let i = 0; i < 8; i++) {
    fill(245, 255, 230);
    HEARTS(heartX - 50 + i * 100, heartY + 400, s);
  }

  //SEVENTH LINE
  for (let i = 0; i < 6; i++) {
    fill(245, 255, 230);
    HEARTS(heartX + i * 100, heartY + 480, s);
  }

  //EIGHTH LINE
  for (let i = 0; i < 8; i++) {
    fill(245, 255, 230);
    HEARTS(heartX - 50 + i * 100, heartY + 560, s);
  }

  //TITLE BUTTON
  noStroke();
  fill(255, 150, 150);
  rect(130, 180, 360, 90, 100);

  //TITLE HEART
  fill(160, 20, 20);
  HEARTS(heartX + 310, heartY + 185, s);

  //GAME TITLE TEXT
  fill(160, 20, 20);
  noStroke();
  textAlign(CENTER);
  textFont("Times New Roman");
  textSize(50);
  text("BREAK    UT", 310, 243);

  //START BUTTON
  noStroke();
  fill(255, 150, 150);
  rect(234, 310, 150, 40, 100);

  //START TEXT
  fill(160, 20, 20);
  noStroke();
  textAlign(CENTER);
  textSize(25);
  text("Start!", 310, 338);

  //INSTURCTIONS BUTTON
  noStroke();
  fill(255, 150, 150);
  rect(234, 360, 150, 40, 100);

  //INSTRUCTIONS TEXT
  fill(160, 20, 20);
  noStroke();
  textAlign(CENTER);
  textSize(25);
  text("Instructions", 310, 387);

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
  textSize(30);
  textFont("Times New roman");
  text("Instructions", 305, 115);

  //FLOWING TEXT
  fill(255);
  noStroke();
  textAlign(CENTER);
  textSize(18);
  text("blah blah blah", 305, 170);

  //START PAGE BUTTON
  noStroke();
  fill(255, 150, 150);
  rect(30, 525, 100, 30, 100);

  //START PAGE TEXT
  fill(160, 20, 20);
  noStroke();
  textAlign(CENTER);
  textSize(18);
  text("Start page", 80, 545);

  //PLAY BUTTON
  noStroke();
  fill(255, 150, 150);
  rect(475, 525, 100, 30, 100);

  //PLAY TEXT
  fill(160, 20, 20);
  noStroke();
  textAlign(CENTER);
  textSize(18);
  text("Play!", 525, 545);

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
}

class Ball {
  constructor(x, y, radius, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.radius = radius;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x - this.radius < 0 || this.x + this.radius > width) {
      this.speedX *= -1;
    }

    if (this.y - this.radius < 0) {
      this.speedY *= -1;
    }
  }

  bounceUp() {
    this.speedY = abs(this.speedY) * -1;
  }

  display() {
    push();
    fill(0);
    noStroke();
    ellipse(this.x, this.y, this.radius * 2);
    pop();
  }
}

class Padel {
  constructor() {
    this.x = 240;
    this.y = 530;
    this.speed = 6;
  }

  draw() {
    //PADEL
    noStroke();
    fill(160);
    rect(this.x, this.y, 120, 10);

    if (state === "game") {
      //PADEL MOVEMENT
      if (keyIsDown(LEFT_ARROW)) {
        this.x -= this.speed;
      } else if (keyIsDown(RIGHT_ARROW)) {
        this.x += this.speed;
      }
    }
    this.x = constrain(this.x, 0, 480);
  }
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
  textFont("Times New Roman");
  textSize(50);
  text("YOU WON!", 305, 275);

  //START PAGE BUTTON
  noStroke();
  fill(255, 150, 150);
  rect(30, 525, 100, 30, 100);

  //START PAGE TEXT
  fill(160, 20, 20);
  noStroke();
  textAlign(CENTER);
  textSize(18);
  text("Start page", 80, 545);

  //HEART ABOVE START PAGE
  HEARTS(heartX + 27, heartY + 450, s);

  //HEART ABOVE PLAY AGAIN
  HEARTS(heartX + 476, heartY + 450, s);

  //PLAY BUTTON
  noStroke();
  fill(255, 150, 150);
  rect(475, 525, 100, 30, 100);

  //PLAY TEXT
  fill(160, 20, 20);
  noStroke();
  textAlign(CENTER);
  textSize(18);
  text("Play again!", 526, 545);

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
  textFont("Times New Roman");
  textSize(50);
  text("YOU LOST!", 305, 275);

  //START PAGE BUTTON
  noStroke();
  fill(255, 150, 150);
  rect(30, 525, 100, 30, 100);

  //START PAGE TEXT
  fill(160, 20, 20);
  noStroke();
  textAlign(CENTER);
  textSize(18);
  text("Start page", 80, 545);

  //HEART ABOVE START PAGE
  HEARTS(heartX + 27, heartY + 450, s);

  //HEART ABOVE RESTART
  HEARTS(heartX + 476, heartY + 450, s);

  //PLAY BUTTON
  noStroke();
  fill(255, 150, 150);
  rect(475, 525, 100, 30, 100);

  //PLAY TEXT
  fill(160, 20, 20);
  noStroke();
  textAlign(CENTER);
  textSize(18);
  text("Restart", 525, 545);

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
    padel.draw();
  } else if (state === "lose") {
    loseScreen();
  } else if (state === "win") {
    winScreen();
  }

  ball.display();
  ball.update();
}
