import { Injectable } from '@angular/core';

interface INavItem {
  label: string;
  href?: string;
  fragment?: string;
}

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor() {}

  onInit() {
    if (window !== undefined) {
      const hash = window.location.hash.slice(1);
      this.currentFragment = window.location.hash.slice(1) === '' ? '' : hash;
    }
  }

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

  currentFragment: string | undefined = undefined;

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
}
