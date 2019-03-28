import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MealComponent } from "./meal/meal.component";
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [AppComponent, MealComponent, FilterPipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
