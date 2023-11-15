import { Vector } from "./vector.js"

export class InteractiveObject {
  constructor(x, y) {
    this.position = new Vector(x, y);
    this.speed = 1;
    this.direction = new Vector(0, 0);
  }
  
  move(direction) {
    let newY = this.position.y + (this.direction.y * this.speed);
	let newX = this.position.x + (this.direction.x * this.speed);
	//console.log("newY: ", newY, "pos: ", this.position, "dir: ", this.direction);
	//console.log("calc: ", this.direction.y * this.speed);
	//console.log(this.position.y);
	console.log("newX: ", newX, "newY", newY);
    if (newX >= this.boundaryBox.min.x && newX <= this.boundaryBox.max.x)
      this.position.x += this.direction.x * this.speed;
    if (newY >= this.boundaryBox.min.y && newY <= this.boundaryBox.max.y)
      this.position.y += direction.y * this.speed;
	console.log("new position: ", this.position);
  }
  setSpeed(newSpeed) {
    this.speed = newSpeed;
  }
	checkInteraction(){
		throw new Error("Method checkInteraction() must be implemented.");
	}
}
