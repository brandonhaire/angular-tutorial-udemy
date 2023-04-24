import { RecipeService } from './recipes/recipe.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth.interceptor.service';
import { AlertComponent } from './shared/alert/alert.component';
import { PlaceholderDirective } from './shared/placeholder.directive';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    DropdownDirective,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipesModule,
    ShoppingListModule
  ],
  providers: [
    ShoppingListService, 
    RecipeService, 
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AlertComponent      // not needed for Angular 9 or higher
  ]
})
export class AppModule { }
