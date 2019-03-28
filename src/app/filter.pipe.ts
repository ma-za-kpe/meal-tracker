import { Pipe, PipeTransform } from "@angular/core";

import { FoodTracker } from "./food-tracker";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(foodTracker: FoodTracker[], value: number) {
    if (!foodTracker) {
      return foodTracker;
    }
    return foodTracker.filter(ft => ft.calories > 200);
  }
}
