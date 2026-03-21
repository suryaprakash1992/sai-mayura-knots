import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NAV_ITEMS, SOCIAL_LINKS } from '../../core/data/site.data';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected readonly year = new Date().getFullYear();
  protected readonly navItems = NAV_ITEMS.filter((item) => item.route !== '/');
  protected readonly socialLinks = SOCIAL_LINKS;
}
