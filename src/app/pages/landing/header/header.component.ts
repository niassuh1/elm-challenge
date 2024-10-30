import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

import { heroBars3, heroChevronLeft } from '@ng-icons/heroicons/outline';

interface INavItem {
  label: string;
  href: string;
}

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
  ],
  providers: [provideIcons({ heroBars3, heroChevronLeft })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  navItems: INavItem[] = [
    {
      label: 'الرئيسية',
      href: '/',
    },
    {
      label: 'عن المشروع',
      href: '/about',
    },
    {
      label: 'مميزات',
      href: '/features',
    },
    {
      label: 'تواصل معنا',
      href: '/contact-us',
    },
  ];

  drawerVisible = false;

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
