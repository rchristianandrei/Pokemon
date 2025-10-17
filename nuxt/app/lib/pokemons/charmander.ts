import { BasePokemon } from "./basePokemon";

export class Charmander extends BasePokemon{
    override name: string = "Charmander";
    override sprite: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png";
    override attackDamage: number = 5;
    override maxHp: number = 50;

    public override Attack(target: BasePokemon): void {
        super.Attack(target);
    }
}