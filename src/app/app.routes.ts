import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthComponent } from './layout/auth/auth.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      },
    ],
  },
];
