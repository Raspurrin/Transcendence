import { canvas } from "./canvas.js";

export class InteractiveObject {
  constructor(x, y, width, height, colour) {
    this.x = x;
    this.y = y;
    this.speed = 1;
    this.direction = 0;
    this.width = width;
    this.height = height;
	  this.colour = colour;
  }
  draw() {
    //console.log("x: ", this.x, "y: ", this.y, "width: ", this.width, 
    //                "height: ", this.height, "colour: ", this.colour);
    canvas.ctx.beginPath();
    canvas.ctx.fillStyle = this.colour;
    canvas.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  move(direction) {
    console.log(direction);
    let newY = this.y + (direction * this.speed);
    // if (newX > this.boundaryBox.x1 && newX < this.boundaryBox.x2)
    //   this.x += this.direction * this.speed;
    if (newY > this.boundaryBox.y1 && newY < this.boundaryBox.y2)
      this.y += direction * this.speed;
  }
  setSpeed(newSpeed) {
    this.speed = newSpeed;
  }
	checkInteraction(){
		throw new Error("Method checkInteraction() must be implemented.");
	}
}
