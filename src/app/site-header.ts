import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
})
export class SiteHeaderComponent {
  private router = inject(Router);

  protected isGuidelinesOpen = false;
  protected isScholarsOpen = false;
  protected isNavClosed = false;
  private resetTimeout: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeDropdowns();
      });
  }

  protected closeDropdowns(): void {
    this.isNavClosed = true;
    this.isGuidelinesOpen = false;
    this.isScholarsOpen = false;

    if (typeof document !== 'undefined' && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    if (this.resetTimeout) {
      clearTimeout(this.resetTimeout);
    }
    this.resetTimeout = setTimeout(() => {
      this.isNavClosed = false;
    }, 250);
  }

  protected resetNav(): void {
    this.isNavClosed = false;
  }

  protected toggleGuidelines(state?: boolean): void {
    this.isGuidelinesOpen = state !== undefined ? state : !this.isGuidelinesOpen;
  }

  protected toggleScholars(state?: boolean): void {
    this.isScholarsOpen = state !== undefined ? state : !this.isScholarsOpen;
  }
}
