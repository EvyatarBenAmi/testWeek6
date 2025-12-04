import readline from "readline-sync";
import { createPlayer } from "./service/player.js";

console.log(`welcome message `);
const name = readline.question("What is your name?");
const player = createPlayer(name);