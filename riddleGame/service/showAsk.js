import readline from "readline-sync";
export function askRiddle(riddleObj) {
    console.log(`The riddle’s name: ${riddleObj.name}\nThe task description: ${riddleObj.taskDescription}`);
    var answer = readline.question("What is your answer?");
    while (answer != riddleObj.correctAnswer) {
        var answer = readline.question("What is your answer?");
    };
    console.log(`good`);
};