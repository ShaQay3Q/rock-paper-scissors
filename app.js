const startGameBtn = document.getElementById("start-game-btn");

function startGame() {
	console.log("Game is starting...");
}

const person = {
	// Method: function attach to an object
	greet: function greet() {
		console.log("Hello!");
	},
};

person.greet();
console.dir(startGame);

startGameBtn.addEventListener("click", startGame);
