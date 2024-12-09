const startGameBtn = document.getElementById("start-game-btn");

// const choices = {
// 	1: "rock",
// 	2: "paper",
// 	3: "scissors",
// };

// const userInput = prompt(
// 	`Choose between:
//         1 for "rock"
//         2 for "paper"
//         3 for "scissors"`,
// 	""
// );

// const userInput = prompt(
// 	`Choose between:
//         1 for "rock"
//         2 for "paper"
//         3 for "scissors"`,
// 	""
// );

// console.log("userInput: " + userInput);
// console.log(!!userInput);

// const theInput = parseInt(userInput);

// console.log(!!theInput);

//! FIRST WAY
// function getPlayerChoice() {
// 	while (!userInput || !theInput || theInput < 1 || theInput > 3) {
// 		const userInput = prompt(
// 			`Choose between:
//                 1 for "rock"
//                 2 for "paper"
//                 3 for "scissors"`,
// 			""
// 		);

// 		console.log("userInput: " + userInput);
// 		console.log(!!userInput);

// 		const theInput = parseInt(userInput);

// 		console.log(!!theInput);
// 	}
// 	if (!!userInput && !!theInput && 1 <= theInput && theInput <= 3) {
// 		console.log("inside if: " + theInput);
// 		console.log(choices[theInput]);
// 		return choices[theInput];
// 	}
// }

// const playerChoice = getPlayerChoice();

//! SECONS WAY

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

const machineSelectOptions = [ROCK, PAPER, SCISSORS];
const autoSelect =
	machineSelectOptions[Math.floor(Math.random() * machineSelectOptions.length)];
// console.log(autoSelect);

const getPlayerChoice = function () {
	let selection = prompt(
		`Choose between:
            "Rock"
            "Paper"
            "Scissors"`,
		""
	).toUpperCase();
	console.log(selection);

	if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
		alert("Invalid choice! We chose 'ROCK' for you.");
	}
	selection = "ROCK";
	console.log(ROCK);
	console.log(selection);

	if (
		(selection === ROCK && autoSelect === SCISSORS) ||
		(selection === SCISSORS && autoSelect === PAPER) ||
		(selection === PAPER && autoSelect === ROCK)
	) {
		alert(`Your ${selection} won against Machine's ${autoSelect}`);
	} else if (
		(autoSelect === ROCK && selection === SCISSORS) ||
		(autoSelect === SCISSORS && selection === PAPER) ||
		(autoSelect === PAPER && selection === ROCK)
	) {
		alert(`Machine's ${autoSelect} won against your ${selection}`);
	} else {
		alert(
			`With your ${selection} agianst Machine's ${autoSelect}, it is a DRAW!`
		);
	}
};

// const person = {
// 	// Method: function attach to an object
// 	greet: function greet() {
// 		console.log("Hello!");
// 	},
// };

// person.greet();
// console.dir(startGame);

startGameBtn.addEventListener("click", getPlayerChoice);
