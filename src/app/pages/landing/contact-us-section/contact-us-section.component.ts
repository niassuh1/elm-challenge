import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroEnvelope,
  heroChatBubbleBottomCenter,
  heroPhone,
} from '@ng-icons/heroicons/outline';
import {
  hugeInstagram,
  hugeLinkedin01,
  hugeNewTwitterRectangle,
} from '@ng-icons/huge-icons';

interface ContactUsItem {
  icon: string;
  label: string;
  value: string;
}

@Component({
  selector: 'app-contact-us-section',
  standalone: true,
  imports: [NgIconComponent],
  providers: [
    provideIcons({
      heroEnvelope,
      heroChatBubbleBottomCenter,
      heroPhone,
      hugeInstagram,

      hugeLinkedin01,
      hugeNewTwitterRectangle,
    }),
  ],
  templateUrl: './contact-us-section.component.html',
  styleUrl: './contact-us-section.component.css',
})
export class ContactUsSectionComponent {
  contactUsItems: ContactUsItem[] = [
    {
      icon: 'heroEnvelope',
      label: 'البريد الالكتروني',
      value: 'help@company.sa',
    },
    {
      icon: 'heroChatBubbleBottomCenter',
      label: 'رسالة قصيرة',
      value: '00000000',
    },
    {
      icon: 'heroPhone',
      label: 'رقم الجوال',
      value: '900000000',
    },
  ];
}
