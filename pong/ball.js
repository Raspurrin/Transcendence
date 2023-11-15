import { InteractiveObject } from "./interactiveObject.js";
import { canvas } from "./canvas.js";

export class ball extends InteractiveObject{
	constructor(){
		super(canvas.centerX, canvas.centerY, 10, 10);
		this.boundaryBox = new PaddleField(0, 0, canvas.width, canvas.height);
		this.speed = 1;
	}
	randomDirection()
	{
		return (Math.floor(Math.random(2 * PI)));
	}
	checkInteraction()
	{
		if (y == 0 || y == canvas.height)
			this.direction.Y = -this.direction.Y;
	}
	move()
	{
		super.move(direction);
	}
	draw()
	{
		canvas.ctx.beginPath();
		canvas.ctx.fillStyle = this.colour;
		context.arc(canvas.centerX, canvas.centerY, radius, 0, 2 * Math.PI, false);
	}
};
