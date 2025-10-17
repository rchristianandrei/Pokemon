export abstract class BasePokemon {
  abstract name: string;
  abstract sprite: string;
  abstract attackDamage: number;
  maxHp: number = 50;
  currentHp: number = 0;

  constructor(){
    this.currentHp = this.maxHp;
  }

  public Attack(target: BasePokemon) {
    target.currentHp -= this.attackDamage;
  }
}
