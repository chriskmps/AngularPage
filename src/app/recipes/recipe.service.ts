import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Mongo', 'a Filipino Dish', 'https://www.kawalingpinoy.com/wp-content/uploads/2013/02/ginisang-munggo-at-chicharon-4a.jpg',
    [
      new Ingredient('mung beans', 1),
      new Ingredient('pork', 1),
      new Ingredient('spinach', 1),
      new Ingredient('malunggay leaves', 1),
      new Ingredient('tomato', 1),
      new Ingredient('onion', 1),
      new Ingredient('chicaron', 1),
      new Ingredient( 'garlic', 1),
      new Ingredient('black pepper', 1)
    ]),
    new Recipe('Pizza', 'an American Classic', 'https://www.davannis.com/wp-content/uploads/2015/03/pepp-slice-lifestyle.jpg',
      [
        new Ingredient('dough', 1),
        new Ingredient('tomato sauce', 1),
        new Ingredient('pepperoni', 1),
        new Ingredient('cheese', 1),
      ]),

  ];

  constructor(private ShoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();  // Returns a copy not a reference of recipe using '.slice'
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.ShoppingListService.addIngredients(ingredients);

  }
}
