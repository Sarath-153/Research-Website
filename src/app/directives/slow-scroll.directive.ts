import { Directive, ElementRef, Input, OnInit, OnDestroy, NgZone, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appSlowScroll]',
  standalone: true,
})
export class SlowScrollDirective implements OnInit, OnDestroy {
  /** Speed multiplier for slow scroll (0.1 for slow, controlled movement) */
  @Input() speed: number = 0.1;
  /** Smoothness easing factor (0.04 for slow interpolation) */
  @Input() ease: number = 0.04;

  private readonly el = inject(ElementRef);
  private readonly ngZone = inject(NgZone);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);

  private targetScroll = 0;
  private currentScroll = 0;
  private isAnimating = false;
  private animFrameId: number | null = null;
  private unlistener: (() => void) | null = null;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const targetElement: HTMLElement | Window =
      this.el.nativeElement === this.document.body ||
      this.el.nativeElement === this.document.documentElement
        ? this.document.defaultView || window
        : this.el.nativeElement;

    this.ngZone.runOutsideAngular(() => {
      const isWin = targetElement === window;

      const getScrollTop = (): number => {
        if (isWin) {
          return window.scrollY || window.pageYOffset || 0;
        }
        return (targetElement as HTMLElement).scrollTop;
      };

      const setScrollTop = (val: number): void => {
        if (isWin) {
          window.scrollTo(0, val);
        } else {
          (targetElement as HTMLElement).scrollTop = val;
        }
      };

      const getMaxScroll = (): number => {
        if (isWin) {
          return (
            Math.max(
              this.document.body.scrollHeight,
              this.document.documentElement.scrollHeight
            ) - window.innerHeight
          );
        }
        const elem = targetElement as HTMLElement;
        return elem.scrollHeight - elem.clientHeight;
      };

      this.currentScroll = getScrollTop();
      this.targetScroll = this.currentScroll;

      const onWheel = (e: WheelEvent) => {
        const max = getMaxScroll();
        if (max <= 0) return;

        // Prevent default fast scroll jump
        e.preventDefault();

        // Slow down scrolling in Angular logic
        const delta = e.deltaY;
        this.targetScroll = Math.min(
          Math.max(0, this.targetScroll + delta * this.speed),
          max
        );

        if (!this.isAnimating) {
          this.startAnimation(getScrollTop, setScrollTop);
        }
      };

      const scrollTarget = isWin ? window : (targetElement as HTMLElement);
      scrollTarget.addEventListener('wheel', onWheel as EventListener, {
        passive: false,
      });

      this.unlistener = () => {
        scrollTarget.removeEventListener('wheel', onWheel as EventListener);
      };
    });
  }

  private startAnimation(
    getScrollTop: () => number,
    setScrollTop: (val: number) => void
  ): void {
    this.isAnimating = true;

    const animate = () => {
      const diff = this.targetScroll - this.currentScroll;

      if (Math.abs(diff) < 0.5) {
        this.currentScroll = this.targetScroll;
        setScrollTop(this.currentScroll);
        this.isAnimating = false;
        this.animFrameId = null;
        return;
      }

      this.currentScroll += diff * this.ease;
      setScrollTop(this.currentScroll);
      this.animFrameId = requestAnimationFrame(animate);
    };

    this.animFrameId = requestAnimationFrame(animate);
  }

  ngOnDestroy(): void {
    if (this.unlistener) {
      this.unlistener();
    }
    if (this.animFrameId !== null && isPlatformBrowser(this.platformId)) {
      cancelAnimationFrame(this.animFrameId);
    }
  }
}
