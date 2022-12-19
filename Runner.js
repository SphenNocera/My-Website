let plant1, plant2, plant3;

let water = [];

let plantpots = [];
let watercan;
let waterDrop;

let wcAngle = 0;

function preload() {
  plantpots[0] = loadImage("images/plant pot.svg");
  watercan = loadImage("images/watering can.png");
  waterDrop = loadImage("images/water drop.png");
}

function setup() {
  createCanvas(600, 600);

  plant1 = new Plant(100, height, 75, 75, plantpots[0]);
  plant2 = new Plant(300, height, 125, 125, plantpots[0]);
  plant3 = new Plant(500, height, 100, 100, plantpots[0]);

  noCursor();
}

function draw() {
  background(130, 199, 255);

  plant1.draw();
  plant2.draw();
  plant3.draw();

  for (let i in water) {
    water[i].draw();
    water[i].move();
  }

  if (mouseIsPressed) {
    water.push(new Particle());
  }

  plant1.grow();
  plant2.grow();
  plant3.grow();

  for (let i = water.length - 1; i >= 0; i--) {
    if (water[i].pos.y > height) {
      water.splice(i, 1);
    }
  }

  drawWateringCan();

  //console.log(water.length);
}

function drawWateringCan() {
  push();
  imageMode(CENTER);
  translate(mouseX, mouseY);
  rotate(wcAngle);
  image(watercan, 0, 0, 150, 150);
  pop();
}

function mousePressed() {
  wcAngle = -PI / 3;
}

function mouseReleased() {
  wcAngle = 0;
}