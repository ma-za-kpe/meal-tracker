export class FoodTracker {
  name: string;
  calories: number;
  details: string;
  constructor(name: string, calories: number, details: string) {
    this.name = name;
    this.calories = calories || 0;
    this.details = details;
  }
}
