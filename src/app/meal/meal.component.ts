import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { FoodTracker } from "../food-tracker";

@Component({
  selector: "app-meal",
  templateUrl: "./meal.component.html",
  styleUrls: ["./meal.component.css"]
})
export class MealComponent implements OnInit {
  @Input() foodTracker: FoodTracker;
  @Output() isComplete = new EventEmitter<boolean>();

  name: string;
  calories: number;
  details: string;

  goalDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  constructor() {
    // this.foodTracker = new FoodTracker("chipo", 500, "i only had a handful");
  }

  ngOnInit() {}
}
