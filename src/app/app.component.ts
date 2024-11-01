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
      50: '#BAFFCC',
      100: '#6BC190',
      200: '#43A272',
      300: '#2F9363',
      400: '#1B8354',
      500: '#166D45',
      600: '#115736',
      700: '#0C4127',
      800: '#09361F',
      900: '#062A17',
      950: '#021209',
    },
    colorScheme: {
      light: {
        primary: {
          color: '#1B8354',
          inverseColor: '#ffffff',
          hoverColor: '#166D45',
          activeColor: '#115736',
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
        cssLayer: {
          name: 'primeng',
          order: 'tailwind-base, primeng, tailwind-utilities',
        },
      },
    });
  }
}
