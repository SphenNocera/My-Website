class Plant {
  constructor(x, y, w, h, image = images[0]) {
    this.plantScale = 1;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.image = image;
  }
  draw() {
    push();
    //pot
    imageMode(CENTER);
    image(this.image, this.x, this.y - this.h / 2, this.w, this.h);

    //dirt
    //fill(102, 60, 26);
    //arc(-40, -100, 80, 30, PI + QUARTER_PI, 0);

    //stem
    rectMode(CORNERS);
    noStroke();
    fill(77, 194, 62);
    if (this.plantScale < 1) {
    } else {
      rect(this.x - 5 * this.plantScale * 0.1, this.y - this.h - 30 * this.plantScale, this.x + 5 * this.plantScale * 0.1, this.y - this.h);
    }
    /*if (this.plantScale > 3) {
      //push();
      let stemw = this.plantScale;
      let stemh = this.plantScale;
      //translate(width / 2, height / 2);
      rect(width / 2, height / 2, stemw, stemh);
      //pop();
    }
    */
    pop();
  }
  grow() {
    //if (mouseX > this.x - this.w / 2 && mouseX < this.x + this.w / 2) {
    if (this.collide()) {
      this.plantScale += 0.005;
    }
    //}
  }
  collide() {
    for (let i = water.length - 1; i >= 0; i--) {
      if (water[i].pos.y + water[i].h > this.y - this.h && water[i].pos.x + water[i].w > this.x - this.w / 2 && water[i].pos.x < this.x + this.w / 2) {
        water.splice(i, 1);
        return true;
      }
    }
  }
}

class Particle {
  constructor() {
    this.spread = 10;
    this.pos = createVector(random(mouseX - this.spread - 70, mouseX + this.spread - 70), mouseY + 40); //random(mouseY - this.spread, mouseY + this.spread)
    this.vel = createVector(0, 0);
    this.acc = createVector(-2, 2);
    this.grav = 0.2;
    this.w = 7;
    this.h = this.w * 2;
    this.angle = 30;
  }
  draw() {
    push();
    imageMode(CENTER);
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    image(waterDrop, 0, 0, this.w, this.h);
    pop();
    this.angle -= 0.5;
    this.angle = constrain(this.angle, 0, 30);
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

  pop();
}