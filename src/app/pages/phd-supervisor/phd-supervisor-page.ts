import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-phd-supervisor-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './phd-supervisor-page.html',
  styleUrl: './phd-supervisor-page.css'
})
export class PhdSupervisorPageComponent {
  supervisors = [
    {
      name: 'Dr. G. Vennila',
      dept: 'Civil Engineering',
      domain: 'Civil & Environmental Engineering',
      code: '2110034',
      area: 'Environmental & Water Resources',
      photo: '/legacy/Faculty/vennila.jpg',
    },
    {
      name: 'Dr. R. Gopalakrishnan',
      dept: 'Mechanical Engineering',
      domain: 'Mechanical & Materials Engineering',
      code: '2320018',
      area: 'Composite Materials & Tribology',
      photo: '/legacy/Faculty/gopalakrishnan.jpg',
    },
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
