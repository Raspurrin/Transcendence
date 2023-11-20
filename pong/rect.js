import { Vector } from "./vector.js";

export class Rect {
  constructor(left, top, width, height) {
    this.left = left;
    this.top = top;
    this.right = left + width;
    this.bottom = top + height;
    this.width = width;
    this.height = height;
  }
  setX(x) {
    this.left = x;
    this.right = x + this.width;
  }

  setY(y) {
    this.top = y;
    this.bottom = y + this.height;
  }

  getCenter() {
    return new Vector(
      this.left + (this.right - this.left) / 2,
      this.top + (this.bottom - this.top) / 2
    );
  }
  static collision(rect1, rect2) {
    if (
      rect1.left <= rect2.right &&
      rect1.right >= rect2.left &&
      rect1.top <= rect2.bottom &&
      rect1.bottom >= rect2.top
    )
      return true;
    return false;
  }
}
