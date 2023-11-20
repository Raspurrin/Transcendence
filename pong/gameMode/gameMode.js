import { canvas } from "../canvas.js";
import { Paddle } from "../paddle.js";
import { Ball } from "../ball.js";
import { Rect } from "../Rect.js";
import { Team } from "../team.js";

export class GameMode {
  constructor() {
    this.moveableObjects = new Set();
    this.balls = [];
    this.teams = [];
    this.lastHitBall = undefined;
    this.endGameCondition = undefined;
    this.gameEnd = false;
  }
  gameMode = () => {
    throw new Error("gameMode not implemented");
  };
  gameLoop() {
    this.basicGameLoop(this.gameMode);
  }

  basicGameLoop = (gameMode) => {
    canvas.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (const object of this.moveableObjects) {
      if (object instanceof Paddle) this.collision(object);
      object.checkInteraction();
      object.move();
      object.draw();
    }
    if (this.gameEnd === false)
      window.requestAnimationFrame(this.basicGameLoop);
  };
  addBall() {
    let ball = new Ball();
    ball.setRandomDirection();
    this.balls.push(ball);
    this.moveableObjects.add(ball);
  }
  addTeam(name) {
    let team = new Team(name);
    this.teams.push(team);
  }
  addPaddle(something, paddlefield, upkey, downkey, rotation) {
    let paddle = new Paddle(paddlefield, upkey, downkey, rotation);
    this.moveableObjects.add(paddle);
    something.addPaddle(paddle);
  }
  collision(object) {
    for (const ball of this.balls) {
      if (ball.hitObject(object)) {
        this.lastHitBall = object.team;
      } else if (Rect.collision(object.boundaryBox, ball.rect)) {
        if (this.lastHitBall != undefined) this.lastHitBall.score();
        else
          for (const team of this.teams) if (team != object.team) team.score();
        ball.reset();
        this.lastHitBall = undefined;
        for (const team of this.teams)
          console.log(team.name + ": " + team.scoreCount);
        this.checkEndGameCondition();
      }
    }
  }
  checkEndGameCondition() {
    for (const team of this.teams)
      if (team.scoreCount >= this.endGameCondition) {
        console.log(team.name + " wins!");
        this.gameEnd = true;
      }
  }
}
