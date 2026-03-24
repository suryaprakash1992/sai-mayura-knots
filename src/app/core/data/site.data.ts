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
    name: 'Crimson Royale Heritage Hair Band ❤️',
    price: 'Rs. 399',
    image: 'assets/images/products/band.png',
    description: 'Handmade designer hair rubber band with ruby stones and antique gold finish, perfect for traditional and festive styling.',
    category: 'Accessories',
  },
  {
    id: 2,
    name: 'Royal Aurora Butterfly Brooch 🦋',
    price: 'Rs. 449',
    image: 'assets/images/products/Butterfly.png',
    description: 'Handmade luxury butterfly brooch crafted with premium stones and gold finish. A timeless statement accessory symbolizing beauty and elegance.',
    category: 'Accessories',
  },
  {
    id: 3,
    name: 'Mystic Lotus Invisible Gold Chain 🌸',
    price: 'Rs. 359',
    image: 'assets/images/products/chain.png',
    description: 'Handmade invisible chain with a traditional lotus pendant, featuring ruby and emerald stones for an elegant minimalist look.',
    category: 'Accessories',
  },
  {
    id: 4,
    name: 'Trinity Royale Designer Hair Clips Set 👑',
    price: 'Rs. 299',
    image: 'assets/images/products/clip.png',
    description: 'Handmade designer hair clips set with colorful stones and antique gold finish, perfect for festive and casual styling.',
    category: 'Accessories',
  },
  {
    id: 5,
    name: 'Pearl Prism Royal Hair Clips Collection 🤍',
    price: 'Rs. 319',
    image: 'assets/images/products/clip1.png',
    description: 'Handmade pearl and stone designer hair clips with gold finish, ideal for festive and elegant styling.',
    category: 'Accessories',
  },
  {
    id: 6,
    name: 'Divine Om Muruga Heritage Brooch 🛕',
    price: 'Rs. 499',
    image: 'assets/images/products/om_murga.png',
    description: 'Handmade Om Muruga devotional brooch with traditional stone work and antique gold finish, symbolizing divine protection and strength.',
    category: 'Accessories',
  },
  {
    id: 7,
    name: 'Mayil Vel Divine Heritage Brooch 🦚',
    price: 'Rs. 529',
    image: 'assets/images/products/peacockwitvel.png',
    description: 'Handmade peacock and Murugan Vel devotional brooch with colorful stones and antique gold finish, symbolizing divine protection and grace.',
    category: 'Accessories',
  },
  {
    id: 8,
    name: 'Saravana Mayil Vel Divine Name Brooch 🦚🛕',
    price: 'Rs. 479',
    image: 'assets/images/products/peacok.png',
    description: 'Handmade Murugan Vel and peacock devotional brooch with traditional stone work and antique gold finish, symbolizing divine blessings and strength.',
    category: 'Accessories',
  },
  {
    id: 9,
    name: 'Divine Vel of Victory Brooch 🛕',
    price: 'Rs. 389',
    image: 'assets/images/products/vel.png',
    description: 'Handmade Murugan Vel devotional brooch with colorful stones and antique gold finish, symbolizing divine protection and victory.',
    category: 'Accessories',
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
  { value: 'Infinity', label: 'Custom Orders' },
] as const;

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { label: 'Pinterest', href: 'https://pinterest.com', icon: 'pinterest' },
] as const;

export const CUSTOM_ORDER_STEPS = [
  {
    number: '01',
    icon: '*',
    title: 'Share Your Idea',
    description:
      "Tell us your vision, colors, style, occasion, or just a feeling. We'll listen with care.",
  },
  {
    number: '02',
    icon: 'o',
    title: 'We Craft It',
    description:
      'Our artisans bring your idea to life with premium materials and meticulous attention to detail.',
  },
  {
    number: '03',
    icon: '+',
    title: 'You Shine',
    description:
      'Receive your unique masterpiece, lovingly packaged and ready to be worn with pride.',
  },
] as const;
