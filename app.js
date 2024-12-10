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
const PLAYER_WIN = "PLAYER";
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
		return;
	}
	console.log(selection);

	return selection;
};

const getWinner = (machineSelect, userChoice = DEFAUL_CHOICE) =>
	//OMMIT Return; in () => {} with turnnury
	userChoice === machineSelect
		? DRAW
		: (userChoice === ROCK && machineSelect === SCISSORS) ||
		  (userChoice === SCISSORS && machineSelect === PAPER) ||
		  (userChoice === PAPER && machineSelect === ROCK)
		? PLAYER_WIN
		: MACHINE_WIN;

const declareResult = (input, mChoice, pChoice = DEFAUL_CHOICE) => {
	let message = `
	${pChoice || DEFAUL_CHOICE} agianst ${mChoice}`;
	switch (input) {
		case PLAYER_WIN:
			message = `${PLAYER_WIN} WON!` + message;
			break;
		case MACHINE_WIN:
			message = `${MACHINE_WIN} WON!` + message;
			break;
		case DRAW:
			message = `It is a ${DRAW}!` + message;
			break;
	}
	return message;
};

startGameBtn.addEventListener("click", function () {
	if (gameIsRunning) {
		return;
	}

	// DESABLE the button
	gameIsRunning = true;
	// getWinner(getPlayerChoice(), getMachineChoice());
	const userChoice = getPlayerChoice();
	const machineSelect = getMachineChoice();
	console.log(`M: ${machineSelect}`);

	let winner;
	let message;
	if (!!userChoice) {
		winner = getWinner(machineSelect, userChoice);
		message = declareResult(winner, machineSelect, userChoice);
	} else {
		winner = getWinner(machineSelect);
		message = declareResult(winner, machineSelect);
	}

	alert(message);

	// ENABLE the button
	gameIsRunning = false;
});
