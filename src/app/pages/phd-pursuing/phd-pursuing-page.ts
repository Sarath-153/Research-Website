import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface PursuingScholar {
  name: string;
  supervisor: string;
  regNo: string;
  mode: string;
  area: string;
}

@Component({
  selector: 'app-phd-pursuing-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './phd-pursuing-page.html',
  styleUrl: './phd-pursuing-page.css'
})
export class PhdPursuingPageComponent {
  pursuingScholars: PursuingScholar[] = [
    { name: 'K. Ramesh', supervisor: 'Dr. G. Vennila', regNo: '2119045', mode: 'Full Time', area: 'Hydrology' },
    { name: 'M. Sangeetha', supervisor: 'Dr. A. M. Kalpana', regNo: '2219082', mode: 'Part Time', area: 'Machine Learning' },
    { name: 'P. Vignesh', supervisor: 'Dr. R. Gopalakrishnan', regNo: '2319014', mode: 'Full Time', area: 'Additive Manufacturing' }
  ];

  searchTerm = '';
  filteredScholars: PursuingScholar[] = [...this.pursuingScholars];

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
      this.filteredScholars = [...this.pursuingScholars];
      return;
    }
    this.filteredScholars = this.pursuingScholars.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.supervisor.toLowerCase().includes(q) ||
      p.regNo.toLowerCase().includes(q) ||
      p.mode.toLowerCase().includes(q) ||
      p.area.toLowerCase().includes(q)
    );
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.filteredScholars = [...this.pursuingScholars];
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
