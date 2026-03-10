export interface Product {
  id: number;
  name: string;
  slug: string;
  category: "hats" | "polos" | "shirts" | "accessories";
  price: number;
  description: string;
  image: string; // local path (e.g. /images/hat.jpg) — use img() helper to prefix basePath
}

export const products: Product[] = [
  // Hats
  {
    id: 1,
    name: 'The Classic Navy Rope Hat',
    slug: 'the-classic-navy-rope-hat',
    category: 'hats',
    price: 45,
    description: 'Our signature rope hat in deep navy. Structured crown with a classic rope detail across the brim. The crossed-clubs "S" emblem — built for the course and worn everywhere.',
    image: '/images/hat-classic-mockup.jpg',
  },
  {
    id: 2,
    name: 'The Range Performance Hat',
    slug: 'the-range-performance-hat',
    category: 'hats',
    price: 40,
    description: 'Lightweight, moisture-wicking performance fabric with a pre-curved brim and adjustable snapback. From the range to the clubhouse.',
    image: '/images/hat-classic-mockup.jpg',
  },
  {
    id: 3,
    name: 'The Caddie Bucket Hat',
    slug: 'the-caddie-bucket-hat',
    category: 'hats',
    price: 38,
    description: 'Full-brim sun protection with Southern style. Packable, breathable, and ready for 18 under the summer sun.',
    image: '/images/hat-classic-mockup.jpg',
  },
  // Polos
  {
    id: 4,
    name: 'The Fairway Stripe Polo',
    slug: 'the-fairway-stripe-polo',
    category: 'polos',
    price: 85,
    description: 'Classic navy and white horizontal stripes meet modern performance fabric. Four-way stretch, UPF 50+ protection, and a tailored fit that moves with your swing.',
    image: '/images/polo-navy-stripe-model.jpg',
  },
  {
    id: 5,
    name: 'The Blue Ridge Polo',
    slug: 'the-blue-ridge-polo',
    category: 'polos',
    price: 85,
    description: 'White and Carolina blue stripes that channel the clean lines of mountain-top courses. Moisture-wicking, quick-dry, and cut for movement.',
    image: '/images/polo-blue-stripe-hanger.jpg',
  },
  {
    id: 6,
    name: 'The Dot Performance Polo',
    slug: 'the-dot-performance-polo',
    category: 'polos',
    price: 95,
    description: 'Subtle navy micro-dot pattern on our premium performance fabric. The most refined polo in the lineup — office to 18th hole.',
    image: '/images/polo-dot-model.jpg',
  },
  {
    id: 7,
    name: 'The Solid Performance Polo',
    slug: 'the-solid-performance-polo',
    category: 'polos',
    price: 75,
    description: 'No fuss, all performance. Our core polo in solid deep navy. If it isn\'t broke, don\'t fix it.',
    image: '/images/polo-blue-pinstripe-model.jpg',
  },
  // Shirts
  {
    id: 8,
    name: 'The Sunday Linen Shirt',
    slug: 'the-sunday-linen-shirt',
    category: 'shirts',
    price: 95,
    description: 'For the round that bleeds into brunch. Relaxed linen weave, chest pocket, and an easy drape that\'s impossible to overdress.',
    image: '/images/polo-blue-pinstripe-model.jpg',
  },
  {
    id: 9,
    name: 'The 19th Hole Button Down',
    slug: 'the-19th-hole-button-down',
    category: 'shirts',
    price: 90,
    description: 'The shirt you\'re wearing when you\'re telling your best round story. Crisp cotton poplin, subtle stripe, clubhouse-ready.',
    image: '/images/polo-navy-stripe-model.jpg',
  },
  // Accessories
  {
    id: 10,
    name: 'Logo Headcover',
    slug: 'logo-headcover',
    category: 'accessories',
    price: 35,
    description: 'Protect your driver in style. Knit construction with the embroidered crossed-clubs "S" logo. Fits standard drivers up to 460cc.',
    image: '/images/logo-patch.jpg',
  },
  {
    id: 11,
    name: 'Ball Marker Set',
    slug: 'ball-marker-set',
    category: 'accessories',
    price: 25,
    description: 'Set of 3 enamel ball markers. The crossed-clubs logo in navy/white, forest green/gold, and all black. Mark your spot in style.',
    image: '/images/logo-embroidery.jpg',
  },
  {
    id: 12,
    name: 'The Course Belt',
    slug: 'belt',
    category: 'accessories',
    price: 55,
    description: 'Full-grain leather with a brushed brass buckle. Subtle embossed Southern Sticks logo on the tail. Fits 28"–42".',
    image: '/images/logo-patch.jpg',
  },
];
