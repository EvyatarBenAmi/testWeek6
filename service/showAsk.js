import readline from "readline-sync";
export function askRiddle(riddleObj) {
    console.log(`The riddle’s name: ${riddleObj.name}\nThe task description: ${riddleObj.taskDescription} `);
    if (riddleObj.choices) {
        console.log(`choice: ${riddleObj.choices}`);
    };
    let answer = readline.question("What is your answer?");
    while (answer != riddleObj.correctAnswer) {
        answer = readline.question("What is your answer?");
    };
    console.log(`good`);
};
