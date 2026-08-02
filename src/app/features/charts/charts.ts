import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CountService, Week } from '../../core/services/country.service';

@Component({
  selector: 'app-charts',
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './charts.html',
  styleUrl: './charts.scss',
})
export class Charts {
  // Injecting the data service using the modern inject function
  private countService = inject(CountService);

  // Chart view dimensions [width, height]
  view: [number, number] = [700, 400];

  // Chart configuration options
  gradient: boolean = true;

  // Reactive signal for holding chart data
  single = signal<Week[]>(this.countService.countData);

  /**
   * Event handler for selecting a chart item
   */
  onSelect(data: any): void {
    console.log('Item selected', JSON.parse(JSON.stringify(data)));
  }

  /**
   * Event handler for activating/hovering a chart item
   */
  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  /**
   * Event handler for deactivating/unhovering a chart item
   */
  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  /**
   * Triggers random data update via the service and updates the signal
   */
  onRandomData(): void {
    this.countService.randomData();
    this.single.set([...this.countService.countData]);
  }
}
