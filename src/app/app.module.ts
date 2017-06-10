import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ListComponent } from './recipes/list/list.component';
import { ItemComponent } from './recipes/list/item/item.component';
import { DetailsComponent } from './recipes/list/item/details/details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NavComponent } from './nav/nav.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    ListComponent,
    ItemComponent,
    ItemComponent,
    DetailsComponent,
    ItemComponent,
    ItemComponent,
    ItemComponent,
    DetailsComponent,
    ShoppingListComponent,
    NavComponent,
    RecipeEditComponent,
    RecipeDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
