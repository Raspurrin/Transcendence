import { Vector } from "./vector.js"

export class PaddleField {
  constructor(minX, minY, maxX, maxY) {
    this.min = new Vector(minX, minY);
    this.max = new Vector(maxX, maxY);
	this.centerX = (minX + maxX) / 2;
	this.centerY = (minY + maxY) / 2
  }
}
