import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [];

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient): void {
        const index = this.ingredients.indexOf(ingredient);

        if(index != -1) {
            this.ingredients[index].amount = this.ingredients[index].amount + ingredient.amount;
        } else {
            this.ingredients.push(ingredient);
        }
        
        this.ingredientsChanged.emit(this.getIngredients());
    }

}