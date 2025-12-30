import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Wand2 } from 'lucide-react';
import { AnimatedPlaceholder } from '../components/AnimatedPlaceholder';
import { RecipeCard, Recipe } from '../components/RecipeCard';
const MOCK_RECIPES: Recipe[] = [{
  id: '1',
  title: 'Creamy Vegan Carbonara',
  description: 'A rich, dairy-free take on the classic. We use a silky cashew cream sauce and smoky tempeh bacon bits for that authentic crunch.',
  ingredients: ['Cashews', 'Nutritional Yeast', 'Smoked Tempeh', 'Miso Paste'],
  rating: 5,
  imageEmoji: '🍝',
  prepTime: '25 min'
}, {
  id: '2',
  title: 'Jackfruit Carnitas Tacos',
  description: 'Tender, pulled jackfruit simmered in spices, topped with a zesty avocado crema and pickled onions. Better than pork!',
  ingredients: ['Young Jackfruit', 'Avocado', 'Lime', 'Corn Tortillas'],
  rating: 5,
  imageEmoji: '🌮',
  prepTime: '40 min'
}, {
  id: '3',
  title: 'Chickpea Tikka Masala',
  description: 'Hearty chickpeas simmered in a vibrant, spiced coconut tomato curry. Served with fluffy basmati rice and garlic naan.',
  ingredients: ['Chickpeas', 'Coconut Milk', 'Garam Masala', 'Tomatoes'],
  rating: 4,
  imageEmoji: '🍛',
  prepTime: '35 min'
}, {
  id: '4',
  title: 'Ultimate Black Bean Burger',
  description: 'Smoky, savory, and packed with protein. These patties hold together perfectly and grill beautifully.',
  ingredients: ['Black Beans', 'Walnuts', 'Oats', 'BBQ Sauce'],
  rating: 5,
  imageEmoji: '🍔',
  prepTime: '30 min'
}];
const PLACEHOLDERS = ['Spaghetti Carbonara...', 'Beef Tacos...', 'Chicken Tikka Masala...', 'Cheeseburger...', 'Pepperoni Pizza...', 'Beef Stroganoff...'];
export function VeganRecipeConverter() {
  const [inputValue, setInputValue] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    // Simulate search delay
    setTimeout(() => setIsSearching(false), 1000);
  };
  return <div className="min-h-screen w-full bg-gradient-to-br from-emerald-500 via-green-500 to-lime-400 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12 pt-8">
          <motion.div initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-sm tracking-tight">
              Veganize It!{' '}
              <span className="inline-block animate-bounce">🌱</span>
            </h1>
            <p className="text-emerald-50 text-lg md:text-xl font-medium max-w-2xl mx-auto opacity-90">
              Turn your favorite meat dishes into delicious plant-based
              masterpieces instantly.
            </p>
          </motion.div>
        </header>

        {/* Input Section */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        delay: 0.2,
        duration: 0.5
      }} className="max-w-3xl mx-auto mb-16 relative z-10">
          <form onSubmit={handleSearch} className="relative group">
            <div className="absolute inset-0 bg-white rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="bg-white rounded-3xl shadow-2xl p-2 flex items-center relative overflow-hidden">
              <div className="flex-1 relative h-16">
                {/* Animated Placeholder */}
                {inputValue === '' && <AnimatedPlaceholder placeholders={PLACEHOLDERS} />}

                <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} className="w-full h-full bg-transparent text-gray-800 text-lg px-6 outline-none relative z-10 font-medium" />
              </div>

              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} type="submit" className="bg-gradient-to-r from-emerald-500 to-lime-500 text-white rounded-2xl px-8 h-14 font-bold text-lg shadow-lg flex items-center gap-2 hover:shadow-emerald-200/50 transition-shadow">
                {isSearching ? <motion.div animate={{
                rotate: 360
              }} transition={{
                repeat: Infinity,
                duration: 1,
                ease: 'linear'
              }}>
                    <Wand2 className="w-6 h-6" />
                  </motion.div> : <>
                    <Wand2 className="w-5 h-5" />
                    <span>Convert</span>
                  </>}
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
          {MOCK_RECIPES.map((recipe, index) => <RecipeCard key={recipe.id} recipe={recipe} index={index} />)}
        </div>

        {/* Footer */}
        <footer className="text-center text-emerald-100 pb-8 text-sm font-medium">
          <p>Made with 💚 for the planet</p>
        </footer>
      </div>
    </div>;
}