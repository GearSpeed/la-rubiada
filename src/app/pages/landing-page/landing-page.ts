import { Component } from '@angular/core';
import { SideMenu } from '../../components/side-menu/side-menu'

@Component({
  selector: 'app-landing-page',
  imports: [SideMenu],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {}
