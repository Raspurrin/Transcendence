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
		this.direction.x = (Math.random() * 2) - 1;
		this.direction.y = (Math.random() * 2) - 1;
	}
	checkInteraction()
	{
		if (y == 0 || y == canvas.height)
			this.direction.y = -this.direction.y;
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
