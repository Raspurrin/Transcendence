/**
 * HTML only contains a canvas which we manipulate in Javascript for this basic version!
 * 
 * players choose gamemode
 * gamemodeInit()
 * GAME LOOP: calls gamemodeUpdate every time
 * 
 * CLASSES: 
 * - Paddle: Attributes: x, y, direction, speed, size, paddleField, methods: Moveup(), Movedown(), checkPaddleFieldCollision(object)
 * - Ball: Attributes: x, y, direction, speed, size, methods: Move(), initialRandomMove()
 * - Gamemode abstract class: methods: init(), gameUpdate(), score(), checkEndGameCondition() attributes: endGameCondition
 * 	- Tournament
 * 	- VSmode
 * - Team: Attributes: a set of players or just one and a score
 * - Player: Attributes: A name, a profile reference in the future and somewhere to know their location in the database.
 * --------------------------------------------------------------
 * STEPS: 
 * - Write a paddle class with a size and wallX and wallY to consider for it, a method to move it and to set the speed and current direction
 * - Then create a Gamemode abstract class and create the VSmode gamemode object, in the init method, initialize two peddles, then add gameUpdate to a game loop
 * - Write a ball class with an init method with a random direction to start with and a default speed and collision detection methods
 * - Add the collision detection methods to gameUpdate. Where should I put the collision though..? 
 * - Teams should have scores and the gameMode should check for end conditions and decide what to do with them
 * - Teams can have a set up method where people can input their names. In tournament mode you can add several players to a team. When a person scores, the players are switched
 * and outputted on the screen. The ball stops in the middle until someone moves a peddle. Score method of the gamemode? Since with tournament it needs input and with VSmode 
 * it continues
 */

/**
 * Even smaller steps: 
 * - link your script with defer and as a module
 * - add a canvas to HTML
 * - try to draw on it and move it with an event listener
 */

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
var x = 10
var y = 10
ctx.fillRect(x, 10, 150, 100);
window.addEventListener("keydown", (event) => {
	if (event.key === "d")
	{
		x += 10
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillRect(x, y, 150, 100);
	}
	if (event.key === "a")
	{
		x -= 10;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillRect(x, y, 150, 100);
	}
})