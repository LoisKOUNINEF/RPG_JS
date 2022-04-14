class Paladin extends Character {
  constructor(name, hp = 16, dmg = 3, mana = 160, status, hasPlayed) {
    super(name, hp, dmg, mana, status, hasPlayed);
    this.spe = "Holy Smite";
  }

  specialAttack(opponent) {
    this.dmg = 4;
    alert(`${this.name} uses ${this.spe} on ${opponent.name}`);
    this.dealDamage(opponent);
    alert(`${this.name} gains 5 hp.`);
    this.dmg = 3;
    this.hp += 5;
    this.mana -= 40;
  }

  seeSpecialAttack() {
    alert(
      `${this.spe}\n deals 4 damage.\n Restore 5 hp.\n Costs 40 mana.`
    );
  }
}
