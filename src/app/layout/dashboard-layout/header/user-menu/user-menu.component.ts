import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import {
  hugeLogout05,
  hugeUserCircle02,
  hugeMessageQuestion,
  hugeCancel01,
} from '@ng-icons/huge-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [DialogModule, ButtonModule, NgIcon, RouterLink],
  providers: [
    provideIcons({
      hugeLogout05,
      hugeUserCircle02,
      hugeMessageQuestion,
      hugeCancel01,
    }),
  ],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.css',
})
export class UserMenuComponent {
  diaglogVisible = false;

  hideDialog() {
    this.diaglogVisible = false;
  }

  toggleDialog() {
    this.diaglogVisible = !this.diaglogVisible;
  }
}
