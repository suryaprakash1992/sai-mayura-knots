import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home-page.component').then(
        (m) => m.HomePageComponent,
      ),
    title: 'Sai Mayura Knots | Home',
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/products-page.component').then(
        (m) => m.ProductsPageComponent,
      ),
    title: 'Sai Mayura Knots | Products',
  },
  {
    path: 'testimonials',
    loadComponent: () =>
      import('./features/testimonials/testimonials-page.component').then(
        (m) => m.TestimonialsPageComponent,
      ),
    title: 'Sai Mayura Knots | Testimonials',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about-page.component').then(
        (m) => m.AboutPageComponent,
      ),
    title: 'Sai Mayura Knots | About',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact-page.component').then(
        (m) => m.ContactPageComponent,
      ),
    title: 'Sai Mayura Knots | Contact',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
