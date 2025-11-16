import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  About,
  AsciiSeparator,
  Contact,
  Hero,
  Projects,
  TechStack,
} from '../../components/landing';

@Component({
  selector: 'landing-page',
  standalone: true,
  imports: [Hero, About, TechStack, Projects, Contact, AsciiSeparator],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="font-mono">
      <landing-hero />

      <landing-about />
      <landing-ascii-separator char="*" color="teal" />
      <landing-tech-stack />
      <landing-ascii-separator char="O" color="emerald" />
      <landing-projects />
      <landing-ascii-separator char="*" color="sky" />
      <landing-contact />
    </div>
  `,
})
export class LandingPage {}
