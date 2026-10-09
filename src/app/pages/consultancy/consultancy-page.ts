import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-consultancy-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './consultancy-page.html',
  styleUrl: './consultancy-page.css'
})
export class ConsultancyPageComponent {
  isGuidelinesOpen = false;
  isScholarsOpen = false;

  toggleGuidelines(state?: boolean): void {
    this.isGuidelinesOpen = state !== undefined ? state : !this.isGuidelinesOpen;
  }

  toggleScholars(state?: boolean): void {
    this.isScholarsOpen = state !== undefined ? state : !this.isScholarsOpen;
  }

  services = [
    { title: 'Material Characterization & Testing', dept: 'Mechanical & Civil', desc: 'UTM, Tensile, Micro-hardness and Non-Destructive Testing facilities.' },
    { title: 'Water & Soil Quality Analysis', dept: 'Civil Engineering', desc: 'Comprehensive chemical and biological testing for environmental projects.' },
    { title: 'Software & AI Solutions', dept: 'CSE / IT / AI', desc: 'Custom enterprise web application development and AI model optimization.' }
  ];
}
