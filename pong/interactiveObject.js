import { Vector } from "./vector.js"

export class InteractiveObject {
  constructor(x, y) {
    this.position = new Vector(x, y);
    this.speed = 1;
    this.direction = new Vector(0, 0);
  }
  
  move(direction) {
    let newY = Math.floor(this.position.y + (this.direction.y * this.speed));
	let newX = Math.floor(this.position.x + (this.direction.x * this.speed));
    if (newX >= this.boundaryBox.min.x && newX <= this.boundaryBox.max.x)
      this.position.x += Math.floor(this.direction.x * this.speed);
    if (newY >= this.boundaryBox.min.y && newY <= this.boundaryBox.max.y)
      this.position.y += Math.floor(direction.y * this.speed);
  }
  setSpeed(newSpeed) {
    this.speed = newSpeed;
  }
	checkInteraction(){
		throw new Error("Method checkInteraction() must be implemented.");
	}
}
