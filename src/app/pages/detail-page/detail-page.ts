import { Component, signal } from '@angular/core';
import { DICT } from '@dict';

@Component({
  selector: 'detail-page',
  imports: [],
  templateUrl: './detail-page.html',
})
export default class DetailPage {

  dict = DICT
  protected readonly clipboardCopy = signal(false);

  protected copyToClipboard(): void {
    navigator.clipboard.writeText('638180000181201078').then(() => {
      this.clipboardCopy.set(true);
      setTimeout(() => this.clipboardCopy.set(false), 3000);
    });
  }

  googleCalendarUrl(): string {
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: 'La Rubiada 2026',
      dates: '20261205T140000/20261206T000000',
      details: 'Reunion familiar de los Rubio',
      location: 'Villas Chalco, Chalco de Diaz Covarrubias',
      ctz: 'America/Mexico_City',
    });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  }

}
