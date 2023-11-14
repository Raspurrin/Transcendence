import { canvas } from "./canvas.js";
import { InteractiveObject } from "./interactiveObject.js";

export class Paddle extends InteractiveObject{
	constructor(
		boundaryBox,
		upkey,
		downkey
	)
	{
		super((boundaryBox.x1 + boundaryBox.x2) / 2, 
				(boundaryBox.y1 + boundaryBox.y2) / 2, 
									20, 50, "white");
		this.boundaryBox = boundaryBox,
		this.upkey = upkey;
    	this.downkey = downkey;
	}
	checkInteraction() {
		window.addEventListener("keydown", (event) => {
			if (event.key === this.downkey){
				this.direction = 1;
			}
			if (event.key === this.upkey){
				this.direction = -1;
			}
		})
		window.addEventListener("keyup", (event) => {
			if (event.key === this.downkey || event.key == this.upkey) {
				this.direction = 0;
			}
        });
	}
	move()
	{
		super.move(this.direction);
	}
};
