import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    private apiURL = 'https://udemy-da4cd-default-rtdb.firebaseio.com/recipes.json';
    constructor(private http: HttpClient,
        private recipeService: RecipeService) { }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put(this.apiURL, recipes)
            .subscribe(
                (response => {
                    console.log(response);
                })
            );
    }

    fetchRecipes() {
        return this.http.get<Recipe[]>(this.apiURL)
            .pipe(map(recipes => {
                return recipes.map(recipe => {
                    return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
                });
            }),
                tap(recipes => {
                    this.recipeService.setRecipes(recipes);
                }))

    }

}