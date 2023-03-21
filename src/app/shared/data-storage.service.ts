import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({providedIn: 'root'})
export class DataStorageService {
    private apiURL = 'https://udemy-da4cd-default-rtdb.firebaseio.com/recipes.json';
    constructor(private http: HttpClient,
                private recipeService: RecipeService) {}    
    
    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put(this.apiURL, recipes)
        .subscribe(
            (response => {
                console.log(response);
            })
        );
    }

}