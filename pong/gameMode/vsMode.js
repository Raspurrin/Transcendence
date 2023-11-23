import { GameMode } from "./gameMode.js";
import { canvas } from "../canvas.js";
import { Rect } from "../Rect.js";
import * as env from "../constants.js";

export class VSMode extends GameMode {
  constructor() {
    super();
    this.endGameCondition = 2;
    this.addTeam("spectacularian");
    this.addTeam("suckian");
    this.paddleField1 = new Rect(0, 0, env.PADDLEWIDTH, canvas.height);
    this.paddleField2 = new Rect(
      canvas.width - env.PADDLEWIDTH,
      0,
      env.PADDLEWIDTH,
      canvas.height
    );
	//this.paddleField3 = new Rect(0, 0, canvas.width, env.PADDLEWIDTH);
    this.addPaddle(this.teams[0], this.paddleField1, "w", "s", 0);
    this.addPaddle(this.teams[1], this.paddleField2, "z", "x", 180);
	  //this.addPaddle(this.teams[0], this.paddleField3, "c", "v", 90);
    this.addBall();
  }
  gameMode() {}
}
