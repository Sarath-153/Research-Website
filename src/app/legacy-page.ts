import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { convertedLegacyPages } from './converted-legacy-pages';

@Component({
  selector: 'app-legacy-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './legacy-page.html',
  styleUrl: './legacy-page.css',
})
export class LegacyPageComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly document = inject(DOCUMENT);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly title = inject(Title);
  private readonly platformId = inject(PLATFORM_ID);

  private styleNode?: HTMLStyleElement;
  private routeSub?: Subscription;

  protected pageHtml = '';
  protected isLoading = true;
  protected errorMessage = '';
  protected pageName = '';

  ngOnInit(): void {
    this.routeSub = this.route.data.subscribe((data) => {
      this.pageName = data['pageName'] ?? 'Page';
      const pageKey = data['pageKey'] as keyof typeof convertedLegacyPages | undefined;
      const page = pageKey ? convertedLegacyPages[pageKey] : undefined;

      if (!page) {
        this.cleanupInjectedAssets();
        this.title.setTitle(this.pageName);
        this.pageHtml = '';
        this.errorMessage = `${this.pageName} is not available in the converted Angular pages.`;
        this.isLoading = false;
        this.cdr.detectChanges();
        return;
      }

      this.loadPage(page.title || this.pageName, page.html, page.styles);
    });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
    this.cleanupInjectedAssets();
  }

  private loadPage(pageName: string, html: string, styles: string = ''): void {
    this.cleanupInjectedAssets();
    this.errorMessage = '';
    this.title.setTitle(pageName);
    this.pageName = pageName;
    this.pageHtml = html;
    if (styles) {
      this.injectStyles(styles);
    }
    this.isLoading = false;
    this.cdr.detectChanges();
  }

  private cleanupInjectedAssets(): void {
    this.styleNode?.remove();
    this.styleNode = undefined;
  }

  private injectStyles(styles: string): void {
    if (!isPlatformBrowser(this.platformId) || !styles.trim()) {
      return;
    }

    this.styleNode = this.document.createElement('style');
    this.styleNode.textContent = styles;
    this.document.head.appendChild(this.styleNode);
  }
}
