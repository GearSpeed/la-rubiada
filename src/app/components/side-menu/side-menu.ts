import { Component } from '@angular/core';
import { SideMenuTitle } from './side-menu-title/side-menu-title'
import { SideMenuContent } from './side-menu-content/side-menu-content'
import { SideMenuCollapseMenu } from './side-menu-collapse-menu/side-menu-collapse-menu'

@Component({
  selector: 'side-menu',
  imports: [
    SideMenuTitle,
    SideMenuContent,
    SideMenuCollapseMenu,
  ],
  templateUrl: './side-menu.html'
})
export class SideMenu { }
