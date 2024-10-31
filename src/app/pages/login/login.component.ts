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
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule,
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
  loginForm = new FormGroup({
    id: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    password: new FormControl('', [Validators.required]),
  });
}
