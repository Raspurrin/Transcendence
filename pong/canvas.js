class Canvas {
	constructor(
		width,
		height
	){
		this.width = width;
		this.height = height;
		this.canvas = document.querySelector("canvas");
		this.ctx = this.canvas.getContext("2d");
		this.centerX = width / 2;
		this.centerY = height / 2;
	}
}

export var canvas = new Canvas(980, 150);