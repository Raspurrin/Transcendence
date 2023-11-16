import { InteractiveObject } from "./interactiveObject.js";
import { canvas } from "./canvas.js";
import { PaddleField } from "./paddleField.js";

export class Ball extends InteractiveObject{
	constructor(){
		super(canvas.centerX, canvas.centerY, 10, 10);
		this.boundaryBox = new PaddleField(0, 0, canvas.width, canvas.height);
		this.speed = 2;
		this.colour = "white";
	}
	setRandomDirection()
	{
		this.direction.x = (Math.random() * 2) - 1;
		this.direction.y = (Math.random() * 2) - 1;
	}
	checkInteraction()
	{
		if (this.position.y <= 1 || this.position.y == canvas.height)
			this.direction.y = -this.direction.y;
		console.log(this.position.y, canvas.height);
	}
	move()
	{
		super.move(this.direction);
	}
	draw()
	{
		canvas.ctx.beginPath();
		canvas.ctx.fillStyle = this.colour;
		canvas.ctx.arc(this.position.x, this.position.y, 5, 0, 2 * Math.PI);
		canvas.ctx.fill();
	}
};
