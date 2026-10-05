import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-phd-awarded-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './phd-awarded-page.html',
  styleUrl: './phd-awarded-page.css'
})
export class PhdAwardedPageComponent {
  scholars = [
    { name: 'Dr. S. Karthi', supervisor: 'Dr. G. Vennila', title: 'Analysis of Groundwater Quality Parameters', year: '2024' },
    { name: 'Dr. M. Priyadarshini', supervisor: 'Dr. A. M. Kalpana', title: 'Deep Learning Algorithms for Medical Image Segmentation', year: '2023' },
    { name: 'Dr. K. Natesan', supervisor: 'Dr. R. Gopalakrishnan', title: 'Mechanical Properties of Hybrid Fiber Composites', year: '2023' }
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
