import { InteractiveObject } from "./interactiveObject.js";
import { canvas } from "./canvas.js";
import * as env from "./constants.js";

export class Paddle extends InteractiveObject {
  constructor(boundaryBox, upkey, downkey, rotation) {
    const center = boundaryBox.getCenter();
    super(
      center.x - env.PADDLEWIDTH / 2,
      center.y - env.PADDLEHEIGHT / 2,
      env.PADDLEWIDTH,
      env.PADDLEHEIGHT,
      rotation
    );
    this.boundaryBox = boundaryBox;
    this.upkey = upkey;
    this.downkey = downkey;
    this.colour = "white";
    this.team = undefined;
	this.rotation = rotation * (Math.PI / 180);
  }
  setTeam(team) {
    this.team = team;
  }

  draw() {
    canvas.ctx.save();
    if (this.rotation != 0)
      this.rotate();
    canvas.ctx.beginPath();
    canvas.ctx.fillStyle = this.colour;
    canvas.ctx.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
    canvas.ctx.restore();
  }
  checkInteraction() {
    window.addEventListener("keydown", (event) => {
      if (event.key === this.downkey) {
        this.direction.y = 1;
      }
      if (event.key === this.upkey) {
        this.direction.y = -1;
      }
    });
    window.addEventListener("keyup", (event) => {
      if (event.key === this.downkey || event.key == this.upkey) {
        this.direction.y = 0;
      }
    });
  }
  move() {
    super.move(this.direction);
  }
}
