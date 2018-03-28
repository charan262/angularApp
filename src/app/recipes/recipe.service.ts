import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
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
      setRecipe(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice())
      }
      constructor(private slService: ShoppingListService){}
      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice())
      }
      updateRecipe(index:number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice())
      }
      deleteRecipe(index: number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice())
      }
}