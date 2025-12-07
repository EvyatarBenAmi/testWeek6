import readline from "readline-sync";
import { createPlayer } from "./service/player.js";
import riddles from "./riddles/riddlesDefault.js";
import { addSolveTime, measureSolveTime, showStats } from "./service/time.js";
import { askRiddle } from "./service/showAsk.js";

console.log(`welcome message `);
const userName = readline.question("What is your name?");
const user = createPlayer(userName);
for (let riddle of riddles) {
    let second = measureSolveTime(askRiddle, riddle);
    addSolveTime(user, second)
};
showStats(user);