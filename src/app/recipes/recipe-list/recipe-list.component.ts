import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('mongo', 'a filipino dish', 'https://www.kawalingpinoy.com/wp-content/uploads/2013/02/ginisang-munggo-at-chicharon-4a.jpg'),
    new Recipe('mongo', 'a filipino dish', 'https://www.kawalingpinoy.com/wp-content/uploads/2013/02/ginisang-munggo-at-chicharon-4a.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
