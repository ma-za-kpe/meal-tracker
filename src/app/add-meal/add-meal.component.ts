import { Component, OnInit } from "@angular/core";
import { FoodTracker } from "../food-tracker";

@Component({
  selector: "app-add-meal",
  templateUrl: "./add-meal.component.html",
  styleUrls: ["./add-meal.component.css"]
})
export class AddMealComponent implements OnInit {
  foodTracker: FoodTracker[];
  constructor() {}

  ngOnInit() {}

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
    // this.foodTracker.push(new FoodTracker(name.value, 0, details.value));
    name.value = "";
    calories.value = "";
    details.value = "";
    return false;
  }
}
