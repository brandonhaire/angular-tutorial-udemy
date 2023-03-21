import { Subject } from "rxjs";
import { Ingredient } from "../shared/inredient.model";

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);     //equivalent to the code above
    this.ingredientsChanged.next(this.ingredients.slice());

    //first attempt
    // for (let i = 0; i < ingredients.length; i++) {
    //   console.log("first for loop");
    //   if (this.ingredients.includes(ingredients[i])) {
    //     // add amount of ingredient
    //     let index = 0;
    //     let amount = 0;
    //     for (let j = 0; j < this.ingredients.length; j++){
    //       console.log("second for loop");
    //       if (this.ingredients[j].name.toLowerCase === ingredients[i].name.toLowerCase) {
    //         index = j;
    //         amount = ingredients[i].amount;
    //       }
    //     }
    //     this.ingredients[index].amount += amount;

    //   } else {
    //     // add new ingredient (push)
    //     this.ingredients.push(ingredients[i]);
    //   }

    //second attempt
    // let duplicates: {name: string, amount: number, index: number}[] = [];
    // for (let i = 0; i < ingredients.length; i++) {
    //   if (this.ingredients.includes(ingredients[i])) {
    //     const duplicate = ingredients[i].name;
    //     for (let j = 0; j < this.ingredients.length; j++){
    //       if (this.ingredients[j].name.toLowerCase === duplicate.toLowerCase) {
    //         duplicates.push({name: ingredients[i].name,amount: ingredients[i].amount,index: j});
    //     }
    //   }
    //   } else {
    //     this.ingredients.push(ingredients[i]);
    //   }
    // }

    // for (let i = 0; i< duplicates.length; i++) {
    //   // const name = duplicates[i].name;
    //   // const amount = duplicates[i].amount;
    //   this.ingredients[duplicates[i].index].amount += duplicates[i].amount;
    // }
    // console.log(duplicates);
  }


  getIngredient(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}