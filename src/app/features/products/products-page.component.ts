import { Component } from '@angular/core';

import { PRODUCTS } from '../../core/data/site.data';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { HeaderComponent } from '../../shared/header/header.component';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { SectionContainerComponent } from '../../shared/section-container/section-container.component';

@Component({
  selector: 'app-products-page',
  imports: [
    HeaderComponent,
    ProductCardComponent,
    SectionContainerComponent,
    ScrollRevealDirective,
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss',
})
export class ProductsPageComponent {
  protected readonly products = PRODUCTS;
}
