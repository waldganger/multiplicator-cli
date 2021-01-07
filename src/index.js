"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const lib_1 = require("./lib");
const BONUS = 2000;
let limite = lib_1.initLimite();
let score = 0;
// console.clear();
while (Date.now() < limite.getTime()) {
    const op1 = lib_1.random(2, 9);
    const op2 = lib_1.random(2, 9);
    const produit = op1 * op2;
    const reponse = readline_sync_1.default.questionInt(`Combien font ${op1} * ${op2} ?\n`);
    if (reponse === produit) {
        // console.clear();
        console.log("Gut. Bonus : 2s.");
        score++;
        limite = lib_1.addTimeBonus(limite, BONUS);
    }
    else {
        // console.clear();
        console.log(`NEIN NEIN NEIN : ${produit}`);
    }
    const tempRestant = Math.floor((limite.getTime() - Date.now()) / 1000);
    console.log(tempRestant <= 0 ? "Temps écoulé." : `Temps restant : ${tempRestant} s.`);
}
console.log("Fin de la partie.");
console.log("Score : " + score);
readline_sync_1.default.keyInPause("Quitter...");
process.exit(0);
