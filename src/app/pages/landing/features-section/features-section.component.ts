import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [CardModule],
  templateUrl: './features-section.component.html',
  styleUrl: './features-section.component.css',
})
export class FeaturesSectionComponent {}
