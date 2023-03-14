import { Ingredient } from "../shared/inredient.model";

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string; //url
    public ingredients: Ingredient[];

    constructor(name:string, desc: string, path: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = path;
        this.ingredients = ingredients;
    }
}