import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HeroAction } from '../../core/models/site.models';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgClass, ScrollRevealDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly subtitle = input.required<string>();
  readonly size = input<'home' | 'inner'>('inner');
  readonly theme = input<'hero' | 'about'>('hero');
  readonly actions = input<readonly HeroAction[]>([]);
}
