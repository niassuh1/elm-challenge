import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { definePreset } from 'primeng/themes';
import { Aura } from 'primeng/themes/aura';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './pages/landing/header/header.component';

const Noir = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
      950: '#052e16',
    },
    colorScheme: {
      light: {
        primary: {
          color: '#22c55e',
          inverseColor: '#ffffff',
          hoverColor: '#16a34a',
          activeColor: '#15803d',
        },
        highlight: {
          background: '{emerald.950}',
          focusBackground: '{emerald.700}',
          color: '#ffffff',
          focusColor: '#ffffff',
        },
      },
    },
  },
});

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'elm-challenge';
  constructor(private config: PrimeNGConfig) {
    this.config.theme.set({
      preset: Noir,
      options: {
        darkModeSelector: '.my-app-dark',
      },
    });
  }
}
