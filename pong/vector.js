export class Vector {
	constructor(x, y){
		this.x = x;
		this.y = y;
	}
	addVector(x, y)
	{
		this.x += x;
		this.y += y;
	}
	substractVector(x, y)
	{
		this.x -= x;
		this.y -= y;
	}
	dotProduct(x, y)
	{
		return (this.x * x + this.y * y);
	}
	crossProduct(x, y)
	{
		return (this.x * x - this.y * y);
	}
	magnitute()
	{
		return (Math.sqrt((this.x * this.x) + (this.y * this.y)));
	}
	normalize()
	{
		this.x = this.x / this.magnitute();
		this.y = this.y / this.magnitute();
	}
}
