import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

interface TickerItem {
  text: string;
  link: string;
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePageComponent {
  protected activeDropdown: string | null = null;
  protected activeSubMenu: string | null = null;
  public isGuidelinesOpen = false;
  public isScholarsOpen = false;

  public toggleGuidelines(state?: boolean): void {
    this.isGuidelinesOpen = state !== undefined ? state : !this.isGuidelinesOpen;
  }

  public toggleScholars(state?: boolean): void {
    this.isScholarsOpen = state !== undefined ? state : !this.isScholarsOpen;
  }

  protected readonly tickerItems: TickerItem[] = [
    { text: '📄 International Conference on AI & Data Science – Jan 2026', link: '/news_events.html' },
    { text: '📄 MoU Signed with IIT Madras', link: '/news_events.html' },
    { text: '📄 South Zone Inter University Basketball (Men) Tournament – 2025', link: '/news_events.html' },
    { text: '📄 MoU Signed with IIT Madras', link: '/news_events.html' },
  ];

  protected toggleDropdown(menu: string, event: Event): void {
    event.stopPropagation();
    this.activeDropdown = this.activeDropdown === menu ? null : menu;
  }

  protected toggleSubMenu(submenu: string, event: Event): void {
    event.stopPropagation();
    this.activeSubMenu = this.activeSubMenu === submenu ? null : submenu;
  }

  @HostListener('document:click')
  protected closeMenus(): void {
    this.activeDropdown = null;
    this.activeSubMenu = null;
  }
}
