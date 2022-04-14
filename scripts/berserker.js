class Berserker extends Character {
  constructor(name, hp, dmg, mana, status, hasPlayed) {
    super(name, (hp = 8), (dmg = 4), (mana = 0), status, hasPlayed);
    this.spe = "Enrage";
  }

  specialAttack(opponent) {
    this.health -= 1;
    this.dmg += 2;
    alert(`${this.name} casts ${this.spe}`);
    this.dealDamage(opponent);
  }

  seeSpecialAttack() {
    alert(
      `${this.spe}\n- Deals 1 damage to self.\n- Increases damage dealt by 2 till the end of the game.`
    );
  }

}
