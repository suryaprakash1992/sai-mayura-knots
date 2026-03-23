import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[scrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  @HostBinding('class.scroll-reveal')
  protected readonly scrollRevealClass = true;

  @HostBinding('class.is-visible')
  protected isVisible = false;

  @HostBinding('style.--reveal-delay')
  protected revealDelay = '0ms';

  @HostBinding('style.--reveal-duration')
  protected revealDuration = '780ms';

  @Input({ alias: 'scrollReveal' })
  set delay(value: number | string | null | undefined) {
    if (typeof value === 'number') {
      this.revealDelay = `${value}ms`;
      return;
    }

    if (typeof value === 'string' && value.trim()) {
      this.revealDelay = value;
      return;
    }

    this.revealDelay = '0ms';
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.isVisible = true;
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.isVisible = true;
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        this.isVisible = true;
        this.observer?.disconnect();
        this.observer = undefined;
      },
      {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.12,
      },
    );

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
