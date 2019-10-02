import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output()
  ingredientAddedEmitter = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addIngredient(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    this.ingredientAddedEmitter.emit(new Ingredient(nameInput.value, new Number(amountInput.value)));
  }

}
