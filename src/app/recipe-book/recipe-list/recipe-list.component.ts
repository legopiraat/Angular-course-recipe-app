import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output()
  recipeSelectedEmitter = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Spaghetti', 'Very Yummy stringy food', 'https://www.blueband.nl/media/recipes/fy-nl/spaghetti-bolognese.jpg?v=20190524&mode=crop&width=1190&height=701&format=jpg&quality=75')
  ];

  constructor() { }

  ngOnInit() {
  }

  recipeSelected(recipe: Recipe) {
    this.recipeSelectedEmitter.emit(recipe);
  }
}
