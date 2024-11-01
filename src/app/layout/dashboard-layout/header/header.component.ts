import { Component, HostListener } from '@angular/core';
import { DashboardNavigationService } from '../dashboard-navigation.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  hugeDashboardSpeed02,
  hugeHome02,
  hugeFile01,
  hugeUserCircle02,
  hugeMenu01,
} from '@ng-icons/huge-icons';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { UserMenuComponent } from './user-menu/user-menu.component';

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgIconComponent,
    DrawerModule,
    ButtonModule,
    UserMenuComponent,
  ],
  providers: [
    provideIcons({
      hugeHome02,
      hugeFile01,
      hugeDashboardSpeed02,
      hugeUserCircle02,
      hugeMenu01,
    }),
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  dashboardNavigationService: DashboardNavigationService =
    new DashboardNavigationService();

  drawerVisible = false;
  currentFragment: string | undefined = undefined;

  toggleDrawer() {
    this.drawerVisible = !this.drawerVisible;
  }
  hideDrawer() {
    this.drawerVisible = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth >= 768) {
      this.hideDrawer();
    }
  }
  constructor() {}
}
