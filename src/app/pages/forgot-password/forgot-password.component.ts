import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {
  heroArrowRight,
  heroChevronLeft,
  heroEye,
  heroEyeSlash,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    ButtonModule,
    NgIconComponent,
    RouterLink,
    InputTextModule,
    NgIf,
    ReactiveFormsModule,
  ],
  providers: [provideIcons({ heroChevronLeft, heroArrowRight })],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  forgotPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
}
