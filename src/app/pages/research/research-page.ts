import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-research-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './research-page.html',
  styleUrl: './research-page.css'
})
export class ResearchPageComponent {
  centers = [
    { title: 'Center for Nano Science & Technology', dept: 'Multidisciplinary', focus: 'Advanced Materials, Nanotechnology & Biosensors' },
    { title: 'Center for Renewable Energy Systems', dept: 'Electrical & Mechanical', focus: 'Solar Energy, Bio-fuels & Smart Grid Integration' },
    { title: 'Center for Artificial Intelligence & Robotics', dept: 'CSE / AI & DS', focus: 'Deep Learning, Robotics Automation & Data Analytics' },
    { title: 'Center for Composite & Advanced Materials', dept: 'Mechanical / Civil', focus: 'Hybrid Composites, Welding & Material Testing' }
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
