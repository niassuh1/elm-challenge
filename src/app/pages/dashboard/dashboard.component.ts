import { Component } from '@angular/core';
import { ZapIconComponent } from '../../icons/zap-icon/zap-icon.component';
import { CardModule } from 'primeng/card';
import { CrashIconComponent } from '../../icons/crash-icon/crash-icon.component';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroChevronLeft, heroPlusCircle } from '@ng-icons/heroicons/outline';
import { TicketIconComponent } from '../../icons/ticket-icon/ticket-icon.component';
import { ReportIconComponent } from '../../icons/report-icon/report-icon.component';
import { ButtonModule } from 'primeng/button';
import { ReportSecondaryIconComponent } from '../../icons/report-secondary-icon/report-secondary-icon.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ZapIconComponent,
    CardModule,
    CrashIconComponent,
    NgIcon,
    TicketIconComponent,
    ReportIconComponent,
    ButtonModule,
    ReportSecondaryIconComponent,
  ],
  providers: [provideIcons({ heroChevronLeft, heroPlusCircle })],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  reports = Array.from(Array(4).keys());
}
