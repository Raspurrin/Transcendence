import { Vector } from "./vector.js";

class Canvas {
  constructor() {
    this.width = document.querySelector("canvas").width;
    this.height = document.querySelector("canvas").height;
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.center = new Vector(this.width / 2, this.height / 2);
  }
}

export var canvas = new Canvas();
