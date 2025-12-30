import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Share2, Star, Sparkles } from 'lucide-react';
export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  rating: number;
  imageEmoji: string;
  prepTime: string;
}
interface RecipeCardProps {
  recipe: Recipe;
  index: number;
}
export function RecipeCard({
  recipe,
  index
}: RecipeCardProps) {
  return <motion.div initial={{
    opacity: 0,
    y: 50
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: index * 0.1,
    type: 'spring',
    stiffness: 100
  }} whileHover={{
    y: -8,
    scale: 1.02
  }} className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col h-full relative group">
      {/* Veganized Badge */}
      <div className="absolute top-4 right-4 z-10">
        <motion.div animate={{
        scale: [1, 1.05, 1]
      }} transition={{
        repeat: Infinity,
        duration: 2
      }} className="bg-gradient-to-r from-emerald-500 to-lime-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          VEGANIZED!
        </motion.div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-center h-32 bg-lime-50 rounded-2xl mb-6 text-6xl shadow-inner">
          {recipe.imageEmoji}
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">
          {recipe.title}
        </h3>

        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < recipe.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />)}
          <span className="text-xs text-gray-400 ml-2 font-medium">
            {recipe.prepTime}
          </span>
        </div>

        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {recipe.description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {recipe.ingredients.slice(0, 3).map((ingredient, i) => <span key={i} className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-100">
                {ingredient}
              </span>)}
            {recipe.ingredients.length > 3 && <span className="text-xs text-gray-400 flex items-center px-1">
                +{recipe.ingredients.length - 3} more
              </span>}
          </div>

          <div className="flex gap-3 pt-4 border-t border-gray-100">
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} className="flex-1 bg-gray-100 hover:bg-red-50 hover:text-red-500 text-gray-600 font-bold py-3 rounded-full flex items-center justify-center gap-2 transition-colors">
              <Heart className="w-5 h-5" />
            </motion.button>
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-emerald-200 transition-colors">
              <Share2 className="w-5 h-5" />
              <span className="text-sm">Share</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>;
}