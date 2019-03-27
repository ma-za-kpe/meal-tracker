import { Component, OnInit, Input } from "@angular/core";

import { FoodTracker } from "../food-tracker";

@Component({
  selector: "app-meal",
  templateUrl: "./meal.component.html",
  styleUrls: ["./meal.component.css"]
})
export class MealComponent implements OnInit {
  @Input() foodTracker: FoodTracker;

  name: string;
  calories: number;
  details: string;

  constructor() {
    // this.foodTracker = new FoodTracker("chipo", 500, "i only had a handful");
  }

  ngOnInit() {}
}
