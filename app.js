const startGameBtn = document.getElementById("start-game-btn");

const choices = {
	1: "rock",
	2: "paper",
	3: "scissors",
};

const userInput = prompt(
	`Choose between:
        1 for "rock"
        2 for "paper"
        3 for "scissors"`,
	""
);

console.log("userInput: " + userInput);
console.log(!!userInput);

const theInput = parseInt(userInput);

console.log(!!theInput);

if (!!userInput && !!theInput && 1 <= theInput && theInput <= 3) {
	console.log("inside if: " + theInput);
	console.log(choices[theInput]);
}

function startGame() {
	console.log("Game is starting...");
}

// const person = {
// 	// Method: function attach to an object
// 	greet: function greet() {
// 		console.log("Hello!");
// 	},
// };

// person.greet();
// console.dir(startGame);

startGameBtn.addEventListener("click", startGame);
