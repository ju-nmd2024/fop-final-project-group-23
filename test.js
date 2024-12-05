let ball;
let bricks = [];
let rows = 5; // Number of rows of bricks
let cols = 8; // Number of columns of bricks
let brickWidth, brickHeight;

function setup() {
  createCanvas(800, 600);

  // Initialize the ball
  ball = new Ball(width / 2, height - 30, 10, 3, -3);

  // Set up bricks
  brickWidth = width / cols; // Calculate brick width
  brickHeight = 20; // Brick height
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let x = col * brickWidth;
      let y = row * brickHeight;
      bricks.push(new Brick(x, y, brickWidth, brickHeight));
    }
  }
}

function draw() {
  background(220);

  // Display and update the ball
  ball.update();
  ball.display();

  // Check for collisions between ball and bricks
  for (let i = bricks.length - 1; i >= 0; i--) {
    if (bricks[i].isColliding(ball)) {
      ball.bounceUp();
      bricks.splice(i, 1); // Remove the brick from the array
    } else {
      bricks[i].display(); // Display remaining bricks
    }
  }

  // Game over check
  if (ball.y > height) {
    textSize(32);
    fill(255, 0, 0);
    text("Game Over!", width / 2 - 100, height / 2);
    noLoop(); // Stop the draw loop
  }
}

// Ball class
class Ball {
  constructor(x, y, radius, speedX, speedY) {
    this.x = x; // X position
    this.y = y; // Y position
    this.radius = radius; // Radius of the ball
    this.speedX = speedX; // Horizontal speed
    this.speedY = speedY; // Vertical speed
  }

  // Update ball position and check for collisions with walls
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Bounce off the left and right edges
    if (this.x - this.radius < 0 || this.x + this.radius > width) {
      this.speedX *= -1;
    }

    // Bounce off the top edge
    if (this.y - this.radius < 0) {
      this.speedY *= -1;
    }
  }

  // Make the ball bounce upward
  bounceUp() {
    this.speedY = abs(this.speedY) * -1;
  }

  // Display the ball
  display() {
    fill(0);
    noStroke();
    ellipse(this.x, this.y, this.radius * 2);
  }
}

// Brick class
class Brick {
  constructor(x, y, w, h) {
    this.x = x; // X position
    this.y = y; // Y position
    this.w = w; // Width of the brick
    this.h = h; // Height of the brick
  }

  // Check if the ball collides with the brick
  isColliding(ball) {
    return (
      ball.x + ball.radius > this.x &&
      ball.x - ball.radius < this.x + this.w &&
      ball.y + ball.radius > this.y &&
      ball.y - ball.radius < this.y + this.h
    );
  }

  // Display the brick
  display() {
    fill(0, 150, 255);
    stroke(255);
    rect(this.x, this.y, this.w, this.h);
  }
}
