"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTimeBonus = exports.initLimite = exports.random = void 0;
function random(min, max) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
exports.random = random;
function initLimite() {
    return new Date(new Date().getTime() + 10000);
}
exports.initLimite = initLimite;
function addTimeBonus(limite, bonus) {
    const nouvelleLimite = new Date(limite.getTime() + bonus);
    return nouvelleLimite;
}
exports.addTimeBonus = addTimeBonus;
