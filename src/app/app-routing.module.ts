import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';



const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'recipe', component: RecipesComponent},
    {path: 'shopping-list', component: ShoppingListComponent}
]