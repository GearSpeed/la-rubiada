import { Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'detail-page',
  imports: [],
  templateUrl: './detail-page.html',
})
export default class DetailPage {

  envs = environment

}
