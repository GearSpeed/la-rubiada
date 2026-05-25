import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenu } from '../../components/side-menu/side-menu'
import { Footer } from 'src/app/components/footer/footer';

@Component({
  selector: 'dashboard-page',
  imports: [SideMenu, RouterOutlet, Footer],
  templateUrl: './dashboard-page.html',
})
export default class DashboardPage {}
