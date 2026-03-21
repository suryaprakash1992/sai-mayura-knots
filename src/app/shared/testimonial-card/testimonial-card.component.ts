import { Component, input } from '@angular/core';

import { Testimonial } from '../../core/models/site.models';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@Component({
  selector: 'app-testimonial-card',
  imports: [ScrollRevealDirective],
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.scss',
})
export class TestimonialCardComponent {
  readonly testimonial = input.required<Testimonial>();
}
