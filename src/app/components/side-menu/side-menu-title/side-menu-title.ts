import { Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'side-menu-title',
  imports: [],
  templateUrl: './side-menu-title.html',
})
export class SideMenuTitle {

  envs = environment

}
