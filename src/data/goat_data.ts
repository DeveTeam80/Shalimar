// Define the structure for a single goat's statistics
export interface GoatStats {
  Height?: string;
  Weight?: string;
  'Ear Length'?: string;
  Age?: string;
  Acquired?: string;
  Born?: string;
  'Birth Weight'?: string;
  Teeth?: string;
  Bloodline?: string;
  Breed?: string;
  Quality?: string;
}

// Define the structure for a goat's lineage
export interface GoatLineage {
  Sire: string | null;
  Dam: string | null;
  Offspring: string[];
}

// Define the main interface for a Goat object
export interface Goat {
  id: string;
  name: string;
  gender: 'King' | 'Queen';
  mainImage: string;
  description: string;
  stats: GoatStats;
  lineage: GoatLineage;
  galleryImages: string[];
  isFeatured?: boolean; // <-- Added this property
}

// Create and export the array of all goat data
const allGoats: Goat[] = [
  {
    id: "legend",
    name: "Legend",
    gender: "King",
    mainImage: "/assets/img/goats/goat1.jpg",
    description: "The foundation of our farm, Legend is a majestic goat known for his extraordinary length and powerful genetics. He is the father of many of our champions.",
    stats: {
      Height: "42 inches",
      Weight: "148 kgs",
      'Ear Length': "23 inches",
      Age: "4 years",
    },
    lineage: {
      Sire: null,
      Dam: null,
      Offspring: ["Sultanehind", "Daughter Of Legend"],
    },
    galleryImages: [
      "/assets/img/goats/legend-gallery-1.jpg",
      "/assets/img/goats/legend-gallery-2.jpg",
    ],
    isFeatured: true, // <-- Featured Goat
  },
  {
    id: "sultanehind",
    name: "Sultan-e-Hind",
    gender: "King",
    mainImage: "/assets/img/goats/goat5.jpg",
    description: "Purchased on June 14, 2022, Sultanehind is a magnificent son of the legendary Legend. He is known for his unique horns, extraordinary length, and powerful presence.",
    stats: {
      Height: "43 inches",
      Weight: "145 kgs",
      'Ear Length': "22 inches",
      Acquired: "June 14, 2022",
    },
    lineage: {
      Sire: "Legend",
      Dam: "Mother India",
      Offspring: ["Sher E hind", "Gazi", "Chota Sultan", "Sikander", "Kamori", "Aryan", "Lion"],
    },
    galleryImages: [
      "/assets/img/goats/sultanehind-gallery-1.jpg",
      "/assets/img/goats/sultanehind-gallery-2.jpg",
      "/assets/img/goats/sultanehind-gallery-3.jpg",
    ],
    isFeatured: true, // <-- Featured Goat
  },
  {
    id: "sher-e-hind",
    name: "Sher-E-hind",
    gender: "King",
    mainImage: "/assets/img/goats/sher-e-hind-main.jpg",
    description: "A new purchase in October 2025, Sher E hind is a promising young son of Sultanehind, showcasing similar major features and a unique pinkish blend in his coat.",
    stats: {
      Height: "42 inches",
      Weight: "21 kgs",
      'Ear Length': "3 inches",
      Acquired: "October 2025",
    },
    lineage: {
      Sire: "Sultanehind",
      Dam: null,
      Offspring: [],
    },
    galleryImages: [],
  },
  {
    id: "gazi",
    name: "Gazi",
    gender: "King",
    mainImage: "/assets/img/goats/goat2.jpg",
    description: "Bred right here at Shalimar, Gazi is a stunning 'Sultan Lookalike' with a beautiful brown and white coat and extraordinary length.",
    stats: {
      Height: "43 inches",
      Weight: "100 kgs",
      'Ear Length': "24 inches",
      Age: "2 years",
    },
    lineage: {
      Sire: "Sultanehind",
      Dam: null,
      Offspring: [],
    },
    galleryImages: [],
    isFeatured: true, // <-- Featured Goat
  },
  {
    id: "chota-sultan",
    name: "Chota Sultan",
    gender: "King",
    mainImage: "/assets/img/goats/chota-sultan-main.jpg",
    description: "With a dominating Roman nose and powerful facial features, Chota Sultan is another proud son of Sultanehind that commands attention.",
    stats: {
      Height: "41 inches",
      Weight: "110 kgs",
      'Ear Length': "22 inches",
      Age: "3 years",
    },
    lineage: {
      Sire: "Sultanehind",
      Dam: null,
      Offspring: [],
    },
    galleryImages: [],
  },
  {
    id: "jr-legend",
    name: "Jr. Legend",
    gender: "King",
    mainImage: "/assets/img/goats/jr-legend-main.jpg",
    description: "Following in the footsteps of his namesake, Jr. Legend is a strong and well-built buck.",
    stats: {
      Height: "40 inches",
      Weight: "95 kgs",
      'Ear Length': "21 inches",
    },
    lineage: {
      Sire: "Legend",
      Dam: null,
      Offspring: [],
    },
    galleryImages: [],
  },
  {
    id: "sikander",
    name: "Sikander",
    gender: "King",
    mainImage: "/assets/img/goats/sikander-main.jpg",
    description: "Sikander has a 'terror look' with distinctive horns and facial features resembling a pure Kota. He is currently recovering from a leg injury.",
    stats: {
      Height: "42 inches",
      Weight: "115 kgs",
      'Ear Length': "22 inches",
      Age: "4 years",
    },
    lineage: {
      Sire: "Sultanehind",
      Dam: null,
      Offspring: [],
    },
    galleryImages: [],
  },
  {
    id: "kamori",
    name: "Kamori",
    gender: "King",
    mainImage: "/assets/img/goats/kamori-main.jpg",
    description: "Born with the longest ears on the farm, Kamori has a stunning full brown coat resembling the famous Kamori breed of Pakistan.",
    stats: {
      Height: "42 inches",
      Weight: "85 kgs",
      'Ear Length': "26 inches",
      Born: "January 22, 2024",
      'Birth Weight': "4.7 kg",
    },
    lineage: {
      Sire: "Sultanehind",
      Dam: "Daughter Of Legend",
      Offspring: [],
    },
    galleryImages: [],
  },
  {
    id: "aryan",
    name: "Aryan",
    gender: "King",
    mainImage: "/assets/img/goats/aryan-main.jpg",
    description: "A young buck with a striking black and white body color.",
    stats: {
      Weight: "80 kgs",
      'Ear Length': "21 inches",
      Teeth: "4",
      Born: "January 18, 2024",
      'Birth Weight': "4.3 kg",
    },
    lineage: {
      Sire: "Sultanehind",
      Dam: null,
      Offspring: [],
    },
    galleryImages: [],
  },
  {
    id: "lion",
    name: "Lion",
    gender: "King",
    mainImage: "/assets/img/goats/lion-main.jpg",
    description: "A promising young male with a handsome brown and white skin tone.",
    stats: {
      Weight: "80 kgs",
      'Ear Length': "21 inches",
      Teeth: "4",
      Born: "March 23, 2024",
      'Birth Weight': "4.5 kg",
    },
    lineage: {
      Sire: "Sultanehind",
      Dam: null,
      Offspring: [],
    },
    galleryImages: [],
  },
  {
    id: "black-kamori",
    name: "Black Kamori",
    gender: "Queen",
    mainImage: "/assets/img/goats/black-kamori-main.jpg",
    description: "The matriarch of our farm, Black Kamori represents one of the oldest and purest bloodline Kota females in all of India.",
    stats: {
      Age: "7 years",
      Bloodline: "Pure Kota",
    },
    lineage: {
      Sire: null,
      Dam: null,
      Offspring: [],
    },
    galleryImages: [],
  },
  {
    id: "daughter-of-legend",
    name: "Daughter Of Legend",
    gender: "Queen",
    mainImage: "/assets/img/goats/goat3.jpg",
    description: "A true queen with extraordinary ears and facial features of a pure Kota breed. Her head and facial length are so pronounced they are normally only found in males.",
    stats: {
      Breed: "Pure Kota",
    },
    lineage: {
      Sire: "Legend",
      Dam: null,
      Offspring: ["Kamori"],
    },
    galleryImages: [],
    isFeatured: true, // <-- Featured Goat
  },
  {
    id: "khala",
    name: "Khala",
    gender: "Queen",
    mainImage: "/assets/img/goats/goat4.jpg",
    description: "An important part of our breeding program at Shalimar farms.",
    stats: {},
    lineage: {
      Sire: null,
      Dam: null,
      Offspring: [],
    },
    galleryImages: [],
  },
  {
    id: "mother-india",
    name: "Mother India",
    gender: "Queen",
    mainImage: "/assets/img/goats/mother-india-main.jpg",
    description: "The mother of Sultan-e-Hind and one of the rarest quality Kota females in India. Her genetic legacy is invaluable to our farm.",
    stats: {
      Age: "8 years",
      Quality: "Rarest Grade",
    },
    lineage: {
      Sire: null,
      Dam: null,
      Offspring: ["Sultanehind"],
    },
    galleryImages: [],
    isFeatured: true, // <-- Featured Goat
  },
];

export default allGoats;