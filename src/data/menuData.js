// Menu Data Architecture based on Official Goshen Copywriting Blueprint

export const MENU_CATEGORIES = [
  { id: 'all', name: 'All Selections', icon: 'Sparkles' },
  { id: 'breakfast', name: 'The Breakfast Grille', subtitle: 'Served Daily', icon: 'Egg' },
  { id: 'deli', name: 'Midday Deli Counter', subtitle: 'Fast & Fresh Lunch', icon: 'Sandwich' },
  { id: 'international', name: 'International Comfort Specialties', subtitle: 'Our Roots', icon: 'Flame' },
  { id: 'beverages', name: 'Add-ons & Essentials', subtitle: 'Warm Sips & Chilled Juices', icon: 'Coffee' },
];

export const MENU_ITEMS = [
  // SECTION A: THE BREAKFAST GRILLE (SERVED DAILY)
  {
    id: 'egg-plates',
    category: 'breakfast',
    name: 'Made-to-Order Egg Plates',
    price: 8.99,
    description: 'Two fresh farm eggs cooked precisely to your liking (scrambled, over-easy, or sunny-side-up), served alongside golden buttered toast and your choice of seasoned protein.',
    image: '/images/breakfast-platter.jpg',
    popular: true,
    badge: 'Morning Favorite',
    tags: ['Fresh Farm Eggs', 'Customizable', 'Daily Grille'],
    options: {
      eggStyle: ['Scrambled', 'Sunny-Side-Up', 'Over-Easy', 'Well Done'],
      protein: ['Smoked Applewood Bacon', 'Breakfast Pork Sausage', 'Halal Turkey Bacon', 'Grilled Plantain Slices'],
      toast: ['Sourdough Toast', 'Country White Toast', 'Multigrain Toast']
    }
  },
  {
    id: 'breakfast-platter',
    category: 'breakfast',
    name: 'Signature Breakfast Platter',
    price: 11.49,
    description: 'A hearty morning combination featuring fluffy griddled items, scrambled eggs, and traditional morning sides to fuel your workday in Morrisville and RTP.',
    image: '/images/breakfast-platter.jpg',
    popular: true,
    badge: 'Chef Choice',
    tags: ['Hearty Meal', 'Fluffy Pancakes / Waffle', 'Workday Fuel'],
    options: {
      griddleItem: ['Fluffy Buttermilk Pancakes (2)', 'Golden Crisp Waffle', 'French Brioche Toast'],
      protein: ['Savory Breakfast Sausage', 'Crisp Bacon Strips', 'Turkey Links'],
      eggStyle: ['Scrambled Eggs', 'Sunny-Side-Up', 'Poached']
    }
  },

  // SECTION B: MIDDAY DELI COUNTER (FAST & FRESH LUNCH)
  {
    id: 'sandwich-board',
    category: 'deli',
    name: 'Premium Sandwich Board',
    price: 10.99,
    description: 'Crisp, thinly sliced deli proteins, artisan cheeses, hand-selected leaf greens, and vine-ripened tomatoes stacked between fresh, locally sourced bread options.',
    image: '/images/deli-sandwich.jpg',
    popular: true,
    badge: 'Lunch Bestseller',
    tags: ['Artisan Bread', 'Sliced Daily', 'Quick Takeout'],
    options: {
      proteinChoice: ['Smoked Oven Turkey Breast', 'Slow-Roasted Beef', 'Classic Ham & Swiss', 'Vegetarian Mozzarella & Basil'],
      breadChoice: ['Artisan Sourdough', 'Rustic Baguette', 'Multigrain Ciabatta', 'Brioche Roll'],
      dressing: ['House Herb Aioli', 'Dijon Mustard', 'Spicy Mayo', 'Balsamic Glaze']
    }
  },
  {
    id: 'american-hot-dogs',
    category: 'deli',
    name: 'Classic American Hot Dogs',
    price: 6.49,
    description: 'Premium all-beef hot dogs grilled to perfection, snuggled in a warm toasted bun with customizable traditional condiments and crisp chips.',
    image: '/images/deli-sandwich.jpg',
    popular: false,
    badge: 'American Classic',
    tags: ['100% All-Beef', 'Grilled To Order', 'Family Friendly'],
    options: {
      condiments: ['Yellow Mustard & Ketchup', 'Sweet Relish & Onions', 'Jalapeño & Spicy Relish', 'Plain Toasted'],
      sideChoice: ['Kettle Cooked Chips', 'House Slaw', 'Extra Pickle Spear']
    }
  },
  {
    id: 'soups-of-the-day',
    category: 'deli',
    name: 'House-Crafted Soups of the Day',
    price: 5.99,
    description: 'Lighter, soul-warming broths and creamy, seasonal vegetable purees prepared fresh from scratch every morning in our Morrisville kitchen.',
    image: '/images/deli-sandwich.jpg',
    popular: false,
    badge: 'Scratch-Made',
    tags: ['Simmered Daily', 'Comfort Broth', 'Vegetarian Option'],
    options: {
      soupVariety: ['Creamy Roasted Tomato Basil', 'Homestyle Chicken & Herb Broth', 'Slow-Cooked Lentil & Root Vegetables'],
      servingSize: ['Cup (8 oz)', 'Bowl with Crusty Bread (+ $2.00)']
    }
  },

  // SECTION C: INTERNATIONAL COMFORT SPECIALTIES (OUR ROOTS)
  {
    id: 'naija-buns',
    category: 'international',
    name: 'Authentic Naija Buns (Nigerian Buns)',
    price: 4.99,
    priceNote: '3-piece warm pouch',
    description: 'The ultimate West African pastry treat. Crispy and golden brown on the outside, delightfully soft and subtly sweet on the inside. Perfectly paired with a hot drink or enjoyed as a satisfying all-day snack.',
    image: '/images/naija-buns.jpg',
    popular: true,
    badge: 'Our Signature Root',
    tags: ['West African Legend', 'Crispy & Fluffy', 'Hand-Kneaded Daily'],
    options: {
      portionSize: ['Single Pouch (3 Pieces - $4.99)', 'Sharing Box (6 Pieces - $8.99)', 'Party Platter (15 Pieces - $21.99)'],
      spiceNote: ['Traditional Nutmeg & Sweet Milk', 'Light Cinnamon Dusting', 'Classic Plain']
    }
  },
  {
    id: 'efo-riro-vegetable-soup',
    category: 'international',
    name: 'Traditional African Vegetable Soup (Efo Riro / Traditional Broth)',
    price: 14.99,
    description: 'A rich, deeply aromatic stew cooked with fresh spinach, native locust beans, palm oil, and complex blend of blended peppers, simmered perfectly with assorted tender meats.',
    image: '/images/efo-riro.jpg',
    popular: true,
    badge: 'Customer Revered',
    tags: ['Authentic Recipe', 'Rich Spinach Stew', 'Slow-Simmered Meats'],
    options: {
      meatChoice: ['Assorted Meats (Beef, Tripe & Smoked Fish)', 'Tender Boneless Beef Only', 'Seasoned Chicken Pieces', 'Vegetarian / Mushroom Efo'],
      spiceLevel: ['Mild Traditional Warmth', 'Medium Native Heat', 'Extra Spicy Hot Pepper'],
      swallowOrRice: ['Pounded Yam / Fufu', 'Aromatic White Rice', 'Golden Fried Plantains']
    }
  },
  {
    id: 'continental-chicken-pots',
    category: 'international',
    name: 'Continental Chicken Pots',
    price: 12.99,
    description: 'Juicy chicken pieces deep-marinated in our house blend of exotic global spices, slowly roasted or fried to crispy perfection with sweet peppers and herbs.',
    image: '/images/continental-chicken.jpg',
    popular: true,
    badge: 'House Specialty',
    tags: ['Deep Marinated', 'Exotic Global Spices', 'Crispy Golden Finish'],
    options: {
      preparation: ['Slow-Roasted with Pan Juices', 'Crispy Golden Fried'],
      sideChoice: ['Seasoned Jollof-Style Rice', 'Roasted Herb Potatoes', 'House Garden Salad & Plantains'],
      sauceOnSide: ['Goshen Pepper Chutney', 'Garlic Herb Cream', 'Sweet Mild Glaze']
    }
  },

  // ADD-ONS & ESSENTIALS
  {
    id: 'artisanal-hot-coffee',
    category: 'beverages',
    name: 'Freshly Brewed Artisanal Hot Coffee',
    price: 2.99,
    description: 'Rich, freshly ground coffee brewed continuously every morning to keep your workday energetic and focused.',
    image: '/images/breakfast-platter.jpg',
    popular: false,
    badge: 'Freshly Brewed',
    tags: ['Locally Roasted', 'All-Day Refill Available'],
    options: {
      roast: ['Medium House Blend', 'Dark Continental Roast', 'Decaf Blend'],
      creamer: ['Whole Milk', 'Oat Milk', 'Half & Half', 'Black / None']
    }
  },
  {
    id: 'selection-hot-teas',
    category: 'beverages',
    name: 'Selection of Hot Teas',
    price: 2.75,
    description: 'Curated fragrant herbal and black teas including ginger lemon, English breakfast, and soothing chamomile.',
    image: '/images/naija-buns.jpg',
    popular: false,
    badge: 'Herbal & Black',
    tags: ['Aromatic Sips', 'Honey & Lemon'],
    options: {
      blend: ['Ginger Lemon Spice', 'Earl Grey / English Breakfast', 'Pure Peppermint', 'Green Tea']
    }
  },
  {
    id: 'crisp-chilled-juices',
    category: 'beverages',
    name: 'Crisp Chilled Fruit Juices',
    price: 3.25,
    description: 'Refreshing chilled 100% fruit juices. Perfect companion to your morning eggs or midday sandwiches.',
    image: '/images/breakfast-platter.jpg',
    popular: false,
    badge: '100% Chilled',
    tags: ['Vitamin Rich', 'Cold & Refreshing'],
    options: {
      flavor: ['Florida Orange Juice', 'Crisp Apple Juice', 'Tropical Mango Guava']
    }
  }
];
