import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DICT } from '@dict';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuOptions {
  label: string;
  route: string;
}

@Component({
  selector: 'side-menu-collapse-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-collapse-menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuCollapseMenu {

  protected readonly menuOpen = signal(false);
  protected readonly dict = DICT;

  protected readonly menuOptions: MenuOptions[] = [
    { label: this.dict.SIDE_MENU_CONTENT_ITINERARY, route: '/dashboard/itinerary' },
    { label: this.dict.SIDE_MENU_CONTENT_DETAILS, route: '/dashboard/details' },
    { label: this.dict.SIDE_MENU_CONTENT_GALLERY, route: '/dashboard/gallery' },
  ];

  protected toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

}
