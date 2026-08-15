export interface Product {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'iPhone' | 'MacBook' | 'iPad' | 'AirPods' | 'Watch' | 'Accessories';
  price: number;
  originalPrice: number;
  discountBadge: string;
  rating: number;
  reviewsCount: number;
  image: string;
  cardImage: string;
  galleryImages: string[];
  colors: { name: string; hex: string; inStock: boolean }[];
  storageOptions?: string[];
  description: string;
  features: string[];
  specs: { [key: string]: string };
  inStock: boolean;
  featured?: boolean;
  accentColor: string;
  badgeBg: string;
  badgeTextColor: string;
}

export interface CategoryItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  accentBg: string;
  textColor: string;
  image: string;
  cardImage: string;
  itemCount: number;
  description: string;
}

export interface DealItem {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  discountBadge: string;
  badgeBg: string;
  badgeTextColor: string;
  image: string;
  cardImage: string;
  featured?: boolean;
  accentColor: string;
  category: string;
  slug: string;
}

export interface BenefitItem {
  id: string;
  metric: string;
  title: string;
  accentBg: string;
  textColor: string;
  icon: string;
}

export interface TrustItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  rating: number;
  verified: boolean;
  productBought: string;
}

export const SITE_BRAND = {
  name: "THE GADGET CARDINALS",
  shortName: "GADGET CARDINALS",
  eyebrow: "FIRST COPY. NOT SECOND BEST.",
  heroHeading: {
    line1: "APPLE",
    line2: "EXPERIENCE.",
    line3: "CRAZY",
    line4: "DIFFERENT.",
  },
  heroDescription: "Premium First Copy Apple products that look crazy. Feel original. Perform insanely.",
  heroSatisfaction: {
    stat: "100%",
    title: "SATISFACTION",
    subtitle: "(OR WE'LL MAKE IT)",
  },
  dealsHeading: {
    line1: "CRAZY",
    line2: "DEALS.",
    highlight: "FOR CRAZY PEOPLE.",
    description: "Grab the best First Copy Apple products at prices that will blow your mind.",
  },
  benefitsHeading: {
    line1: "WHY CHOOSE",
    line2: "THE GADGET",
    line3: "CARDINALS?",
    subtitle: "Because normal is boring.",
  },
  newsletter: {
    title1: "BE A",
    title2: "CARDINAL.",
    description: "Get exclusive deals, early access & crazy offers straight to your inbox.",
  },
  footer: {
    description: "First Copy Apple Products. Crazy Quality. Insane Prices. Built for the Crazy Ones.",
    copyright: "© 2024 The Gadget Cardinals. All rights reserved.",
  }
};

export const NAV_LINKS = [
  { name: "HOME", href: "/" },
  { name: "SHOP", href: "/shop" },
  { name: "COLLECTIONS", href: "/collections" },
  { name: "ABOUT US", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

export const CATEGORIES: CategoryItem[] = [
  {
    id: "iphone",
    slug: "iphone",
    title: "iPhone",
    subtitle: "MAKE IT EPIC.",
    accentBg: "#6D28FF",
    textColor: "#FFFFFF",
    image: "/assets/categories/category-iphone.png",
    cardImage: "/assets/categories/category-iphone.png",
    itemCount: 8,
    description: "Flawless first-copy iPhone replicas with dynamic island, true-depth display aesthetics, and titanium styling.",
  },
  {
    id: "macbook",
    slug: "macbook",
    title: "MacBook",
    subtitle: "POWER. MOVED.",
    accentBg: "#DFFF00",
    textColor: "#050505",
    image: "/assets/categories/category-macbook.png",
    cardImage: "/assets/categories/category-macbook.png",
    itemCount: 4,
    description: "Aluminum unibody high-speed laptops built with razor-sharp Retina panels and backlit magic keyboards.",
  },
  {
    id: "ipad",
    slug: "ipad",
    title: "iPad",
    subtitle: "CREATE CRAZY.",
    accentBg: "#FF2FA8",
    textColor: "#050505",
    image: "/assets/categories/category-ipad.png",
    cardImage: "/assets/categories/category-ipad.png",
    itemCount: 6,
    description: "Ultra-slim 120Hz display tablets engineered for creators, students, and digital power users.",
  },
  {
    id: "airpods",
    slug: "airpods",
    title: "AirPods",
    subtitle: "SOUND THAT HITS DIFFERENT.",
    accentBg: "#20D9E8",
    textColor: "#050505",
    image: "/assets/categories/category-airpods.png",
    cardImage: "/assets/categories/category-airpods.png",
    itemCount: 5,
    description: "Immersive spatial audio, transparency mode, and deep punchy bass in a 1:1 wireless earbud design.",
  },
  {
    id: "watch",
    slug: "watch",
    title: "Watch",
    subtitle: "TIME. REDEFINED.",
    accentBg: "#FF7A00",
    textColor: "#050505",
    image: "/assets/categories/category-watch.png",
    cardImage: "/assets/categories/category-watch.png",
    itemCount: 7,
    description: "Always-on OLED smartwatches with cardiac monitoring sensors, custom watchfaces, and waterproof straps.",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "iphone-14-pro-max",
    slug: "iphone-14-pro-max",
    title: "iPhone 14 Pro Max",
    subtitle: "Deep Purple, 128GB",
    category: "iPhone",
    price: 59999,
    originalPrice: 91999,
    discountBadge: "-35%",
    rating: 4.9,
    reviewsCount: 142,
    image: "/assets/products/iphone-purple.png",
    cardImage: "/assets/products/iphone-purple.png",
    galleryImages: [
      "/assets/products/iphone-purple.png",
      "/assets/products/iphone-pair.png",
      "/assets/products/iphone-black.png",
      "/assets/products/iphone-gold.png",
      "/assets/products/iphone-silver.png",
    ],
    colors: [
      { name: "Deep Purple", hex: "#4B384C", inStock: true },
      { name: "Space Black", hex: "#222224", inStock: true },
      { name: "Gold", hex: "#F4E8CE", inStock: true },
      { name: "Silver", hex: "#E2E4E1", inStock: true },
    ],
    storageOptions: ["128GB", "256GB", "512GB", "1TB"],
    description: "The flagship master first-copy iPhone 14 Pro Max. Equipped with dynamic island animation, ultra-vivid 120Hz ProMotion display, and a triple 48MP camera housing with sapphire glass optics.",
    features: [
      "1:1 Weight & Dimensions to Original",
      "Dynamic Island Interactive Notch",
      "Surgical Grade Stainless Steel Frame",
      "120Hz Super Retina OLED Display",
      "MagSafe Wireless Fast Charging",
      "Official Apple Box & Accessories Included",
    ],
    specs: {
      "Display": "6.7-inch OLED ProMotion (120Hz)",
      "Build": "Ceramic Shield front, textured matte glass back",
      "Camera": "48MP Main + 12MP Ultra-wide + 12MP Telephoto",
      "Battery": "Up to 29 hours video playback",
      "Charging": "MagSafe 15W + Qi Wireless + Lightning Fast Charge",
      "OS": "iOS 16/17 Styled UI with seamless fluidity",
    },
    inStock: true,
    featured: true,
    accentColor: "#6D28FF",
    badgeBg: "#FF7A00",
    badgeTextColor: "#FFFFFF",
  },
  {
    id: "airpods-pro-2",
    slug: "airpods-pro-2",
    title: "AirPods Pro 2",
    subtitle: "Active Noise Cancellation + MagSafe Case",
    category: "AirPods",
    price: 11999,
    originalPrice: 18999,
    discountBadge: "-33%",
    rating: 4.8,
    reviewsCount: 218,
    image: "/assets/products/airpods-pro-tilted.png",
    cardImage: "/assets/products/airpods-pro-tilted.png",
    galleryImages: [
      "/assets/products/airpods-pro-tilted.png",
      "/assets/products/airpods-pro-open.png",
      "/assets/products/airpods-pro-duo.png",
      "/assets/products/airpods-pro-case.png",
    ],
    colors: [
      { name: "Glossy White", hex: "#F9F9F9", inStock: true },
    ],
    description: "Next-generation first-copy AirPods Pro with next-level Active Noise Cancellation, Adaptive Transparency, and Personalized Spatial Audio with dynamic head tracking.",
    features: [
      "2x More Active Noise Cancellation",
      "Touch Control Volume Sliders",
      "MagSafe Charging Case with Speaker & Lanyard Loop",
      "Up to 6 Hours Listening Time (30 Hours with Case)",
      "IPX4 Sweat & Water Resistance",
    ],
    specs: {
      "Chip": "Custom H2 Audio Engine",
      "Connectivity": "Bluetooth 5.3 with Instant Popup Pairing",
      "Microphone": "Dual beamforming microphones",
      "Sensors": "Skin-detect sensor, motion & speech accelerometers",
    },
    inStock: true,
    featured: false,
    accentColor: "#20D9E8",
    badgeBg: "#DFFF00",
    badgeTextColor: "#050505",
  },
  {
    id: "apple-watch-series-8",
    slug: "apple-watch-series-8",
    title: "Apple Watch Series 8",
    subtitle: "45mm Midnight Aluminum Case",
    category: "Watch",
    price: 21999,
    originalPrice: 35999,
    discountBadge: "-38%",
    rating: 4.9,
    reviewsCount: 95,
    image: "/assets/products/watch8-black.png",
    cardImage: "/assets/products/watch8-black.png",
    galleryImages: [
      "/assets/products/watch8-black.png",
      "/assets/products/watch8-red.png",
      "/assets/products/watch8-silver.png",
      "/assets/products/watch8-gold.png",
      "/assets/products/watch8-sport.png",
    ],
    colors: [
      { name: "Midnight", hex: "#1C1D22", inStock: true },
      { name: "Starlight", hex: "#E0D7CC", inStock: true },
      { name: "Silver", hex: "#D4D4D8", inStock: true },
      { name: "RED", hex: "#C8102E", inStock: true },
    ],
    storageOptions: ["41mm", "45mm"],
    description: "Essential companion with advanced health sensors, crash detection, temperature sensing, and an edge-to-edge Always-On Retina display.",
    features: [
      "Always-On Retina OLED Display (1000 nits)",
      "Heart Rate & Blood Oxygen SpO2 Tracking",
      "Sleep Stages & Workout Metrics",
      "Water Resistant 50m Swimproof",
      "Magnetic Fast Charger Included",
    ],
    specs: {
      "Case Size": "45mm or 41mm aerospace-grade aluminum",
      "Battery": "18 hours all-day battery life (Fast Charging)",
      "Compatibility": "iOS & Android Bluetooth Sync",
    },
    inStock: true,
    featured: false,
    accentColor: "#DFFF00",
    badgeBg: "#DFFF00",
    badgeTextColor: "#050505",
  },
  {
    id: "iphone-15-pro-max",
    slug: "iphone-15-pro-max",
    title: "iPhone 15 Pro Max",
    subtitle: "Natural Titanium, 256GB",
    category: "iPhone",
    price: 64999,
    originalPrice: 99999,
    discountBadge: "-35%",
    rating: 5.0,
    reviewsCount: 88,
    image: "/assets/products/iphone15-titanium.png",
    cardImage: "/assets/products/iphone15-titanium.png",
    galleryImages: [
      "/assets/products/iphone15-titanium.png",
      "/assets/products/iphone15-dark.png",
      "/assets/products/iphone-purple.png",
    ],
    colors: [
      { name: "Natural Titanium", hex: "#8D8B84", inStock: true },
      { name: "Blue Titanium", hex: "#2E3A48", inStock: true },
      { name: "White Titanium", hex: "#F2F1ED", inStock: true },
      { name: "Black Titanium", hex: "#242527", inStock: true },
    ],
    storageOptions: ["256GB", "512GB", "1TB"],
    description: "Forged in aerospace titanium with customizable Action Button, 5x optical telephoto zoom, and USB-C high speed connector.",
    features: [
      "Grade 5 Titanium Contoured Enclosure",
      "Action Button with Custom Shortcuts",
      "5x Telephoto Optical Zoom Lens",
      "USB-C Power & Data Port",
      "Super Retina XDR with ProMotion 120Hz",
    ],
    specs: {
      "Processor": "A17 Pro Equivalent Octa-Core",
      "Display": "6.7-inch Super Retina XDR OLED",
      "Weight": "221 grams (Exact to original)",
    },
    inStock: true,
    featured: false,
    accentColor: "#DFFF00",
    badgeBg: "#FF2FA8",
    badgeTextColor: "#FFFFFF",
  },
  {
    id: "macbook-pro-16",
    slug: "macbook-pro-16",
    title: "MacBook Pro 16\"",
    subtitle: "Space Gray, 16GB RAM / 512GB SSD",
    category: "MacBook",
    price: 89999,
    originalPrice: 149999,
    discountBadge: "-40%",
    rating: 4.9,
    reviewsCount: 52,
    image: "/assets/products/macbook-pro-spacegray.png",
    cardImage: "/assets/products/macbook-pro-spacegray.png",
    galleryImages: [
      "/assets/products/macbook-pro-spacegray.png",
      "/assets/products/macbook-pro-silver.png",
      "/assets/products/macbook-pro-front.png",
      "/assets/products/macbook-air.png",
    ],
    colors: [
      { name: "Space Gray", hex: "#4A4D52", inStock: true },
      { name: "Silver", hex: "#DCDDE1", inStock: true },
    ],
    storageOptions: ["512GB SSD", "1TB SSD"],
    description: "The ultimate power machine. Liquid Retina XDR screen with incredible dynamic range, studio-quality mics, and multi-port connectivity.",
    features: [
      "16.2\" Liquid Retina XDR 120Hz Display",
      "Full Aluminum Unibody Shell",
      "Magic Keyboard with Touch ID",
      "MagSafe 3 Fast Charging + HDMI + SD Card Slot",
      "High-Fidelity 6-Speaker Sound System",
    ],
    specs: {
      "Screen": "16.2\" 3456x2234 XDR Mini-LED",
      "Battery": "Up to 22 hours",
      "Ports": "3x Thunderbolt, HDMI, SDXC, MagSafe 3",
    },
    inStock: true,
    featured: false,
    accentColor: "#DFFF00",
    badgeBg: "#6D28FF",
    badgeTextColor: "#FFFFFF",
  },
  {
    id: "ipad-pro-12-9",
    slug: "ipad-pro-12-9",
    title: "iPad Pro 12.9\"",
    subtitle: "Space Gray, Wi-Fi 128GB",
    category: "iPad",
    price: 49999,
    originalPrice: 79999,
    discountBadge: "-37%",
    rating: 4.8,
    reviewsCount: 74,
    image: "/assets/products/ipad-pro-spacegray.png",
    cardImage: "/assets/products/ipad-pro-spacegray.png",
    galleryImages: [
      "/assets/products/ipad-pro-spacegray.png",
      "/assets/products/ipad-pro-silver.png",
    ],
    colors: [
      { name: "Space Gray", hex: "#4A4D52", inStock: true },
      { name: "Silver", hex: "#DCDDE1", inStock: true },
    ],
    storageOptions: ["128GB", "256GB", "512GB"],
    description: "Astonishing power with Liquid Retina XDR mini-LED display, ultra-wide front camera with Center Stage, and Apple Pencil 2 magnetic wireless charging.",
    features: [
      "12.9\" Mini-LED Liquid Retina XDR Screen",
      "Apple Pencil 2 Magnetic Charging Support",
      "Quad-Speaker Audio System",
      "Face ID Unlock & Center Stage Front Cam",
    ],
    specs: {
      "Display": "12.9-inch (diagonal) mini-LED backlit",
      "Weight": "682 grams",
      "Connectivity": "Wi-Fi 6E + Bluetooth 5.3",
    },
    inStock: true,
    featured: false,
    accentColor: "#FF2FA8",
    badgeBg: "#20D9E8",
    badgeTextColor: "#050505",
  },
  {
    id: "apple-watch-ultra-2",
    slug: "apple-watch-ultra-2",
    title: "Apple Watch Ultra 2",
    subtitle: "49mm Titanium with Orange Alpine Loop",
    category: "Watch",
    price: 27999,
    originalPrice: 44999,
    discountBadge: "-38%",
    rating: 4.9,
    reviewsCount: 112,
    image: "/assets/products/watch-ultra.png",
    cardImage: "/assets/products/watch-ultra.png",
    galleryImages: [
      "/assets/products/watch-ultra.png",
      "/assets/products/watch8-sport.png",
      "/assets/products/watch8-black.png",
    ],
    colors: [
      { name: "Orange Alpine Loop", hex: "#FF5500", inStock: true },
      { name: "Midnight Ocean Band", hex: "#1C1D22", inStock: true },
      { name: "Starlight Trail Loop", hex: "#E0D7CC", inStock: true },
    ],
    description: "Rugged and capable, crafted from aerospace titanium with dual-frequency GPS, 3000 nits peak brightness, and customizable orange Action Button.",
    features: [
      "49mm Aerospace Titanium Case",
      "Sapphire Crystal Flat Front Display",
      "Brightest 3000 nits Display",
      "Customizable International Orange Action Button",
      "Up to 36-72 Hours Extended Battery",
    ],
    specs: {
      "Case": "49mm natural titanium",
      "Water Resistance": "100m water resistant & dive tested",
      "Sensors": "Depth gauge, water temp sensor, ECG, SpO2",
    },
    inStock: true,
    featured: false,
    accentColor: "#FF7A00",
    badgeBg: "#FF7A00",
    badgeTextColor: "#FFFFFF",
  },
  {
    id: "airpods-max",
    slug: "airpods-max",
    title: "AirPods Max",
    subtitle: "Space Gray with Smart Case",
    category: "AirPods",
    price: 24999,
    originalPrice: 39999,
    discountBadge: "-37%",
    rating: 4.8,
    reviewsCount: 63,
    image: "/assets/products/airpods-max-silver.png",
    cardImage: "/assets/products/airpods-max-silver.png",
    galleryImages: [
      "/assets/products/airpods-max-silver.png",
      "/assets/products/airpods-max-black.png",
      "/assets/products/airpods-max-blue.png",
    ],
    colors: [
      { name: "Space Gray", hex: "#38393D", inStock: true },
      { name: "Silver", hex: "#E1E2E6", inStock: true },
      { name: "Sky Blue", hex: "#9EB6C7", inStock: true },
      { name: "Pink", hex: "#D6A3A3", inStock: true },
    ],
    description: "A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. Breathable knit mesh canopy and memory foam ear cushions.",
    features: [
      "Custom Dynamic Audio Drivers",
      "Active Noise Cancellation with Transparency Mode",
      "Computational Audio with H1 Headphone Chips",
      "Smart Case with Ultra-Low-Power State",
      "20 Hours Battery Life on Single Charge",
    ],
    specs: {
      "Driver": "40mm Apple-designed dynamic driver",
      "Weight": "384.8 grams",
      "Charging": "Lightning to USB-C Fast Charge",
    },
    inStock: true,
    featured: false,
    accentColor: "#20D9E8",
    badgeBg: "#6D28FF",
    badgeTextColor: "#FFFFFF",
  },
];

export const CRAZY_DEALS: DealItem[] = PRODUCTS.slice(0, 3).map((p) => ({
  id: p.id,
  title: p.title,
  subtitle: p.subtitle,
  price: p.price,
  originalPrice: p.originalPrice,
  discountBadge: p.discountBadge,
  badgeBg: p.badgeBg,
  badgeTextColor: p.badgeTextColor,
  image: p.image,
  cardImage: p.cardImage,
  featured: p.featured,
  accentColor: p.accentColor,
  category: p.category,
  slug: p.slug,
}));

export const TRUST_FEATURES: TrustItem[] = [
  {
    id: "premium",
    title: "PREMIUM FIRST COPY",
    subtitle: "Best Quality. Like Original.",
    icon: "diamond",
  },
  {
    id: "return",
    title: "7 DAYS EASY RETURN",
    subtitle: "No Questions Asked.",
    icon: "return",
  },
  {
    id: "delivery",
    title: "FAST & SAFE DELIVERY",
    subtitle: "Right To Your Doorstep.",
    icon: "truck",
  },
  {
    id: "secure",
    title: "SECURE PAYMENT",
    subtitle: "100% Protected.",
    icon: "shield",
  },
];

export const BENEFITS: BenefitItem[] = [
  {
    id: "customers",
    metric: "10K+",
    title: "HAPPY CUSTOMERS",
    accentBg: "#6D28FF",
    textColor: "#050505",
    icon: "users",
  },
  {
    id: "reviews",
    metric: "98%",
    title: "POSITIVE REVIEWS",
    accentBg: "#DFFF00",
    textColor: "#050505",
    icon: "star",
  },
  {
    id: "warranty",
    metric: "1 YEAR+",
    title: "PRODUCT WARRANTY",
    accentBg: "#20D9E8",
    textColor: "#050505",
    icon: "shield-check",
  },
  {
    id: "support",
    metric: "24/7",
    title: "CUSTOMER SUPPORT",
    accentBg: "#FF2FA8",
    textColor: "#050505",
    icon: "headphones",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    quote: "The quality is insane! You can't even tell the difference. The Gadget Cardinals is my go-to store now!",
    author: "RAHUL S.",
    rating: 5,
    verified: true,
    productBought: "iPhone 14 Pro Max (Deep Purple)",
  },
  {
    id: "2",
    quote: "The iPhone 14 Pro Max build and dynamic island look 100% authentic. Incredible sound and ANC on the AirPods too!",
    author: "AARYAN M.",
    rating: 5,
    verified: true,
    productBought: "AirPods Pro 2",
  },
  {
    id: "3",
    quote: "Fast 2-day delivery to Bangalore. Unbelievable titanium finish and battery life on the Apple Watch Ultra.",
    author: "PRIYA K.",
    rating: 5,
    verified: true,
    productBought: "Apple Watch Ultra 2",
  },
  {
    id: "4",
    quote: "Purchased the 16\" MacBook Pro first copy for development demos. Super fast delivery and top tier packaging!",
    author: "VIKRAM D.",
    rating: 5,
    verified: true,
    productBought: "MacBook Pro 16\"",
  }
];

export const FOOTER_LINKS = {
  shop: [
    { label: "iPhone", href: "/shop?category=iPhone" },
    { label: "MacBook", href: "/shop?category=MacBook" },
    { label: "iPad", href: "/shop?category=iPad" },
    { label: "AirPods", href: "/shop?category=AirPods" },
    { label: "Apple Watch", href: "/shop?category=Watch" },
    { label: "Accessories", href: "/shop" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Track Order", href: "/contact" },
    { label: "FAQs", href: "/contact#faqs" },
    { label: "Warranty", href: "/about#warranty" },
    { label: "Privacy Policy", href: "/about" },
  ],
  help: [
    { label: "Shipping & Delivery", href: "/contact" },
    { label: "Returns & Refunds", href: "/contact" },
    { label: "Terms & Conditions", href: "/about" },
    { label: "Payment Policy", href: "/contact" },
    { label: "Support Center", href: "/contact" },
  ],
};

export const FAQS = [
  {
    question: "What does 'First Copy' mean?",
    answer: "First Copy products are premium 1:1 master grade replicas built using the exact exterior materials, weight, dimensions, and display aesthetics as original Apple devices, but at a fraction of the retail cost.",
  },
  {
    question: "How long does shipping take?",
    answer: "We offer Free Express Shipping across India. Metro cities receive delivery in 2-3 business days, while all other locations take 3-5 business days. Real-time tracking is provided via SMS and WhatsApp.",
  },
  {
    question: "What is your 7-Day Return Policy?",
    answer: "If you are not 100% satisfied with the finish or performance, you can initiate a hassle-free return or replacement within 7 days of delivery with no questions asked.",
  },
  {
    question: "Does it come with official packaging?",
    answer: "Yes! Every single product comes in sealed original-style Apple packaging with user manuals, SIM ejection pin, serial numbers, and braided fast charging cables.",
  },
  {
    question: "Is there warranty coverage?",
    answer: "All products include 1-Year Comprehensive Replacement Warranty covering internal hardware and charging components.",
  }
];
