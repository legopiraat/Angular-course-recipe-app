import { Component } from '@angular/core';
import { RecipeBookService } from './recipe-book/recipe-book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeBookService]
})
export class AppComponent {

  selectedPage: string = 'recipe';

  onPageSelected(page: string) {
    this.selectedPage = page;
  }
}
