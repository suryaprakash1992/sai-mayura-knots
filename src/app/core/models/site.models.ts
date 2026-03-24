export interface NavigationItem {
  readonly label: string;
  readonly route: string;
}

export interface Product {
  readonly id: number;
  readonly name: string;
  readonly price: string;
  readonly image: string;
  readonly description: string;
  readonly category: string;
}

export interface Testimonial {
  readonly id: number;
  readonly name: string;
  readonly initials: string;
  readonly color: string;
  readonly text: string;
}

export interface Statistic {
  readonly value: string;
  readonly label: string;
}

export interface HeroAction {
  readonly label: string;
  readonly route: string;
  readonly variant: 'primary' | 'secondary' | 'gold';
}

export interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly icon: 'instagram' | 'facebook' | 'pinterest';
}
