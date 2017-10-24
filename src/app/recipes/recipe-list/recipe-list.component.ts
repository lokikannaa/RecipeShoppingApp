import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Description',
    'http://del.h-cdn.co/assets/16/21/1600x800/landscape-1464124800-delish-grilled-chicken-sweet-chili.jpg'),
    new Recipe('Test Recipe', 'Test Description',
      'http://del.h-cdn.co/assets/16/21/1600x800/landscape-1464124800-delish-grilled-chicken-sweet-chili.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
