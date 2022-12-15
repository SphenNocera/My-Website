let plant1, plant2, plant3;

let water = [];

function setup() {
  createCanvas(600, 600);

  plant1 = new Plant(100, height, 1, normalPot);
  plant2 = new Plant(300, height, 1, tallPot);
  plant3 = new Plant(500, height, 1, normalPot);
}

function draw() {
  background(130, 199, 255);

  plant1.draw();
  plant2.draw();
  plant3.draw();

  plant1.grow();
  plant2.grow();
  plant3.grow();

  for (let i in water) {
    water[i].draw();
    water[i].move();
  }

  if (mouseIsPressed) {
    water.push(new Particle());
  }

  for (let i = water.length - 1; i >= 0; i--) {
    if (water[i].pos.y > height) {
      water.splice(i, 1);
    }
  }

  //console.log(water.length);
}