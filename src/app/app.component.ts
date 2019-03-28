import { Component, Input } from "@angular/core";

import { FoodTracker } from "./food-tracker";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public show: boolean = false;
  public show1: boolean = false;

  public buttonName: any = "Show";
  title = "meal-tracker";

  foodTracker: FoodTracker[];

  constructor() {
    this.foodTracker = [
      new FoodTracker("chipo", 500, "i only had a handful"),
      new FoodTracker("smokies", 500, "i only had 2"),
      new FoodTracker("pizza", 200, "i only had 2 slices")
    ];
  }

  addMeal(
    name: HTMLInputElement,
    calories: HTMLInputElement,
    details: HTMLInputElement
  ): boolean {
    console.log(
      `Adding food name: ${name.value}, calories: ${
        calories.value
      } and details: ${calories.value}`
    );
    this.foodTracker.push(
      new FoodTracker(name.value, parseInt(calories.value), details.value)
    );
    name.value = "";
    calories.value = "";
    details.value = "";
    return false;
  }

  filter() {
    return this.foodTracker.filter(x => x.calories > 200);
  }

  filterLess() {
    return this.foodTracker.filter(x => x.calories <= 200);
  }

  toggle() {
    this.show = !this.show;
    // CHANGE THE NAME OF THE BUTTON.
    if (this.show) this.buttonName = "Hide";
    else this.buttonName = "Show";
  }

  toggle1() {
    this.show1 = !this.show1;
    // CHANGE THE NAME OF THE BUTTON.
    if (this.show1) this.buttonName = "Hide";
    else this.buttonName = "Show";
  }
}
