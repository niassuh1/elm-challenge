import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password';
import {
  heroArrowRight,
  heroChevronLeft,
  heroEye,
  heroEyeSlash,
} from '@ng-icons/heroicons/outline';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonModule,
    NgIconComponent,
    RouterLink,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    PasswordModule,
    NgIf,
  ],
  providers: [
    provideIcons({ heroArrowRight, heroChevronLeft, heroEye, heroEyeSlash }),
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  passwordVisible = false;
  togglePasswordVisible() {
    this.passwordVisible = !this.passwordVisible;
  }
}
