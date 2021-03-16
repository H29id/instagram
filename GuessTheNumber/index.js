const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function start() {
	const number = Math.floor(Math.random() * 100) + 1;
	console.log("Guess the number from 1 to 100: ");
	play(number);
};

start();

function play(number) {
	let input = rl.on("line", (line) => {
		const answer = parseInt(line);
		if(isNaN(answer)) {
			console.log("The answer must be an integer.");
		};

		if(answer === number) {
			console.log("You got the number!");
			process.exit(0);
		} else {
			if(answer < number) {
				if(number - answer < 6) {
					console.log("Just need a little bit more numbers.");
				};
				if(number - answer > 5) {
					console.log("Too little.");
				};
			};
			if(answer > number) {
				if(answer - number < 6) {
					console.log("Subtract little bit numbers.");
				};
				if(answer - number > 5) {
					console.log("Too much.");
				};
			};
		};
	});
};
