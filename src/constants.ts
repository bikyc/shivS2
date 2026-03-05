import { Product } from './types';

export const PRODUCTS: Product[] = [
  // APPAREL - SHIRTS
  {
    id: 'boxy-tee-white',
    name: 'Boxy Oversized Tee',
    category: 'Apparel',
    subCategory: 'Shirts',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    description: '100% Organic Cotton • Vintage Wash'
  },
  {
    id: 'linen-shirt-white-v2',
    name: 'White Linen Resort Shirt',
    category: 'Apparel',
    subCategory: 'Shirts',
    image: '/images/linen_shirt_white.png',
    description: 'Premium summer linen, breathable'
  },
  {
    id: 'flannel-overshirt-navy',
    name: 'Heavyweight Flannel Overshirt',
    category: 'Apparel',
    subCategory: 'Shirts',
    image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&q=80&w=800',
    description: 'Double-brushed for ultimate warmth'
  },

  // APPAREL - PANTS
  {
    id: 'slim-chinos-navy-v2',
    name: 'Slim Fit Chinos',
    category: 'Apparel',
    subCategory: 'Pants',
    image: '/images/slim_fit_chinos_navy.png',
    description: 'Tailored navy cotton chinos'
  },
  {
    id: 'selvedge-denim-classic',
    name: 'Selvedge Denim',
    category: 'Apparel',
    subCategory: 'Pants',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800',
    description: 'Japanese Raw Selvedge'
  },
  // {
  //   id: 'khaki-chinos',
  //   name: 'Essential Khaki Chinos',
  //   category: 'Apparel',
  //   subCategory: 'Pants',
  //   image: 'https://images.unsplash.com/photo-1473966968600-fa804b86d27b?auto=format&fit=crop&q=80&w=800',
  //   description: 'Classic fit for everyday wear'
  // },


  // APPAREL - OUTERWEAR
  {
    id: 'leather-bomber-premium',
    name: 'Leather Bomber',
    category: 'Apparel',
    subCategory: 'Outerwear',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBw1XTlUX1qOvsZwNVauKTeV0kJY6MpZm5rxe6-62G0fU0U_5oRc7Ywr4jWC5Jx3nmkj0fC8xGms-Zt0eLjrJxRx9vR4aTsmIacaij8SwO04tNCajRBdm1uwUNV31eW_ugvSom9svmrNeff8BZ7iPq0xMoxzpcWKWNZhjvQDnjopKYPsThxU85NV0dzc5b_FkNK29phmcB517mPCRt7FsMYCc-kJm7CMy7k3cE03vVi2uRvqe-Cd-ZLNc6ArKqJs9rqXzsyQwoJz3w',
    description: 'Genuine Calfskin • Slim Fit'
  },
  {
    id: 'corduroy-trucker-classic',
    name: 'Corduroy Trucker Jacket',
    category: 'Apparel',
    subCategory: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800',
    description: 'Classic texture, modern silhouette'
  },

  // FOOTWEAR - SNEAKERS
  {
    id: 'velocity-pro-sneakers-red',
    name: 'Velocity Pro Sneakers',
    category: 'Footwear',
    subCategory: 'Sneakers',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
    description: 'High-performance athletic wear'
  },
  {
    id: 'urban-white-sneakers',
    name: 'Urban White Sneakers',
    category: 'Footwear',
    subCategory: 'Sneakers',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=800',
    description: 'Minimalist leather sneakers'
  },
  {
    id: 'retro-runners',
    name: 'Retro Runners',
    category: 'Footwear',
    subCategory: 'Sneakers',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800',
    description: 'Vintage-inspired comfort'
  },

  // FOOTWEAR - FORMAL
  {
    id: 'heritage-oxford-formal',
    name: 'Heritage Oxford',
    category: 'Footwear',
    subCategory: 'Formal',
    image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=800',
    description: 'Premium Handcrafted Formal'
  },
  {
    id: 'classic-derby-shoes',
    name: 'Classic Derby Shoes',
    category: 'Footwear',
    subCategory: 'Formal',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=800',
    description: 'Polished calfskin leather'
  },

  // FOOTWEAR - BOOTS
  {
    id: 'chelsea-boots-suede',
    name: 'Suede Chelsea Boots',
    category: 'Footwear',
    subCategory: 'Boots',
    image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&q=80&w=800',
    description: 'Minimalist silhouette, crepe sole'
  },

  // ACCESSORIES - WATCHES
  {
    id: 'slate-minimalist-watch-v2',
    name: 'Slate Minimalist Watch',
    category: 'Accessories',
    subCategory: 'Watches',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    description: 'Swiss Movement • Sapphire Glass'
  },
  {
    id: 'silver-chrono-watch-v2',
    name: 'Classic Silver Chrono',
    category: 'Accessories',
    subCategory: 'Watches',
    image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=800',
    description: 'Surgical grade stainless steel'
  },

  // ACCESSORIES - EYEWEAR
  {
    id: 'classic-aviators-black',
    name: 'Black Matte Aviators',
    category: 'Accessories',
    subCategory: 'Eyewear',
    image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=800',
    description: 'Polarized lenses, UV400'
  },
  {
    id: 'retro-round-shades',
    name: 'Retro Round Shades',
    category: 'Accessories',
    subCategory: 'Eyewear',
    image: 'https://images.unsplash.com/photo-1729371080284-619bc92a3bec?auto=format&fit=crop&q=80&w=800',
    description: 'Vintage tortoise frame'
  },

  // ACCESSORIES - LEATHER GOODS
  {
    id: 'slim-leather-wallet-v2',
    name: 'Slim Leather Wallet',
    category: 'Accessories',
    subCategory: 'Leather Goods',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800',
    description: 'Full-grain bifold, handcrafted'
  },
  {
    id: 'nomad-leather-duffle',
    name: 'Nomad Duffle Bag',
    category: 'Accessories',
    subCategory: 'Leather Goods',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
    description: 'Premium travel companion'
  },

  // TRAVEL GEAR - SUITCASES
  {
    id: 'travel-hardshell-charcoal',
    name: 'Elite Hardshell Suitcase',
    category: 'Travel Gear',
    subCategory: 'Suitcases',
    image: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&q=80&w=800',
    description: 'Impact-resistant polycarbonate'
  },
  {
    id: 'travel-carry-on-navy',
    name: 'Voyager Carry-On',
    category: 'Travel Gear',
    subCategory: 'Suitcases',
    image: 'https://images.unsplash.com/photo-1581553680321-4fffae59fccd?auto=format&fit=crop&q=80&w=800',
    description: 'Compact 4-wheel spinner'
  },

  // TRAVEL GEAR - TRAVEL BAGS
  {
    id: 'travel-duffle-leather-pro',
    name: 'Executive Duffle Bag',
    category: 'Travel Gear',
    subCategory: 'Travel Bags',
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=800',
    description: 'Full-grain vintage leather'
  },
  {
    id: 'travel-tech-backpack-v2',
    name: 'Quantum Tech Backpack',
    category: 'Travel Gear',
    subCategory: 'Travel Bags',
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=800',
    description: 'Waterproof with USB charging'
  },

  {
    id: 'travel-hiking-boots-rugged',
    name: 'Trailblazer Hiking Boots',
    category: 'Travel Gear',
    subCategory: 'Outdoor Essentials',
    image: 'https://images.unsplash.com/photo-1756725519458-6f99b485569e?auto=format&fit=crop&q=80&w=800',
    description: 'Gore-Tex waterproof protection'
  },

  {
    id: 'rugged-leather-boots',
    name: 'Rugged Leather Boots',
    category: 'Travel Gear',
    subCategory: 'Outdoor Essentials',
    image: 'https://images.unsplash.com/photo-1605733513597-a8f8341084e6?auto=format&fit=crop&q=80&w=800',
    description: 'Weatherproof and durable'
  },

  // TRAVEL GEAR - APPAREL
  {
    id: 'tech-fleece-joggers-charcoal',
    name: 'Tech Fleece Joggers',
    category: 'Travel Gear',
    subCategory: 'Apparel',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=800',
    description: 'Performance fabric, tapered fit'
  },
  {
    id: 'merino-joggers-grey',
    name: 'Merino Wool Joggers',
    category: 'Travel Gear',
    subCategory: 'Apparel',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800',
    description: 'Luxury comfort for travel'
  },
  {
    id: 'urban-cargo-joggers',
    name: 'Urban Cargo Joggers',
    category: 'Travel Gear',
    subCategory: 'Apparel',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800',
    description: 'Utility pockets, elastic cuffs'
  },

  // TRAVEL GEAR - ACCESSORIES
  {
    id: 'travel-memory-pillow-v2',
    name: 'CloudComfort Travel Pillow',
    category: 'Travel Gear',
    subCategory: 'Accessories',
    image: 'https://images.unsplash.com/photo-1603513188937-a5ec7a931eba?auto=format&fit=crop&q=80&w=800',
    description: 'Memory foam with cooling gel'
  }
];
