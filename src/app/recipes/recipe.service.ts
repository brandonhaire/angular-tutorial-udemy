import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/inredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
  imgPath: string  = "https://as1.ftcdn.net/v2/jpg/01/84/04/10/1000_F_184041094_LjaVqs8hHM3sZLvbKl442ogMC528F49R.jpg";
  private recipes: Recipe[] = [
    new Recipe(
      "Tasty Schnitzel", 
      "A super-tasty Schnitzel - just awesome!",
      "https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG", 
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe("Big Fat Burger",
    "What else you need to say?", 
    "https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg",
    [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1)
    ])
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes(): Recipe[]{
    return this.recipes.slice();
  }
}