import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe';
  recipies :Recipe []=[
    new Recipe('Spicy Grilled Shrimp',['1 large clove garlic','1 tablespoon coarse salt','1/2 teaspoon cayenne pepper', '1 teaspoon paprika'],'Cook that '),
    new Recipe('Grilled Chicken',['chicken', 'salt', 'pepper'],'Grill that '),
    new Recipe('Salt Onions',['onions', 'salt'],'Salt that '),
  ]
  // showIngredient() {
  //  let flag=true;
  // }
 
    show: boolean = true;
  
}

