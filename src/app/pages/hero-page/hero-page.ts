import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DICT } from '@dict';

@Component({
  selector: 'app-hero-page',
  imports: [],
  templateUrl: './hero-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeroPage {

  dict = DICT

}
