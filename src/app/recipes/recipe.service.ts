import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Burger', 'Awesome', 'Hello', [new Ingredient('meat',1)]),
        new Recipe('Pizza', 'Nice', 'Hello', [new Ingredient('fries',2)])
      ]
      getRecipe() {
          return this.recipes.slice();
      }
      getRecipes (index: number) {
        return this.recipes.slice()[index]
      }
      constructor(private slService: ShoppingListService){}
      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}