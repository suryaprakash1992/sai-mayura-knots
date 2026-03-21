import {
  HeroAction,
  NavigationItem,
  Product,
  SocialLink,
  Statistic,
  Testimonial,
} from '../models/site.models';

export const NAV_ITEMS: readonly NavigationItem[] = [
  { label: 'Home', route: '/' },
  { label: 'Products', route: '/products' },
  { label: 'Testimonials', route: '/testimonials' },
  { label: 'About', route: '/about' },
  { label: 'Contact', route: '/contact' },
] as const;

export const HOME_HERO_ACTIONS: readonly HeroAction[] = [
  { label: 'Explore Products', route: '/products', variant: 'primary' },
  { label: 'Custom Order', route: '/contact', variant: 'secondary' },
] as const;

export const PRODUCTS: readonly Product[] = [
  {
    id: 1,
    name: 'Macrame Pearl Bracelet',
    price: '₹649',
    image: 'assets/images/product-1.jpg',
    stars: 5,
    tags: ['Handmade', 'Custom Available'],
  },
  {
    id: 2,
    name: 'Silk Bead Scrunchie',
    price: '₹299',
    image: 'assets/images/product-2.jpg',
    stars: 5,
    tags: ['Handmade', 'Custom Available'],
  },
  {
    id: 3,
    name: 'Macrame Earrings',
    price: '₹549',
    image: 'assets/images/product-3.jpg',
    stars: 5,
    tags: ['Handmade', 'Custom Available'],
  },
  {
    id: 4,
    name: 'Boho Anklet',
    price: '₹449',
    image: 'assets/images/product-4.jpg',
    stars: 5,
    tags: ['Handmade', 'Custom Available'],
  },
] as const;

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: 1,
    name: 'Priya S.',
    initials: 'PS',
    color: '#f9a8d4',
    text: 'Absolutely stunning bracelet! The quality is beyond what I expected. Will definitely order again.',
  },
  {
    id: 2,
    name: 'Anjali M.',
    initials: 'AM',
    color: '#c4b5fd',
    text: 'My custom order turned out perfect. The artistry is incredible and delivery was quick!',
  },
  {
    id: 3,
    name: 'Ritu K.',
    initials: 'RK',
    color: '#fdba74',
    text: "These earrings got so many compliments at my sister's wedding. Pure art!",
  },
  {
    id: 4,
    name: 'Sneha P.',
    initials: 'SP',
    color: '#86efac',
    text: "Best handmade accessories I've ever bought. The attention to detail is amazing.",
  },
  {
    id: 5,
    name: 'Kavya R.',
    initials: 'KR',
    color: '#f9a8d4',
    text: 'I gifted the anklet set to my bestie and she was in tears of joy. Beautiful work!',
  },
  {
    id: 6,
    name: 'Meera T.',
    initials: 'MT',
    color: '#c4b5fd',
    text: "Ordered a custom bracelet for my mom's birthday. She absolutely loves it. Thank you!",
  },
] as const;

export const BRAND_STATS: readonly Statistic[] = [
  { value: '500+', label: 'Happy Customers' },
  { value: '100%', label: 'Handmade' },
  { value: '∞', label: 'Custom Orders' },
] as const;

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { label: 'Pinterest', href: 'https://pinterest.com', icon: 'pinterest' },
] as const;

export const CUSTOM_ORDER_STEPS = [
  {
    number: '01',
    icon: '✦',
    title: 'Share Your Idea',
    description:
      "Tell us your vision — colors, style, occasion, or just a feeling. We'll listen with care.",
  },
  {
    number: '02',
    icon: '◌',
    title: 'We Craft It',
    description:
      'Our artisans bring your idea to life with premium materials and meticulous attention to detail.',
  },
  {
    number: '03',
    icon: '✧',
    title: 'You Shine',
    description:
      'Receive your unique masterpiece, lovingly packaged and ready to be worn with pride.',
  },
] as const;
