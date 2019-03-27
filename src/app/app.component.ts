import { Component, Input } from "@angular/core";

import { FoodTracker } from "./food-tracker";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "meal-tracker";

  foodTracker: FoodTracker[];

  constructor() {
    this.foodTracker = [
      new FoodTracker("chipo", 500, "i only had a handful"),
      new FoodTracker("smokies", 50, "i only had 2"),
      new FoodTracker("pizza", 200, "i only had 2 slices")
    ];
  }
}
