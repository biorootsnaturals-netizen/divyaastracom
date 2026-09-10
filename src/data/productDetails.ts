/**
 * Rich product-detail content, keyed by product id.
 *
 * The base catalogue in `products.ts` (used by the home page / Sacred Store
 * cards) is intentionally untouched. Any product that has an entry here gets
 * the extended detail presentation on /products/$productId; every other
 * product keeps the original detail layout unchanged.
 */

export type BenefitIcon =
  | 'meditation'
  | 'japa'
  | 'peace'
  | 'protection'
  | 'wear'

export interface DetailGalleryImage {
  src: string
  alt: string
}

export interface DetailBenefit {
  icon: BenefitIcon
  title: string
  body: string
}

export interface DetailPoint {
  title: string
  body: string
}

export interface DetailSpec {
  label: string
  value: string
}

export interface DetailFaq {
  question: string
  answer: string
}

export interface ProductDetail {
  gallery: Array<DetailGalleryImage>
  sacredNotice: {
    glyph: string
    primary: string
    secondary: string
    body: string
  }
  subtitle: string
  supportingLine: string
  rating: number
  ratingLabel: string
  soldLabel: string
  /** Pre-formatted so the displayed price is exact. */
  price: string
  priceUnit: string
  originalPrice: string
  discountLabel: string
  shortDescription: string
  benefits: Array<DetailBenefit>
  about: Array<string>
  why: Array<DetailPoint>
  specs: Array<DetailSpec>
  howToUse: Array<string>
  care: Array<string>
  included: Array<string>
  delivery: Array<DetailSpec>
  replacement: Array<string>
  faqs: Array<DetailFaq>
}

/** Rudraksha Mala — 108 (product id 2) */
const rudrakshaMala: ProductDetail = {
  gallery: [
    {
      src: '/images/rudraksha-mala-altar.jpg',
      alt: 'Rudraksha Mala — 108 with Divyaastra packaging and authenticity card',
    },
    {
      src: '/images/rudraksha-mala-in-hand.jpg',
      alt: 'Rudraksha Mala — 108 held in hand during mantra japa',
    },
    {
      src: '/images/rudraksha-mala.jpg',
      alt: 'Rudraksha Mala — 108 coiled, showing the 5-mukhi beads and guru bead',
    },
    {
      src: '/images/rudraksha-mala-ghat.jpg',
      alt: 'Rudraksha Mala — 108 resting on a temple ghat at sunrise',
    },
  ],
  sacredNotice: {
    glyph: '🕉️',
    primary: 'PRĀṆA PRATIṢṬHIT',
    secondary: 'SACREDLY ENERGISED',
    body: 'Every DIVYAASTRA product is consecrated by our Panditji through sacred Vedic rituals and mantras, prepared with devotion for you and your family.',
  },
  subtitle: '5-Mukhi Certified Nepali Rudraksha',
  supportingLine:
    'Energised by our senior Pandits with the Shiva Panchakshara Mantra.',
  rating: 4.5,
  ratingLabel: '4.5',
  soldLabel: '1,200+ Sold',
  price: '₹1,349.70',
  priceUnit: 'Mala',
  originalPrice: '₹4,499',
  discountLabel: '70% OFF',
  shortDescription:
    'A sacred 108-bead mala created for meditation, mantra japa, spiritual practice and daily wear.',
  benefits: [
    {
      icon: 'meditation',
      title: 'Meditation',
      body: 'Supports a focused spiritual practice.',
    },
    {
      icon: 'japa',
      title: 'Mantra Japa',
      body: 'Traditional 108-bead format for daily chanting.',
    },
    {
      icon: 'peace',
      title: 'Inner Peace',
      body: 'Encourages a calm and consistent spiritual routine.',
    },
    {
      icon: 'protection',
      title: 'Divine Protection',
      body: 'Traditionally associated with spiritual protection.',
    },
    {
      icon: 'wear',
      title: 'Daily Wear',
      body: 'Designed for regular devotional use.',
    },
  ],
  about: [
    'Crafted with 5-Mukhi Nepali Rudraksha beads, this traditional 108-bead mala is energised through Shiva Panchakshara Mantra recitation.',
    'It can be worn around the neck or used during meditation, prayer and mantra japa.',
  ],
  why: [
    {
      title: 'Pre-Energised',
      body: 'Energised through Shiva Panchakshara Mantra recitation by Divyaastra Pandits.',
    },
    {
      title: 'Nepali Rudraksha',
      body: 'Sourced as genuine 5-Mukhi Nepali Rudraksha beads.',
    },
    {
      title: 'Carefully Selected',
      body: 'Each bead is inspected and selected before being prepared as a mala.',
    },
    {
      title: 'Premium Presentation',
      body: 'Packed carefully with a protective pouch and authenticity documentation.',
    },
    {
      title: 'Sacred Purpose',
      body: 'Every purchase supports the wider Divyaastra spiritual mission.',
    },
  ],
  specs: [
    { label: 'Material', value: '5-Mukhi Nepali Rudraksha' },
    { label: 'Beads', value: '108 + 1 Guru / Sumeru Bead' },
    { label: 'Bead Size', value: '6–7 mm' },
    { label: 'Length', value: 'Approx. 34 inches' },
    { label: 'Weight', value: 'Approx. 25–30 g' },
    { label: 'Origin', value: 'Nepal' },
    { label: 'Energisation', value: 'Shiva Panchakshara Mantra' },
    {
      label: 'Use',
      value: 'Meditation, mantra japa, prayer and devotional wear',
    },
  ],
  howToUse: [
    'Wear around the neck or use during japa.',
    'Traditionally, one bead is moved with each mantra repetition. Complete one round of 108 beads before returning to the Guru bead.',
    'For continued chanting, reverse direction after reaching the Guru bead rather than crossing over it.',
  ],
  care: [
    'Keep the mala away from prolonged water exposure, perfume and harsh chemicals.',
    'Store it in a dry place when not in use.',
    'Gently wipe with a soft cloth when needed.',
    'With proper care, the mala can be preserved for many years.',
  ],
  included: [
    '1 × Rudraksha Mala — 108 Beads',
    '1 × Protective Cotton Pouch',
    '1 × Authenticity & Energisation Certificate',
    '1 × Care Card',
  ],
  delivery: [{ label: 'India Delivery', value: '5–7 Business Days' }],
  replacement: [
    'Replacement available within 7 days for transit damage or manufacturing defects.',
    'For damaged deliveries, retain the unboxing proof.',
  ],
  faqs: [
    {
      question: 'Is the Rudraksha genuine?',
      answer:
        'This mala is made with 5-Mukhi Nepali Rudraksha beads selected for the product.',
    },
    {
      question: 'Is the mala pre-energised?',
      answer:
        'Yes. The mala is energised through Shiva Panchakshara Mantra recitation by Divyaastra Pandits.',
    },
    {
      question: 'Can I wear it every day?',
      answer:
        'Yes. It can be worn for regular devotional use, meditation and mantra practice.',
    },
    {
      question: 'Can I wear it while bathing or swimming?',
      answer:
        'It is recommended to remove the mala before bathing or swimming and avoid prolonged exposure to water.',
    },
    {
      question: 'Can I request a different bead size or thread colour?',
      answer:
        'For custom requirements, contact Divyaastra through the available contact/WhatsApp option.',
    },
  ],
}

const productDetails: Record<number, ProductDetail> = {
  2: rudrakshaMala,
}

export default productDetails
