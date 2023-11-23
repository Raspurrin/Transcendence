import { Tournament } from "./gameMode/tournament.js";
import { VSMode } from "./gameMode/VSMode.js";
import { injectionOverwrite } from "../contentInjection.js";

export class gameInit {
  constructor() {
    this.gameMode = undefined;
  }
  gameLoop() {
    this.gameForm();
  }
  async gameForm() {
	await fetch("pong/templates/pickGameMode.txt")
    .then((response) => response.text())
    .then((text) => injectionOverwrite(text))
    .catch((e) => console.error("error: ", e));
	this.gameOption();
  }
  gameOption() {
    document.querySelector("form").addEventListener("submit", function (event) {
      event.preventDefault();
      var gameMode = document.querySelector("select").value;
      if (gameMode === "tournament") gameMode = new Tournament();
      else if (gameMode === "vsMode") gameMode = new VSMode();
	  injectionOverwrite(`<canvas width="700" height="500"></canvas>`);
	  gameMode.gameLoop();
    });
  }
}
