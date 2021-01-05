function random(min: number, max: number): number {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function initLimite(): Date {
  return new Date(new Date().getTime() + 10000);
}

function addTimeBonus(limite: Date, bonus: number): Date {
  const nouvelleLimite: Date = new Date(limite.getTime() + bonus);
  return limite;
}

export { random, initLimite, addTimeBonus };
