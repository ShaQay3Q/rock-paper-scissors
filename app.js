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
//! DECLRATION SYNTAX

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
const DEFAUL_CHOICE = ROCK;
const PLAYER_WIN = "YOU";
const MACHINE_WIN = "MACHINE";
const DRAW = "DRAW";

let gameIsRunning = false;

//! EXPRESSION SYNTAX
const getMachineChoice = function () {
	const machineSelectOptions = [ROCK, PAPER, SCISSORS];
	return machineSelectOptions[
		Math.floor(Math.random() * machineSelectOptions.length)
	];
};

const getPlayerChoice = function () {
	let selection = prompt(
		`Choose between:
            "Rock"
            "Paper"
            "Scissors"`,
		""
	).toUpperCase();

	console.log(`selection: ${selection}`);

	if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
		alert(`Invalid choice! We chose ${DEFAUL_CHOICE} for you.`);
		selection = DEFAUL_CHOICE;
	}
	console.log(selection);

	return selection;
};

const getWinner = (userChoice, machineSelect) => {
	userChoice === machineSelect
		? alert(
				`It is a ${DRAW}!
        ${userChoice} agianst ${machineSelect}`
		  )
		: (userChoice === ROCK && machineSelect === SCISSORS) ||
		  (userChoice === SCISSORS && machineSelect === PAPER) ||
		  (userChoice === PAPER && machineSelect === ROCK)
		? alert(`${PLAYER_WIN} WON!
        ${userChoice} against ${machineSelect}`)
		: alert(`${MACHINE_WIN} WON!
        ${machineSelect} against ${userChoice}`);
};

startGameBtn.addEventListener("click", function () {
	if (gameIsRunning) {
		return;
	}
	gameIsRunning = true;
	// getWinner(getPlayerChoice(), getMachineChoice());
	const userChoice = getPlayerChoice();
	const machineSelect = getMachineChoice();
	console.log(`M: ${machineSelect}`);

	getWinner(userChoice, machineSelect);
});
