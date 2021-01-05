import readline from "readline-sync";
import { random, initLimite, addTimeBonus } from "./lib";

const BONUS = 2000;

let limite = initLimite();
let score = 0;

while (Date.now() < limite.getTime()) {
  const op1 = random(2, 9);
  const op2 = random(2, 9);
  const produit = op1 * op2;
  const reponse = readline.questionInt(`Combien font ${op1} * ${op2} ?\n`);
  if (reponse === produit) {
    console.clear();
    console.log("Gut. Bonus : 2s.");
    score++;
    limite = addTimeBonus(limite, BONUS);
  } else {
    console.clear();
    console.log(`NEIN NEIN NEIN : ${produit}`);
  }
  const tempRestant = Math.floor((limite.getTime() - Date.now()) / 1000);
  console.log(
    tempRestant <= 0 ? "Temps écoulé." : `Temps restant : ${tempRestant} s.`
  );
}
console.log("Fin de la partie.");
console.log("Score : " + score);

process.exit(0);
