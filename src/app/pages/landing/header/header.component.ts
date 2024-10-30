import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

import { heroBars3, heroChevronLeft } from '@ng-icons/heroicons/outline';

interface INavItem {
  label: string;
  href?: string;
  fragment?: string;
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
      fragment: '',
    },
    {
      label: 'عن المشروع',
      href: '/',
      fragment: 'about',
    },
    {
      label: 'مميزات',
      href: '/',
      fragment: 'features',
    },
    {
      label: 'تواصل معنا',
      href: '/',
      fragment: 'contact-us',
    },
  ];

  drawerVisible = false;

  currentFragment = '';

  toggleDrawer() {
    this.drawerVisible = !this.drawerVisible;
  }
  hideDrawer() {
    this.drawerVisible = false;
  }

  setFragment(newFragment: string) {
    this.currentFragment = newFragment;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth >= 768) {
      this.hideDrawer();
    }
  }
}
