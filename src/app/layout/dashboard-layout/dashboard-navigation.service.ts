import { Injectable } from '@angular/core';

interface IDashboardNavItem {
  label: string;
  href?: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root',
})
export class DashboardNavigationService {
  dashboardNavItems: IDashboardNavItem[] = [
    {
      label: 'الرئيسية',
      href: '/dashboard/home',
      icon: 'hugeHome02',
    },
    {
      label: 'التقارير',
      href: '/dashboard/reports',
      icon: 'hugeFile01',
    },
    {
      label: 'لوحة التحكم',
      href: '/dashboard/control-dashboard',
      icon: 'hugeDashboardSpeed02',
    },
  ];
  constructor() {}
}
