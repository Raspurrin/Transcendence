import { InteractiveObject } from "./interactiveObject.js";
import { canvas } from "./canvas.js";

export class Paddle extends InteractiveObject{
	constructor(
		boundaryBox,
		upkey,
		downkey
	)
	{
		super(boundaryBox.centerX, boundaryBox.centerY);
		this.boundaryBox = boundaryBox;
		this.upkey = upkey;
    	this.downkey = downkey;
		this.width = 20;
		this.height = 50;
		this.colour = "white";
	}
	draw(){
		canvas.ctx.beginPath();
		canvas.ctx.fillStyle = this.colour;
		canvas.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
	}
	checkInteraction(){
		window.addEventListener("keydown", (event) => {
			if (event.key === this.downkey){
				this.direction.y = 1;
			}
			if (event.key === this.upkey){
				this.direction.y = -1;
			}
		})
		window.addEventListener("keyup", (event) => {
			if (event.key === this.downkey || event.key == this.upkey) {
				this.direction.y = 0;
			}
        });
	}
	move()
	{
		super.move(this.direction);
	}
};
