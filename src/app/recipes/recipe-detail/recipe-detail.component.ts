import { RecipeService } from './../recipe.service';
import { Component, OnInit, DefaultIterableDiffer, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
    @Input() recipe: Recipe;
    constructor(private RecipeService: RecipeService) {}

    ngOnInit() {}

    onAddToShoppingList() {
      this.RecipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }
}
