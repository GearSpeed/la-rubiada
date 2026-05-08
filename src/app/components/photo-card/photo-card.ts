import { Component, input } from '@angular/core';

@Component({
  selector: 'photo-card',
  imports: [],
  templateUrl: './photo-card.html',
})
export class PhotoCard {

  urlPhoto = input.required<string>()
  demo = input.required<boolean>()

}
