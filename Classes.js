class Plant {
  constructor(x, y, potScale, pot) {
    this.plantScale = 1;
    this.potScale = potScale;
    this.pot = pot;
    this.x = x;
    this.y = y;
  }
  draw() {
    push();
    translate(this.x, this.y);

    //pot
    scale(this.potScale);
    this.pot();

    //dirt
    //fill(102, 60, 26);
    //arc(-40, -100, 80, 30, PI + QUARTER_PI, 0);

    //stem
    rectMode(CORNERS);
    fill(77, 194, 62);
    if (this.plantScale < 1) {

    } else {
      rect(-5 * this.plantScale * 0.5, -130 * this.plantScale, 5 * this.plantScale * 0.5, -100);
    }
    pop();
  }
  grow() {
    if (this.collide()) {
      this.plantScale += 0.005;
    }
  }
  collide() {
    for (let i = water.length - 1; i >= 0; i--) {
      if (water[i].pos.y > this.y - 120 && water[i].pos.x > this.x - 50 && water[i].pos.x < this.x + 50) {
        water.splice(i, 1);
        return true;
      }
    }
  }
}

class Particle {
  constructor() {
    this.spread = 50;
    this.pos = createVector(random(mouseX - this.spread, mouseX + this.spread), random(mouseY - this.spread, mouseY + this.spread));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 2);
    this.grav = 0.2;
  }
  draw() {
    push();
    fill(186, 228, 245);
    rect(this.pos.x, this.pos.y, 2, 20);
    pop();
  }
  move() {
    this.acc.y += this.grav;
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
}

function normalPot() {
  push();
  fill(133, 89, 52);
  quad(-50, -100, 50, -100, 25, 0, -25, 0);
  quad(-60, -100, 60, -100, 55, -85, -55, -85);
  pop();
}

function tallPot() {
  push();
  fill(133, 89, 52);
  quad(-50, -100, 50, -100, 25, 0, -25, 0);
  quad(-60, -100, 60, -100, 55, -85, -55, -85);
  pop();
}

function shortFat() {

}