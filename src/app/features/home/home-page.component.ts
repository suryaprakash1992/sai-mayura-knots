import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  BRAND_STATS,
  CUSTOM_ORDER_STEPS,
  HOME_HERO_ACTIONS,
  PRODUCTS,
  TESTIMONIALS,
} from '../../core/data/site.data';
import { HeaderComponent } from '../../shared/header/header.component';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { SectionContainerComponent } from '../../shared/section-container/section-container.component';
import { TestimonialCardComponent } from '../../shared/testimonial-card/testimonial-card.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home-page',
  imports: [
    RouterLink,
    HeaderComponent,
    ProductCardComponent,
    SectionContainerComponent,
    TestimonialCardComponent,
    ScrollRevealDirective,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  protected readonly heroActions = HOME_HERO_ACTIONS;
  protected readonly featuredProducts = PRODUCTS;
  protected readonly testimonials = TESTIMONIALS.slice(0, 3);
  protected readonly stats = BRAND_STATS;
  protected readonly steps = CUSTOM_ORDER_STEPS;
}
