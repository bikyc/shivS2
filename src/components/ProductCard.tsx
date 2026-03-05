import React from 'react';
import { Product } from '../types';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'overlay';
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, variant = 'default' }) => {
  if (variant === 'overlay') {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-200 cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>
        <div className="absolute bottom-6 left-6">
          <h3 className="text-white text-xl font-bold uppercase tracking-wider italic">{product.name}</h3>
          <p className="text-white/80 text-xs uppercase font-bold tracking-widest mt-1">Explore Style</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <div className="aspect-[3/4] overflow-hidden rounded-lg bg-slate-100 mb-4 relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        {product.tag && (
          <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
            {product.tag}
          </span>
        )}
      </div>
      <div className="space-y-1">
        <h4 className="font-bold uppercase text-sm tracking-widest group-hover:text-primary transition-colors">
          {product.name}
        </h4>
        {product.description && (
          <p className="text-slate-500 text-xs uppercase tracking-wider">{product.description}</p>
        )}
      </div>
    </motion.div>
  );
};
