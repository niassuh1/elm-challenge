import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

import { heroBars3, heroChevronLeft } from '@ng-icons/heroicons/outline';
import { NgIf } from '@angular/common';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ButtonModule,
    DrawerModule,
    NgIconComponent,
    NgIf,
  ],
  providers: [provideIcons({ heroBars3, heroChevronLeft })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  navigationService: NavigationService = new NavigationService();

  ngOnInit(): void {
    this.navigationService.onInit();
  }

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
}
