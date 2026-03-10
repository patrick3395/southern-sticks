export interface Product {
  id: number;
  name: string;
  slug: string;
  category: "hats" | "polos" | "shirts" | "accessories";
  price: number;
  description: string;
  image: string;
}

export const products: Product[] = [
  // Hats
  {
    id: 1,
    name: 'The Classic Navy Rope Hat',
    slug: 'the-classic-navy-rope-hat',
    category: 'hats',
    price: 45,
    description: 'Our signature rope hat in deep navy. A timeless silhouette with a structured crown and classic rope detail across the brim. Built for the course and beyond.',
    image: 'https://picsum.photos/seed/hat1/800/800',
  },
  {
    id: 2,
    name: 'The Range Performance Hat',
    slug: 'the-range-performance-hat',
    category: 'hats',
    price: 40,
    description: 'Lightweight, moisture-wicking performance fabric with a pre-curved brim and adjustable snapback. From the range to the clubhouse.',
    image: 'https://picsum.photos/seed/hat2/800/800',
  },
  {
    id: 3,
    name: 'The Caddie Bucket Hat',
    slug: 'the-caddie-bucket-hat',
    category: 'hats',
    price: 38,
    description: 'Full-brim sun protection with Southern style. Packable, breathable, and ready for 18 under the summer sun.',
    image: 'https://picsum.photos/seed/hat3/800/800',
  },
  // Polos
  {
    id: 4,
    name: 'The Fairway Stripe Polo',
    slug: 'the-fairway-stripe-polo',
    category: 'polos',
    price: 85,
    description: 'Classic horizontal stripes meet modern performance fabric. Four-way stretch, UPF 50+ protection, and a tailored fit that moves with your swing.',
    image: 'https://picsum.photos/seed/polo1/800/800',
  },
  {
    id: 5,
    name: 'The Blue Ridge Polo',
    slug: 'the-blue-ridge-polo',
    category: 'polos',
    price: 85,
    description: 'Inspired by the mountain courses of the Carolinas. Soft pima cotton blend with a subtle texture and a relaxed Southern fit.',
    image: 'https://picsum.photos/seed/polo2/800/800',
  },
  {
    id: 6,
    name: 'The Dot Performance Polo',
    slug: 'the-dot-performance-polo',
    category: 'polos',
    price: 95,
    description: 'Micro-dot print on premium performance jersey. Moisture-wicking, quick-dry, and styled for the player who appreciates the details.',
    image: 'https://picsum.photos/seed/polo3/800/800',
  },
  {
    id: 7,
    name: 'The Solid Performance Polo',
    slug: 'the-solid-performance-polo',
    category: 'polos',
    price: 75,
    description: 'The foundation of every golfer\'s wardrobe. Clean, solid color in our signature performance fabric with a three-button placket.',
    image: 'https://picsum.photos/seed/polo4/800/800',
  },
  // Shirts
  {
    id: 8,
    name: 'The Sunday Linen Shirt',
    slug: 'the-sunday-linen-shirt',
    category: 'shirts',
    price: 95,
    description: 'For the round that turns into brunch. Pure linen, relaxed fit, and effortless Southern style from the first tee to the last toast.',
    image: 'https://picsum.photos/seed/shirt1/800/800',
  },
  {
    id: 9,
    name: 'The 19th Hole Button Down',
    slug: 'the-19th-hole-button-down',
    category: 'shirts',
    price: 90,
    description: 'A post-round essential. Wrinkle-resistant cotton with a button-down collar and a fit that takes you from the course to dinner.',
    image: 'https://picsum.photos/seed/shirt2/800/800',
  },
  // Accessories
  {
    id: 10,
    name: 'Logo Headcover',
    slug: 'logo-headcover',
    category: 'accessories',
    price: 35,
    description: 'Premium leather headcover embossed with the Southern Sticks crossed clubs. Fits drivers up to 460cc.',
    image: 'https://picsum.photos/seed/acc1/800/800',
  },
  {
    id: 11,
    name: 'Ball Marker Set',
    slug: 'ball-marker-set',
    category: 'accessories',
    price: 25,
    description: 'Set of three brass ball markers featuring the Southern Sticks crest. Packaged in a custom leather pouch.',
    image: 'https://picsum.photos/seed/acc2/800/800',
  },
  {
    id: 12,
    name: 'Belt',
    slug: 'belt',
    category: 'accessories',
    price: 55,
    description: 'Full-grain leather belt with a brushed nickel buckle stamped with crossed clubs. The finishing touch to any round.',
    image: 'https://picsum.photos/seed/acc3/800/800',
  },
];
