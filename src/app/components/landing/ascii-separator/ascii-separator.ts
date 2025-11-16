import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'landing-ascii-separator',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="text-center my-24 text-sm select-none" [class]="colorClass" aria-hidden="true">
      +-- -- --=[ {{ char }} ]=-- -- --+
    </div>
  `,
})
export class AsciiSeparator {
  @Input() char: string = 'O';
  @Input() color: 'teal' | 'emerald' | 'sky' = 'emerald';

  get colorClass(): string {
    switch (this.color) {
      case 'teal':
        return 'text-teal-400/50';
      case 'sky':
        return 'text-sky-400/50';
      default:
        return 'text-emerald-400/50';
    }
  }
}
