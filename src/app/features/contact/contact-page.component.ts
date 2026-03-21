import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { SOCIAL_LINKS } from '../../core/data/site.data';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-contact-page',
  imports: [ReactiveFormsModule, HeaderComponent, ScrollRevealDirective],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
})
export class ContactPageComponent {
  protected readonly socialLinks = SOCIAL_LINKS;
  protected submitted = false;
  protected readonly contactForm;

  constructor(private readonly formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.nonNullable.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  protected submitForm(): void {
    this.submitted = true;

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.contactForm.reset({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  }
}
