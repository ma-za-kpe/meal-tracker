import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddMealComponent } from "./add-meal/add-meal.component";
import { MealComponent } from './meal/meal.component';

@NgModule({
  declarations: [AppComponent, AddMealComponent, MealComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
