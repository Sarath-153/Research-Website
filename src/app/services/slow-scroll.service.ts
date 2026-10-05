import { Injectable, Inject, OnDestroy, PLATFORM_ID, NgZone, inject } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SlowScrollService implements OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly ngZone = inject(NgZone);

  // Speed multiplier: 0.1 for significantly slower, controlled scrolling
  private speedMultiplier = 0.1;
  // Ease factor: 0.04 for extra smooth, slow interpolation over frames
  private easeFactor = 0.04;

  private targetY = 0;
  private currentY = 0;
  private isAnimating = false;
  private animFrameId: number | null = null;
  private unbindListeners: (() => void) | null = null;
  private enabled = false;

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.init();
    }
  }

  public setSpeed(multiplier: number): void {
    this.speedMultiplier = Math.max(0.05, Math.min(2.0, multiplier));
  }

  public getSpeed(): number {
    return this.speedMultiplier;
  }

  public toggleEnable(status?: boolean): boolean {
    this.enabled = status !== undefined ? status : !this.enabled;
    return this.enabled;
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  private init(): void {
    const windowObj = this.document.defaultView;
    if (!windowObj) return;

    this.currentY = windowObj.scrollY || windowObj.pageYOffset || 0;
    this.targetY = this.currentY;

    this.ngZone.runOutsideAngular(() => {
      const onWheel = (event: WheelEvent) => {
        if (!this.enabled) return;

        // Prevent default fast browser jump scroll
        event.preventDefault();

        const maxScroll = Math.max(
          this.document.body.scrollHeight,
          this.document.documentElement.scrollHeight
        ) - windowObj.innerHeight;

        if (maxScroll <= 0) return;

        // Apply slow scroll speed calculation in Angular logic
        const delta = event.deltaY;
        this.targetY = Math.min(
          Math.max(0, this.targetY + delta * this.speedMultiplier),
          maxScroll
        );

        if (!this.isAnimating) {
          this.startAnimation(windowObj);
        }
      };

      const onScroll = () => {
        if (!this.isAnimating) {
          this.currentY = windowObj.scrollY || windowObj.pageYOffset || 0;
          this.targetY = this.currentY;
        }
      };

      windowObj.addEventListener('wheel', onWheel, { passive: false });
      windowObj.addEventListener('scroll', onScroll, { passive: true });

      this.unbindListeners = () => {
        windowObj.removeEventListener('wheel', onWheel);
        windowObj.removeEventListener('scroll', onScroll);
      };
    });
  }

  private startAnimation(windowObj: Window): void {
    this.isAnimating = true;

    const animate = () => {
      const diff = this.targetY - this.currentY;

      if (Math.abs(diff) < 0.5) {
        this.currentY = this.targetY;
        windowObj.scrollTo(0, this.currentY);
        this.isAnimating = false;
        this.animFrameId = null;
        return;
      }

      this.currentY += diff * this.easeFactor;
      windowObj.scrollTo(0, this.currentY);
      this.animFrameId = requestAnimationFrame(animate);
    };

    this.animFrameId = requestAnimationFrame(animate);
  }

  /**
   * Programmatic Angular Slow Scroll to specific Y offset
   */
  public scrollToY(targetY: number): void {
    const windowObj = this.document.defaultView;
    if (!windowObj) return;

    const maxScroll = Math.max(
      this.document.body.scrollHeight,
      this.document.documentElement.scrollHeight
    ) - windowObj.innerHeight;

    this.targetY = Math.min(Math.max(0, targetY), maxScroll);
    if (!this.isAnimating) {
      this.startAnimation(windowObj);
    }
  }

  /**
   * Slow scroll to top using Angular logic
   */
  public scrollToTop(): void {
    this.scrollToY(0);
  }

  /**
   * Slow scroll down by specified pixel step
   */
  public scrollDown(px: number = 400): void {
    const windowObj = this.document.defaultView;
    const current = windowObj ? windowObj.scrollY || 0 : 0;
    this.scrollToY(current + px);
  }

  /**
   * Slow scroll up by specified pixel step
   */
  public scrollUp(px: number = 400): void {
    const windowObj = this.document.defaultView;
    const current = windowObj ? windowObj.scrollY || 0 : 0;
    this.scrollToY(current - px);
  }

  ngOnDestroy(): void {
    if (this.unbindListeners) {
      this.unbindListeners();
    }
    if (this.animFrameId !== null && isPlatformBrowser(this.platformId)) {
      cancelAnimationFrame(this.animFrameId);
    }
  }
}
