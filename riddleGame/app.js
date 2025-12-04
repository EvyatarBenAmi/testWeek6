import readline from "readline-sync";
import { createPlayer } from "./service/player.js";
import riddles from "./riddles/riddlesDefault.js";

console.log(`welcome message `);
const name = readline.question("What is your name?");
const player = createPlayer(name);
for (let riddle of riddles){

}