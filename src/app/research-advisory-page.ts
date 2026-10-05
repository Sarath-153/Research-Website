import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-research-advisory-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './research-advisory-page.html',
  styleUrl: './research-advisory-page.css'
})
export class ResearchAdvisoryPageComponent {
  members = [
    { name: 'Dr. R. Malathy', designation: 'Dean - R&D', institution: 'K.S. Rangasamy College of Technology' },
    { name: 'Dr. S. Gopalakrishnan', designation: 'External Expert Member', institution: 'IIT Madras' },
    { name: 'Dr. K. Chandrasekaran', designation: 'External Expert Member', institution: 'NIT Trichy' }
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
