import { Component } from '@angular/core';
import { environment } from '@environments/environment';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'side-menu-title',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './side-menu-title.html',
})
export class SideMenuTitle {

  envs = environment

}
