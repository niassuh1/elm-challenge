import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  hugeInstagram,
  hugeLinkedin01,
  hugeNewTwitterRectangle,
} from '@ng-icons/huge-icons';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIconComponent, RouterLink, RouterLinkActive, RouterOutlet],
  providers: [
    provideIcons({ hugeInstagram, hugeLinkedin01, hugeNewTwitterRectangle }),
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  navigationService: NavigationService = new NavigationService();

  ngOnInit(): void {
    this.navigationService.onInit();
  }
}
