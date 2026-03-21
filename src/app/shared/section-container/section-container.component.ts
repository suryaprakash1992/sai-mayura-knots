import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@Component({
  selector: 'app-section-container',
  imports: [NgClass, ScrollRevealDirective],
  templateUrl: './section-container.component.html',
  styleUrl: './section-container.component.scss',
})
export class SectionContainerComponent {
  readonly overline = input<string>('');
  readonly title = input<string>('');
  readonly description = input<string>('');
  readonly centered = input<boolean>(false);
  readonly narrow = input<boolean>(false);
}
