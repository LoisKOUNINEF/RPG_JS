class Wizard extends Character {
  constructor(name, hp, dmg, mana, status, hasPlayed) {
    super(name, (hp = 10), (dmg = 2), (mana = 200), status, hasPlayed);
    this.spe = "Fireball";
  }

  specialAttack(opponent) {
    this.dmg = 8;
    alert(`${this.name} casts ${this.spe} on ${opponent.name}.`);
    this.dealDamage(opponent);
    this.dmg = 2;
    this.mana -= 25;
  }

  seeSpecialAttack() {
    alert(
      `${this.spe}\n- Deals 7 damage.\n- Costs 25 mana.`
    );
  }
}
