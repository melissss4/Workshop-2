let counter = 0;
let countInterval;
function setup() {
  createCanvas(400, 400);
  noStroke();
  background(0, 0, 120); // Set background to dark blue
  let numStars = 100; // Number of stars to create

  for (let i = 0; i < numStars; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(3, 8); // Random sizes for each star
    drawStar(x, y, size);
  }
  // Start the timed interval to draw more stars at a regular interval
  countInterval = setInterval(makeStar, 1000); // Make a star every second
}

// Function to draw a star
function drawStar(x, y, size) {
  fill(255, 223, 0); // Gold color
  ellipse(x, y, size, size); // Draw a circle for the star
}
// Function to draw a new star at a random location
function makeStar() {
  let x = random(width);
  let y = random(height);
  let size = random(3, 8);
  drawStar(x, y, size);

  
 
  counter++; // Increment the counter after drawing a star
  if (counter >= 10) { // Stop after 10 stars are drawn
    clearInterval(countInterval);
    counter = 0; // Reset counter
  }
}
// Added a mouse pad function as well, so that when mouse is pressed, the randomised background will reset to another random spacing
function mousePressed() {
  counter = 0;
  background(0, 0, 120); // Reset background to dark blue
  for (let i = 0; i < 100; i++) { // Redraw the initial set of stars
    let x = random(width);
    let y = random(height);
    let size = random(3, 8);
    drawStar(x, y, size);
  }
  // Restart the interval to draw stars like in the workshop example
  countInterval = setInterval(makeStar, 1000);
}