import { Component } from '@angular/core';
import { RecipeBookService } from './recipe-book/recipe-book.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeBookService, ShoppingListService]
})
export class AppComponent {

  selectedPage: string = 'recipe';

  onPageSelected(page: string) {
    this.selectedPage = page;
  }
}
