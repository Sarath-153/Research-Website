import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-phd-pursuing-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './phd-pursuing-page.html',
  styleUrl: './phd-pursuing-page.css'
})
export class PhdPursuingPageComponent {
  pursuingScholars = [
    { name: 'K. Ramesh', supervisor: 'Dr. G. Vennila', regNo: '2119045', mode: 'Full Time', area: 'Hydrology' },
    { name: 'M. Sangeetha', supervisor: 'Dr. A. M. Kalpana', regNo: '2219082', mode: 'Part Time', area: 'Machine Learning' },
    { name: 'P. Vignesh', supervisor: 'Dr. R. Gopalakrishnan', regNo: '2319014', mode: 'Full Time', area: 'Additive Manufacturing' }
  ];

  protected isGuidelinesOpen = false;
  protected isScholarsOpen = false;

  protected toggleGuidelines(state?: boolean): void {
    this.isGuidelinesOpen = state !== undefined ? state : !this.isGuidelinesOpen;
  }

  protected toggleScholars(state?: boolean): void {
    this.isScholarsOpen = state !== undefined ? state : !this.isScholarsOpen;
  }
}
