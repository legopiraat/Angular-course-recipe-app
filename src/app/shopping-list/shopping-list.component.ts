import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Tomato saus', 1),
    new Ingredient('Paprika', 1)
  ]

  constructor() { }

  ngOnInit() {
  }

  ingredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
