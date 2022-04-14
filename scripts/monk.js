class Monk extends Character {
  constructor(name, hp = 8, dmg = 2, mana = 200, status, hasPlayed) {
    super(name, hp, dmg, mana, status, hasPlayed);
    this.spe = "Penance";
  }

  specialAttack(opponent) {
    this.dealDamage(opponent);
    this.hp += 8;
    this.mana -= 25;
    alert(`${this.name} uses ${this.spe} and gains 8 hp.`);
  }

  seeSpecialAttack() {
    alert(
      `${this.spe}\n- Gain 8 hp.\n- Attacks opponent.\n- Costs 25 mana.`
    );
  }
}
