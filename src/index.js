"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function random(min, max) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
while (true) {
    const op1 = random(2, 9);
    const op2 = random(2, 9);
    const resultat = op1 * op2;
    const chiffre = readline_sync_1.default.question(`Combien font ${op1} et ${op2} ?`);
    console.log(chiffre + 4);
}
