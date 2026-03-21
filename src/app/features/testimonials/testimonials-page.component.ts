import { Component } from '@angular/core';

import { TESTIMONIALS } from '../../core/data/site.data';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { HeaderComponent } from '../../shared/header/header.component';
import { SectionContainerComponent } from '../../shared/section-container/section-container.component';
import { TestimonialCardComponent } from '../../shared/testimonial-card/testimonial-card.component';

@Component({
  selector: 'app-testimonials-page',
  imports: [
    HeaderComponent,
    SectionContainerComponent,
    TestimonialCardComponent,
    ScrollRevealDirective,
  ],
  templateUrl: './testimonials-page.component.html',
  styleUrl: './testimonials-page.component.scss',
})
export class TestimonialsPageComponent {
  protected readonly testimonials = TESTIMONIALS;
}
