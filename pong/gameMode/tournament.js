import { GameMode } from "./gameMode.js";
import { canvas } from "../canvas.js";

export class Tournament extends GameMode {
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
    this.addPaddle(this.teams[0], this.paddleField1, "w", "s", 0);
    this.addPaddle(this.teams[1], this.paddleField2, "z", "x", 180);
    this.addBall();
  }
  gameMode() {}
}
