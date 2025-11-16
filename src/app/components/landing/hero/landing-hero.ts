import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'landing-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './landing-hero.html',
  styles: [
    `
      @keyframes simpleFadeIn {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .anim-fade-in {
        animation: simpleFadeIn 0.8s ease-out forwards 0.3s;
        opacity: 0; /* Inicia invisible */
      }
      .anim-fade-in-delay1 {
        animation: simpleFadeIn 0.8s ease-out forwards 0.6s;
        opacity: 0;
      }
      .anim-fade-in-delay2 {
        animation: simpleFadeIn 0.8s ease-out forwards 0.9s;
        opacity: 0;
      }
    `,
  ],
})
export class Hero {}
