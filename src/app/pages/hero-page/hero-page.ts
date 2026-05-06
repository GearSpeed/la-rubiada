import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-hero-page',
  imports: [],
  templateUrl: './hero-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeroPage {

  envs = environment

}
