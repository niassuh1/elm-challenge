import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CrashIconSecondaryComponent } from '../../../icons/crash-icon-secondary/crash-icon-secondary.component';

import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-control-dashboard',
  standalone: true,
  imports: [
    ButtonModule,
    CrashIconSecondaryComponent,
    ChartModule,
    TableModule,
  ],
  templateUrl: './control-dashboard.component.html',
  styleUrl: './control-dashboard.component.css',
})
export class ControlDashboardComponent {
  private GREEN = '#09BC6B';
  private GREEN_START = '#09BC6B00';
  private GREEN_END = '#09BC6BB0';

  private BLUE = '#258AFF';
  private BLUE_START = '#258AFF00';
  private BLUE_END = '#258AFFB0';

  getGradient(ctx: any, chartArea: any, start: string, end: string) {
    let width, height, gradient;
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (!gradient || width !== chartWidth || height !== chartHeight) {
      // Create the gradient because this is either the first render
      // or the size of the chart has changed
      width = chartWidth;
      height = chartHeight;
      gradient = ctx.createLinearGradient(
        0,
        chartArea.bottom,
        0,
        chartArea.top
      );
      gradient.addColorStop(0, start);

      gradient.addColorStop(1, end);
    }

    return gradient;
  }

  chart1Data = {
    labels: ['الرياض', 'جدة', 'مكة', 'المدينة', 'الدمام'],
    datasets: [
      {
        label: 'المدن',
        data: [33, 21, 21, 21, 21],
        borderColor: this.GREEN,

        borderWidth: {
          top: 4,
          right: 0,
          bottom: 0,
          left: 0,
        },
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return;
          }
          return this.getGradient(
            ctx,
            chartArea,
            this.GREEN_START,
            this.GREEN_END
          );
        },
      },
    ],
  };
  chart2Data = {
    labels: ['لوريم', 'لوريم', 'لوريم', 'لوريم', 'لوريم'],
    datasets: [
      {
        label: 'المدن',
        data: [33, 21, 21, 21, 21],
        borderColor: this.BLUE,

        borderWidth: {
          top: 4,
          right: 0,
          bottom: 0,
          left: 0,
        },
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return;
          }
          return this.getGradient(
            ctx,
            chartArea,
            this.BLUE_START,
            this.BLUE_END
          );
        },
      },
    ],
  };
  chart3Data = {
    labels: ['لوريم', 'لوريم'],
    datasets: [
      {
        data: [33, 21],
        backgroundColor: [`${this.BLUE}5a`, `${this.BLUE}8a`],
      },
    ],
  };

  chartOptions = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 14,
            family: 'Almarai',
          },
        },
      },
    },
  };

  tableData = [
    {
      name: 'لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة',
      amount: 1,
    },
    {
      name: 'لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة',
      amount: 1,
    },
    {
      name: 'لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة',
      amount: 1,
    },
    {
      name: 'لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة',
      amount: 1,
    },
    {
      name: 'لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة',
      amount: 1,
    },
    {
      name: 'لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة',
      amount: 1,
    },
    {
      name: 'لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة',
      amount: 1,
    },
    {
      name: 'لوريم إيبسوم هو نص مؤقت يستخدم في التصميم والنشر لإظهار شكل الوثيقة',
      amount: 1,
    },
  ];
}
