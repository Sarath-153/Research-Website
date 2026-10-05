import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-imrg-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './imrg-page.html',
  styleUrl: './imrg-page.css'
})
export class ImrgPageComponent {
  isGuidelinesOpen = false;
  isScholarsOpen = false;

  toggleGuidelines(state?: boolean): void {
    this.isGuidelinesOpen = state !== undefined ? state : !this.isGuidelinesOpen;
  }

  toggleScholars(state?: boolean): void {
    this.isScholarsOpen = state !== undefined ? state : !this.isScholarsOpen;
  }
}
