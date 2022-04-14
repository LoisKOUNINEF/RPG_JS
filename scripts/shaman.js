class Shaman extends Character {
  constructor(name, hp, dmg, mana, status, hasPlayed) {
    super(name, (hp = 12), (dmg = 3), (mana = 100), status, hasPlayed);
    this.spe = "Totems";
    this.actived = false;
  }

  specialAttack(opponent) {
    this.dmg += 1;
    alert(`${this.name} casts ${this.spe}`);
    this.dealDamage(opponent);
    this.mana -= 40;
    this.actived = true;
  }

  seeSpecialAttack() {
    alert(
      `${this.spe}\n- Increases damage done by 1 for the rest of the game.\n- Reduces damage taken by 1 this turn.\n- Restore 1 hp.\n- Costs 40 mana.`
    );
  }

  takeDamage(damage) {
    if (this.actived == true) {
      damage -= 1;
      this.hp -= damage;
      alert(
        `${this.name} uses ${this.spe} to reduce damage taken.\n${this.name} only takes ${damage} damage. \n${this.name} has ${this.hp} hp left.`
      );
    } else {
      this.hp -= damage;
      alert(
        `${this.name} takes ${damage} damage.\n${this.name} has ${this.hp} hp left.`
      );
    }
  }

  resetSpe() {
    this.actived = false;
  }
}
