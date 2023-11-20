import { Vector } from "./vector.js";
import { Rect } from "./Rect.js";
import { canvas } from "./canvas.js";

export class InteractiveObject {
  constructor(x, y, width, height, rotation = 0) {
    this.position = new Vector(x, y);
    this.speed = 2;
    this.direction = new Vector(0, 0);
    this.width = width;
    this.height = height;
    this.rect = new Rect(x, y, width, height);
  }
  rotate() {
    let center = this.boundaryBox.getCenter();
    canvas.ctx.translate(center.x, center.y);
    canvas.ctx.rotate(this.rotation);
    canvas.ctx.translate(-center.x, -center.y);
  }
  move(direction) {
    // Allows "sliding" when only one component of the direction vector goes out of
    let newY = this.position.y + Math.floor(this.direction.y * this.speed);
    let newX = this.position.x + Math.floor(this.direction.x * this.speed);
    if (
      newX >= this.boundaryBox.left &&
      newX + this.width <= this.boundaryBox.right
    ) {
      this.position.x = newX;
      this.rect.setX(newX);
    }
    if (
      newY >= this.boundaryBox.top &&
      newY + this.height <= this.boundaryBox.bottom
    ) {
      this.position.y = newY;
      this.rect.setY(newY);
    } else
      console.log(
        "out of bounds: ",
        newY,
        newY + this.height,
        this.boundaryBox.bottom
      );
  }
  setSpeed(newSpeed) {
    this.speed = newSpeed;
  }
  checkInteraction() {
    throw new Error("Method checkInteraction() must be implemented.");
  }
}
