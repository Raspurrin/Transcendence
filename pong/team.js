export class Team {
	constructor (name){
		this.name = name;
		this.scoreCount = 0;
		this.paddles = [];
		this.players = [];
	}
	addPaddle(paddle){
		this.paddles.push(paddle);
		paddle.setTeam(this);
	}
	score(){
		this.scoreCount++;
	}
}