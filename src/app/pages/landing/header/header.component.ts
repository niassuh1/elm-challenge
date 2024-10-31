import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

import { heroBars3, heroChevronLeft } from '@ng-icons/heroicons/outline';
import { NgIf } from '@angular/common';

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
    NgIf,
  ],
  providers: [provideIcons({ heroBars3, heroChevronLeft })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    if (window !== undefined) {
      const hash = window.location.hash.slice(1);
      this.currentFragment = window.location.hash.slice(1) === '' ? '' : hash;
    }
  }

  scrollTo(elementId: string) {}
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

  currentFragment: string | undefined = undefined;

  toggleDrawer() {
    this.drawerVisible = !this.drawerVisible;
  }
  hideDrawer() {
    this.drawerVisible = false;
  }

  setFragmentandScrollTo(newFragment: string) {
    this.currentFragment = newFragment;
    if (newFragment === '' && window) {
      window.scrollTo({ top: 0 });
    } else {
      document.getElementById(newFragment)?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth >= 768) {
      this.hideDrawer();
    }
  }
}
