import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  imgPath: string  = "https://as1.ftcdn.net/v2/jpg/01/84/04/10/1000_F_184041094_LjaVqs8hHM3sZLvbKl442ogMC528F49R.jpg";
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test", this.imgPath),
    new Recipe("A Test Recipe", "This is simply a test", this.imgPath)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
