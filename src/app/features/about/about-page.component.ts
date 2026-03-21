import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BRAND_STATS } from '../../core/data/site.data';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-about-page',
  imports: [RouterLink, HeaderComponent, ScrollRevealDirective],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
})
export class AboutPageComponent {
  protected readonly stats = BRAND_STATS;
}
