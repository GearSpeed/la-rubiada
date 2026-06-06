import { Component } from '@angular/core';
import { DICT } from '@dict';
import { RouterLink, RouterLinkActive } from "@angular/router";

interface MenuOptions{
  label: string,
  route: string
}

@Component({
  selector: 'side-menu-content',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-content.html',
})
export class SideMenuContent {

  dict = DICT


  menuOptions: MenuOptions[] = [
    {
      label: this.dict.SIDE_MENU_CONTENT_ITINERARY,
      route:'/dashboard/itinerary'
    },
    {
      label: this.dict.SIDE_MENU_CONTENT_DETAILS,
      route:'/dashboard/details'
    },
    {
      label: this.dict.SIDE_MENU_CONTENT_GALLERY,
      route:'/dashboard/gallery'
    },
  ]

}
