import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutSectionComponent } from './about-section/about-section.component';

import { FeaturesSectionComponent } from './features-section/features-section.component';
import { ContactUsSectionComponent } from './contact-us-section/contact-us-section.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutSectionComponent,
    FeaturesSectionComponent,
    ContactUsSectionComponent,
    FooterComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {}
