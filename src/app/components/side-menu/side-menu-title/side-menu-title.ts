import { Component } from '@angular/core';
import { DICT } from '@dict';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'side-menu-title',
  imports: [
    RouterLink,
  ],
  templateUrl: './side-menu-title.html',
})
export class SideMenuTitle {

  dict = DICT

}
