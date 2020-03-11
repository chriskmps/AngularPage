import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shoppingSelected: boolean = false;
  recipesSelected: boolean = false;
  title = 'CourseProject';

  handleHeaderEvent($event) {
    const theEvent = $event;
    this.recipesSelected = theEvent.recipe;
    this.shoppingSelected = theEvent.shopping;

  }
}
