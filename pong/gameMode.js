import { canvas } from "./canvas.js";
import { Paddle } from "./paddle.js";
import { Ball } from "./ball.js";
import { Rect } from "./Rect.js";
import * as env from "./constants.js";

class GameMode {
  constructor() {
    if (this.constructor == GameMode)
      throw new Error("Abstract classes can't be instantiated.");
  }
  gameLoop() {
    throw new Error("Method 'gameUpdate()' must be implemented.");
  }
}

export class VSMode extends GameMode {
  constructor() {
    super();
    this.paddleField1 = new Rect(0, 0, env.PADDLEWIDTH, canvas.height);
    this.paddleField2 = new Rect(
      canvas.width - env.PADDLEWIDTH,
      0,
      env.PADDLEWIDTH,
      canvas.height
    );
    this.paddle1 = new Paddle(this.paddleField1, "w", "s", 0);
    this.paddle2 = new Paddle(this.paddleField2, "z", "x", 180);
    this.ball = new Ball();
    this.ball.setRandomDirection();
    this.moveableObjects = new Set();
    this.moveableObjects.add(this.paddle1);
    this.moveableObjects.add(this.paddle2);
    this.moveableObjects.add(this.ball);
    this.paddle1.draw();
  }
  gameLoop = () => {
    canvas.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (const object of this.moveableObjects) {
      if (object instanceof Paddle) this.ball.hitObject(object);
      object.checkInteraction();
      object.move();
      object.draw();
    }
    window.requestAnimationFrame(this.gameLoop);
  };
}
