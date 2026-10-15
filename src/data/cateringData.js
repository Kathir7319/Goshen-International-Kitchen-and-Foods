// Catering Modalities and Package Data based on Official Blueprint

export const CATERING_MODALITIES = [
  {
    id: 'corporate',
    title: 'Office & Corporate Lunches',
    subtitle: 'Tailored for RTP Tech Hubs & Professional Gatherings',
    tag: 'Corporate Standard',
    basePricePerPerson: 16,
    minGuests: 10,
    description: 'Easily portioned platters featuring our premium sandwich collections, house soups, and customizable chicken dishes, packaged beautifully for professional delivery.',
    features: [
      'Individually labeled or buffet-style gourmet sandwich platters',
      'Warm kettles of scratch-made soups with crusty bread bowls',
      'Seasoned continental chicken platters with fresh garden sides',
      'Disposable cutlery, napkins, serving tongs, and heating trays included',
      'Punctual on-time delivery across Morrisville, Cary, RTP, Raleigh & Durham'
    ],
    recommendedFor: 'Boardroom lunches, team sprints, training seminars, client meetings'
  },
  {
    id: 'celebrations',
    title: 'Cultural & Festive Celebrations',
    subtitle: 'Heartfelt Heritage Feasts for Families & Communities',
    tag: 'Heritage & Flavor',
    basePricePerPerson: 22,
    minGuests: 15,
    description: 'Large-format trays of our international specialties, including rich traditional vegetable stews, large batches of golden Naija Buns, and specialty meats.',
    features: [
      'Large chafing trays of authentic Efo Riro (Vegetable Stew) with assorted meats',
      'Party-sized wooden crates of piping-hot, golden Naija Buns',
      'Crispy seasoned continental chicken, jollof-style spiced rice & sweet plantains',
      'Custom spice calibration (from mild family-friendly to traditional hot)',
      'Generous hospitality portions designed to leave every guest fully satisfied'
    ],
    recommendedFor: 'Family reunions, birthday bashes, baby/bridal showers, religious celebrations'
  },
  {
    id: 'buffet',
    title: 'Custom Buffet Configurations',
    subtitle: 'Bespoke Cross-Continental Menus with Our Head Chef',
    tag: 'Executive Bespoke',
    basePricePerPerson: 28,
    minGuests: 25,
    description: "Work side-by-side with our head chef to map out a unique cross-continental menu that perfectly satisfies your guests' specific dietary needs.",
    features: [
      'Direct menu consultation with Goshen head culinary team',
      'Seamless fusion of American breakfast/lunch classics and authentic West African favorites',
      'Comprehensive dietary accommodation: Halal, Vegetarian, Gluten-Free, Vegan options',
      'Full setup support with chafing stands, sternos, linens, and presentation ware',
      'Optional on-site kitchen service attendants for seamless replenishment'
    ],
    recommendedFor: 'Company galas, milestone weddings, church banquets, large conferences'
  }
];

export const CATERING_FAQS = [
  {
    q: 'How far in advance do we need to place our catering order?',
    a: 'For corporate luncheons under 40 people, 24 to 48 hours notice is ideal. For large festive trays or custom buffet setups (50+ guests), we recommend booking 3 to 5 business days in advance to secure chef prep and delivery time.'
  },
  {
    q: 'Do you deliver to Research Triangle Park (RTP) and surrounding towns?',
    a: 'Yes! We deliver across Morrisville, RTP, Cary, Durham, Apex, and West Raleigh. We ensure hot items arrive steaming and fresh.'
  },
  {
    q: 'Can we accommodate dietary restrictions (Halal, Gluten-Free, Vegan)?',
    a: 'Absolutely. We offer certified Halal poultry choices, vegetarian vegetable stews, gluten-conscious plantain sides, and dairy-free options.'
  },
  {
    q: 'Can we include a large order of authentic Naija Buns for dessert or coffee break?',
    a: 'Yes! Our Naija Buns are our most requested catering add-on. We prepare them fresh the morning of your event in trays of 25, 50, or 100.'
  }
];
