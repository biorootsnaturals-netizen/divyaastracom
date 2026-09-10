export type ProductCategory =
  | 'pooja-essentials'
  | 'idols-murthy'
  | 'crystals-stones'
  | 'malas-accessories'
  | 'heritage-vault'

export interface Product {
  id: number
  name: string
  image: string
  description: string
  shortDescription: string
  category: ProductCategory
  price: number
  originalPrice?: number
  badge?: string
  badgeColor?: string
  unit: string
}

const products: Array<Product> = [
  {
    id: 2,
    name: 'Rudraksha Mala — 108',
    image: '/images/rudraksha-mala.jpg',
    description: '5-mukhi certified Nepali Rudraksha. Energised by our senior Pandits with Shiva Panchakshara mantra. Wear for health, peace, and divine protection.',
    shortDescription: '5-mukhi certified Nepali Rudraksha. Energised by our senior Pandits with Shiva Panchakshara mantra.',
    category: 'malas-accessories',
    price: 1349.7,
    originalPrice: 4499,
    badge: '70% OFF',
    badgeColor: '#2D5016',
    unit: 'mala',
  },
  {
    id: 9,
    name: 'Tulsi Mala — 108',
    image: '/images/tulsi-mala.jpg',
    description: 'Sacred Tulsi wood japa mala. Hand-crafted for Vishnu bhakti and daily mantra chanting. Most auspicious for devotees.',
    shortDescription: 'Sacred Tulsi wood japa mala. Hand-crafted for Vishnu bhakti and daily mantra chanting.',
    category: 'malas-accessories',
    price: 649,
    originalPrice: 999,
    badge: '35% OFF',
    badgeColor: '#2D5016',
    unit: 'mala',
  },
  {
    id: 25,
    name: 'Sphatik Mala — 108',
    image: '/images/sphatik-mala.jpg',
    description: 'Natural Himalayan crystal quartz mala. Amplifies spiritual energy and aids meditation. The purest of all malas.',
    shortDescription: 'Natural Himalayan crystal quartz mala. Amplifies spiritual energy and aids meditation.',
    category: 'malas-accessories',
    price: 6999,
    badge: 'Premium',
    unit: 'mala',
  },
  {
    id: 26,
    name: 'Tiger Eye Bracelet',
    image: '/images/tiger-eye.jpg',
    description: 'Golden brown chatoyant stone for courage and protection. Boosts confidence and willpower. Shield of the warrior.',
    shortDescription: 'Golden brown chatoyant stone for courage and protection. Boosts confidence and willpower.',
    category: 'crystals-stones',
    price: 1299,
    originalPrice: 1999,
    badge: '35% OFF',
    badgeColor: '#D4AF37',
    unit: 'piece',
  },
  {
    id: 27,
    name: 'Amethyst Geode',
    image: '/images/amethyst.jpg',
    description: 'Natural purple crystal cluster for spiritual protection and intuition. Calms the mind. Museum-grade specimen.',
    shortDescription: 'Natural purple crystal cluster for spiritual protection and intuition. Calms the mind.',
    category: 'crystals-stones',
    price: 3499,
    originalPrice: 4999,
    badge: '30% OFF',
    badgeColor: '#2D5016',
    unit: 'piece',
  },
  {
    id: 28,
    name: 'Rose Quartz Sphere',
    image: '/images/rose-quartz.jpg',
    description: 'Pink love stone on brass stand. Opens heart chakra and attracts unconditional love. A gift of divine grace.',
    shortDescription: 'Pink love stone on brass stand. Opens heart chakra and attracts unconditional love.',
    category: 'crystals-stones',
    price: 2099,
    originalPrice: 3499,
    badge: '40% OFF',
    badgeColor: '#D4AF37',
    unit: 'piece',
  },
  {
    id: 29,
    name: 'Black Tourmaline',
    image: '/images/black-tourmaline.jpg',
    description: 'Powerful protection stone against negative energy. Grounds and shields from evil eye. The guardian of sacred space.',
    shortDescription: 'Powerful protection stone against negative energy. Grounds and shields from evil eye.',
    category: 'crystals-stones',
    price: 1599,
    badge: 'Best Seller',
    unit: 'piece',
  },
  {
    id: 30,
    name: 'Citrine Crystal',
    image: '/images/citrine.jpg',
    description: 'Golden prosperity stone for wealth and abundance. Activates solar plexus chakra. Manifests your desires.',
    shortDescription: 'Golden prosperity stone for wealth and abundance. Activates solar plexus chakra.',
    category: 'crystals-stones',
    price: 1499,
    originalPrice: 2999,
    badge: '50% OFF',
    badgeColor: '#D4AF37',
    unit: 'piece',
  },
  {
    id: 31,
    name: 'Lapis Lazuli',
    image: '/images/lapis-lazuli.jpg',
    description: 'Royal blue wisdom stone with gold pyrite flecks. Opens third eye for spiritual insight. Stone of kings and seekers.',
    shortDescription: 'Royal blue wisdom stone with gold pyrite flecks. Opens third eye for spiritual insight.',
    category: 'crystals-stones',
    price: 2999,
    originalPrice: 3999,
    badge: '25% OFF',
    badgeColor: '#2D5016',
    unit: 'piece',
  },
  {
    id: 32,
    name: 'Green Jade Pendant',
    image: '/images/green-jade.jpg',
    description: 'Lucky prosperity jade Buddha on red cord. Brings harmony, luck and good fortune. The stone of heaven.',
    shortDescription: 'Lucky prosperity jade Buddha on red cord. Brings harmony, luck and good fortune.',
    category: 'crystals-stones',
    price: 1624,
    originalPrice: 2499,
    badge: '35% OFF',
    badgeColor: '#D4AF37',
    unit: 'piece',
  },
  {
    id: 33,
    name: 'Moonstone Ring',
    image: '/images/moonstone.jpg',
    description: 'Iridescent rainbow moonstone in silver. Enhances intuition and feminine energy. Wear the light of the moon.',
    shortDescription: 'Iridescent rainbow moonstone in silver. Enhances intuition and feminine energy.',
    category: 'crystals-stones',
    price: 4499,
    badge: 'New',
    unit: 'piece',
  },
  {
    id: 38,
    name: 'Red Coral Bracelet',
    image: '/images/coral-moonga.jpg',
    description: 'Natural moonga for Mars planet. Boosts energy, courage and overcomes enemies. Astrologically powerful gemstone.',
    shortDescription: 'Natural moonga for Mars planet. Boosts energy, courage and overcomes enemies.',
    category: 'crystals-stones',
    price: 4199,
    originalPrice: 5999,
    badge: '30% OFF',
    badgeColor: '#D4AF37',
    unit: 'piece',
  },
]

export default products
