import { Component } from '@angular/core';
import { environment } from '@environments/environment';
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

  envs = environment


  menuOptions: MenuOptions[] = [
    {
      label: this.envs.SIDE_MENU_CONTENT_ITINERARY,
      route:'#itinerary'
    },
    {
      label: this.envs.SIDE_MENU_CONTENT_DETAILS,
      route:'#details'
    },
    {
      label: this.envs.SIDE_MENU_CONTENT_GALLERY,
      route:'#gallery'
    },
  ]

}
