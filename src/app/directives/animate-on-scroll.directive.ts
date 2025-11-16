import { Directive, ElementRef, Input, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[animateOnScroll]',
  standalone: true,
})
export class AnimateOnScrollDirective implements AfterViewInit {
  @Input('animateOnScroll') animationType: string = 'fade-up';
  private element = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.element.nativeElement.classList.add(`animate-${this.animationType}`);
              this.element.nativeElement.classList.remove('invisible-start');
              observer.unobserve(this.element.nativeElement);
            }
          });
        },
        { threshold: 0.15 },
      );

      this.element.nativeElement.classList.add('invisible-start');
      observer.observe(this.element.nativeElement);
    }
  }
}
