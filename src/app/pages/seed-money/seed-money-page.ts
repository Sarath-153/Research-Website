import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-seed-money-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './seed-money-page.html',
  styleUrl: './seed-money-page.css'
})
export class SeedMoneyPageComponent {
  isGuidelinesOpen = false;
  isScholarsOpen = false;

  toggleGuidelines(state?: boolean): void {
    this.isGuidelinesOpen = state !== undefined ? state : !this.isGuidelinesOpen;
  }

  toggleScholars(state?: boolean): void {
    this.isScholarsOpen = state !== undefined ? state : !this.isScholarsOpen;
  }
}
