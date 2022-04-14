class Assassin extends Character {
  constructor(name, hp, dmg, mana, status, hasPlayed) {
    super(name, (hp = 6), (dmg = 6), (mana = 20), status, hasPlayed);
    this.spe = "Backstab";
    this.actived = false;
  }

  specialAttack(opponent) {
    this.dmg = 7;
    alert(`${this.name} casts ${this.spe} on ${opponent.name}`);
    this.dealDamage(opponent);
    this.dmg = 6;
    this.mana -= 20;
    this.actived = true;
  }

  seeSpecialAttack() {
    alert(
      `${this.spe}\n- Deals 5 damage.\n- Reduces damage taken by 2.\n- Costs 20 mana.`
      );
  }

  takeDamage(damage) {
    if (this.actived == true) {
      damage = 0;
      alert(
        `${this.name} uses ${this.spe} to avoid damage.\n${this.name} doesn't take any damage. \n${this.name} has ${this.hp} hp left.`
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
