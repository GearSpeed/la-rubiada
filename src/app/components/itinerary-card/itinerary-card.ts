import { Component, input } from '@angular/core';

@Component({
  selector: 'itinerary-card',
  imports: [],
  templateUrl: './itinerary-card.html',
})
export class ItineraryCard {

  schedule = input.required<string>()
  label = input.required<string>()
  content = input.required<string>()

}
