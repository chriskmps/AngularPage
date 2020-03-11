import { Recipe } from './../recipes/recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  recipeChosen: boolean = false;
  shoppingChosen: boolean = false;
  @Output() emitChosen = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  featureSelected(str: string) {
    if(str === 'recipe') {
    this.recipeChosen = true;
    this.shoppingChosen = false;
    }
    if(str === 'shopping') {
    this.shoppingChosen = true;
    this.recipeChosen = false;
    }
    this.headerOptionChosen();
  }


  headerOptionChosen() {
    const thepackage = { recipe: this.recipeChosen, shopping: this.shoppingChosen };
    this.emitChosen.emit(thepackage);
  }

}
