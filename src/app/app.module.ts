import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ListComponent } from './recipes/list/list.component';
import { ItemComponent } from './recipes/list/item/item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NavComponent } from './nav/nav.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './recipes/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    ListComponent,
    ItemComponent,
    ItemComponent,
    ItemComponent,
    ItemComponent,
    ItemComponent,
    ShoppingListComponent,
    NavComponent,
    RecipeEditComponent,
    RecipeDetailsComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
