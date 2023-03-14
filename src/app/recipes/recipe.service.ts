import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  imgPath: string  = "https://as1.ftcdn.net/v2/jpg/01/84/04/10/1000_F_184041094_LjaVqs8hHM3sZLvbKl442ogMC528F49R.jpg";
  private recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test", this.imgPath),
    new Recipe("Another Test Recipe", "This is simply a test", this.imgPath)
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes(): Recipe[]{
    return this.recipes.slice();
  }
}