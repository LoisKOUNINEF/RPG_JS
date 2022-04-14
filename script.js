const Jünkin = new Fighter("Jünkin");
const Benbarek = new Paladin("Benbarek");
const Ceyl = new Wizard("Ceyl");
const Alrika = new Monk("Alrika");
const Minipouss = new Berserker("Minipouss");
const Elin = new Assassin("Elin");
const Jahluv = new Shaman("Jahluv");

let players = [Jünkin, Benbarek, Ceyl, Alrika, Minipouss, Elin, Jahluv];

const start = new Game(players);

alert("Welcome to battle arena 101.");

while (start.turnLeft > 0 && !start.checkForWin()) {
  start.newTurn();
  let turn = new Turn(players, start.turnLeft);
  turn.startTurn();
  turn.turnPlay();
}

start.gameOver();
