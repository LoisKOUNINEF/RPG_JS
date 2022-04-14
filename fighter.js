class Fighter extends Character {
  constructor(name, hp, dmg, mana, status, hasPlayed) {
    super(name, (hp = 12), (dmg = 4), (mana = 40), status, hasPlayed);
    this.spe = "Bloodlust";
    this.actived = false;
  }

  specialAttack(opponent) {
    this.dmg = 5;
    alert(`${this.name} casts ${this.spe} on ${opponent.name}`);
    this.dealDamage(opponent);
    this.dmg = 4;
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
      damage -= 2;
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
