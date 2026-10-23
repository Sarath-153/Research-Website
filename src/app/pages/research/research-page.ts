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
    { title: 'Center for Artificial Intelligence & Data Science', dept: 'Artificial Intelligence And Data Science' },
    { title: 'Center for Biotechnology', dept: 'BioTechnology' },
    { title: 'Center for Chemical Sciences', dept: 'Chemistry' },
    { title: 'Center for Civil Engineering', dept: 'Civil Engineering' },
    { title: 'Center for Computer Science & Business Systems', dept: 'Computer Science And Business System' },
    { title: 'Center for Computer Science & Engineering', dept: 'Computer Science And Engineering' },
    { title: 'Center for Artificial Intelligence & Machine Learning', dept: 'CSE (AIML)' },
    { title: 'Center for VLSI Design & Technology', dept: 'EE(VLSIDT)' },
    { title: 'Center for Electrical & Electronics Engineering', dept: 'Electrical and Electronics Engineering' },
    { title: 'Center for Electronics & Communication Engineering', dept: 'Electronics And Communication Engineering' },
    { title: 'Center for English & Language Studies', dept: 'English' },
    { title: 'Center for Food Technology', dept: 'Food Technology' },
    { title: 'Center for Information Technology', dept: 'Information Technology' },
    { title: 'Center for Computer Applications', dept: 'Master Of Computer Application (MCA)' },
    { title: 'Center for Mathematical Sciences', dept: 'Mathematics' },
    { title: 'Center for Management Studies', dept: 'MBA' },
    { title: 'Center for Mechanical Engineering', dept: 'Mechanical Engineering' },
    { title: 'Center for Mechatronics Engineering', dept: 'Mechatronics Engineering' },
    { title: 'Center for Nano Science & Technology', dept: 'Nano Science And Technology' },
    { title: 'Center for Physical Sciences', dept: 'Physics' },
    { title: 'Center for Tamil Studies', dept: 'Tamil' },
    { title: 'Center for Textile Technology', dept: 'Textile Technology' }
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
