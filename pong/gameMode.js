import { canvas } from "./canvas.js";
import { Paddle } from "./paddle.js";
import { Ball } from "./ball.js";
import { PaddleField } from "./paddleField.js";

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
    this.paddleField1 = new PaddleField(0, 0, 0, canvas.height);
    this.paddleField2 = new PaddleField(canvas.width, 0, canvas.width, canvas.height);
    this.paddle1 = new Paddle(this.paddleField1, "w", "s");
    this.paddle2 = new Paddle(this.paddleField2, "z", "x");
	this.ball = new Ball();
	this.ball.setRandomDirection();
    this.paddles = new Set();
    this.paddles.add(this.paddle1);
    this.paddles.add(this.paddle2);
	this.paddles.add(this.ball);
  }
  gameLoop = () => {
    canvas.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (const paddle of this.paddles)
    {
      paddle.checkInteraction();
      paddle.move();
      paddle.draw();
    };
    window.requestAnimationFrame(this.gameLoop);
  }
}
