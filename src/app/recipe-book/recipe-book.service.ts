import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeBookService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Spaghetti', 'Very Yummy stringy food',
            'https://www.blueband.nl/media/recipes/fy-nl/spaghetti-bolognese.jpg?v=20190524&mode=crop&width=1190&height=701&format=jpg&quality=75',
            [new Ingredient('Tomatosaus', 1), new Ingredient('paprika', 1)])
    ];

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        ingredients.forEach((ingredient) => this.shoppingListService.addIngredient(ingredient));
    }
}