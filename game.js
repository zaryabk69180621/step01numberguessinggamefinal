import inquirer from "inquirer";
let i = "y";
let userenter;
let score = 0;
let guessed;
while (i == "y") {
    guessed = Math.round((Math.random() * 10));
    userenter = await inquirer.prompt({
        message: "guess a number beetween 1 and 10",
        type: "input",
        name: "gue",
    });
    if (guessed === parseInt(userenter.gue)) {
        console.log(`you won    your score is${++score} `);
    }
    else {
        console.log(`better luck next time our guess was ${guessed} score is ${score}`);
    }
    i = (await inquirer.prompt({
        type: "input",
        message: " do you want to play anothe round",
        name: "choic"
    })).choic;
}
