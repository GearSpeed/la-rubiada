import { Component } from '@angular/core';
import { SideMenuTitle } from './side-menu-title/side-menu-title'
import { SideMenuContent } from './side-menu-content/side-menu-content'
import { SideMenuCalendar } from './side-menu-calendar/side-menu-calendar'

@Component({
  selector: 'side-menu',
  imports: [
    SideMenuTitle,
    SideMenuContent,
    SideMenuCalendar,
  ],
  templateUrl: './side-menu.html'
})
export class SideMenu { }
