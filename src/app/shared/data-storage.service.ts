import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { AuthService } from "../auth/auth.service";

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    private apiURL = 'https://udemy-da4cd-default-rtdb.firebaseio.com/recipes.json';
    constructor(private http: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService) { }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put(this.apiURL, recipes)
            .subscribe(
                (response => {
                    console.log(response);
                })
            );
    }

//  after introducing auth.interceptor.service.ts
    fetchRecipes() {
        return this.http
            .get<Recipe[]>(
                this.apiURL
            )
            .pipe(
                map(recipes => {
                    return recipes.map(recipe => {
                        return {
                            ...recipe,
                            ingredients: recipe.ingredients ? recipe.ingredients : []
                        };
                    });
                }),
                tap(recipes => {
                    this.recipeService.setRecipes(recipes);
                })
            );
    }

    // before using auth.interceptor.service.ts
    // fetchRecipes() {
    //     return this.authService.user.pipe(
    //         take(1),
    //         exhaustMap(user => {
    //             return this.http.get<Recipe[]>(this.apiURL, 
    //                 {
    //                     params: new HttpParams().set('auth', user.token)
    //                 });
    //         }),
    //         map(recipes => {
    //             return recipes.map(recipe => {
    //                 return {
    //                     ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []
    //                 };
    //             });
    //         }),
    //         tap(recipes => {
    //             this.recipeService.setRecipes(recipes);
    //         })
    //     );
    // }
}