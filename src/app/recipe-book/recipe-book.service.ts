import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeBookService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Spaghetti', 'Very Yummy stringy food', 'https://www.blueband.nl/media/recipes/fy-nl/spaghetti-bolognese.jpg?v=20190524&mode=crop&width=1190&height=701&format=jpg&quality=75')
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}