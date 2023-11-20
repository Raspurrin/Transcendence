import { InteractiveObject } from "./interactiveObject.js";
import { canvas } from "./canvas.js";
import { Vector } from "./vector.js";
import { Rect } from "./Rect.js";
import * as env from "./constants.js";

export class Ball extends InteractiveObject {
  constructor() {
    super(
      canvas.center.x - env.BALLWIDTH / 2,
      canvas.center.y - env.BALLHEIGHT / 2,
      env.BALLWIDTH,
      env.BALLHEIGHT,
    );
    this.boundaryBox = new Rect(0, 0, canvas.width, canvas.height);
    this.colour = "white";
    this.radius = 5;
    this.speed = 2;
  }

  randomBetween(min, max) {
    return min + Math.random() * (max - min);
  }
  reset(){
    this.position.x = canvas.center.x - env.BALLWIDTH / 2;
    this.position.y = canvas.center.y - env.BALLHEIGHT / 2;
    this.rect = new Rect(this.position.x, this.position.y, this.width, this.height);
    this.setRandomDirection();
  }
  setRandomDirection() {
    let angle = this.randomBetween(-(Math.PI / 4), Math.PI / 4);
    let randomSide = Math.round(Math.random());
    if (randomSide == 0) angle += Math.PI;
    this.direction.y = Math.sin(angle);
    this.direction.x = Math.cos(angle);
  }
  hitObject(object) {
    if (Rect.collision(this.rect, object.rect)) {
      let intersection =
        object.position.y + env.PADDLEHEIGHT / 2 - this.position.y;
      let normalizedCollision =
        (this.position.y - object.position.y) / env.PADDLEHEIGHT;
      let angle = Math.PI * normalizedCollision;
      this.direction.x = Math.cos(angle - (Math.PI / 2 + object.rotation)) * this.speed;
      this.direction.y = Math.sin(angle - (Math.PI / 2 + object.rotation)) * this.speed;
      return (object.team);
    }
    return (null);
  }

  checkInteraction() {
    let newY = this.position.y + Math.floor(this.direction.y * this.speed);
    if (
      newY <= this.boundaryBox.top || newY + this.height >= this.boundaryBox.bottom
    ) {
      this.direction.y = -this.direction.y;
      this.position.y = this.position.y + Math.floor(this.direction.y * (this.speed * 2));
    }
  }
  move() {
    super.move(this.direction);
  }
  draw() {
    canvas.ctx.beginPath();
    canvas.ctx.fillStyle = this.colour;
    canvas.ctx.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0,
      2 * Math.PI
    );
    canvas.ctx.fill();
  }
}
