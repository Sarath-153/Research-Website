import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface AwardedScholar {
  name: string;
  supervisor: string;
  title: string;
  year: string;
}

@Component({
  selector: 'app-phd-awarded-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './phd-awarded-page.html',
  styleUrl: './phd-awarded-page.css'
})
export class PhdAwardedPageComponent {
  scholars: AwardedScholar[] = [
    { name: 'Dr. S. Karthi', supervisor: 'Dr. G. Vennila', title: 'Analysis of Groundwater Quality Parameters', year: '2024' },
    { name: 'Dr. M. Priyadarshini', supervisor: 'Dr. A. M. Kalpana', title: 'Deep Learning Algorithms for Medical Image Segmentation', year: '2023' },
    { name: 'Dr. K. Natesan', supervisor: 'Dr. R. Gopalakrishnan', title: 'Mechanical Properties of Hybrid Fiber Composites', year: '2023' }
  ];

  searchTerm = '';
  filteredScholars: AwardedScholar[] = [...this.scholars];

  onSearchInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value;
    this.filterScholars();
  }

  onSearch(): void {
    this.filterScholars();
  }

  filterScholars(): void {
    const q = this.searchTerm.trim().toLowerCase();
    if (!q) {
      this.filteredScholars = [...this.scholars];
      return;
    }
    this.filteredScholars = this.scholars.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.supervisor.toLowerCase().includes(q) ||
      s.title.toLowerCase().includes(q) ||
      s.year.toLowerCase().includes(q)
    );
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.filteredScholars = [...this.scholars];
  }

  protected isGuidelinesOpen = false;
  protected isScholarsOpen = false;

  protected toggleGuidelines(state?: boolean): void {
    this.isGuidelinesOpen = state !== undefined ? state : !this.isGuidelinesOpen;
  }

  protected toggleScholars(state?: boolean): void {
    this.isScholarsOpen = state !== undefined ? state : !this.isScholarsOpen;
  }
}
