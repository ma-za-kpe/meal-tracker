import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { FoodTracker } from "../food-tracker";

@Component({
  selector: "app-meal",
  templateUrl: "./meal.component.html",
  styleUrls: ["./meal.component.css"]
})
export class MealComponent implements OnInit {
  @Input() foodTracker: FoodTracker;
  ft: FoodTracker[];
  @Output() isComplete = new EventEmitter<boolean>();
  @Output() isedit = new EventEmitter<FoodTracker>();

  name: string;
  calories: number;
  details: string;
  arr: [];
  getMeal = new FoodTracker(this.name, this.calories, this.details);

  goalDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  edit(name: string, calories: number, details: string) {
    this.isedit.emit(this.getMeal);
  }

  // edit(name, calories, details) {
  //   // var edit = this.ft.map(meal => {
  //   //   meal.name;
  //   // });

  //   console.log(
  //     this.foodTracker.name,
  //     this.foodTracker.calories,
  //     this.foodTracker.details
  //   );
  // }
  constructor() {
    // this.foodTracker = new FoodTracker("chipo", 500, "i only had a handful");
  }

  ngOnInit() {}
}
