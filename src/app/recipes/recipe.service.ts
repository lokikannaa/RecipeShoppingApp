import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Test Description',
      'http://del.h-cdn.co/assets/16/21/1600x800/landscape-1464124800-delish-grilled-chicken-sweet-chili.jpg',
      [
        new Ingredient('Meat Balls', 12),
        new Ingredient('Onions', 2),
      ]
    ),
    new Recipe(
      'Another Recipe',
      'Test Description',
      'http://del.h-cdn.co/assets/16/21/1600x800/landscape-1464124800-delish-grilled-chicken-sweet-chili.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 10),
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipies() {
    return this.recipes.slice();
  }
  getRecipie(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
