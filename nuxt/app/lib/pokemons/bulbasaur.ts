import { BasePokemon } from "./basePokemon";

export class Bulbasaur extends BasePokemon {
    override name: string = "Bulbasaur";
    override sprite: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";
    override attackDamage: number = 5;
    override maxHp: number = 50;
    
    public override Attack(target: BasePokemon): void {
        super.Attack(target);
    }
}