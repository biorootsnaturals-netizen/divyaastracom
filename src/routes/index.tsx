import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useMemo, useState } from 'react'
import products, { type Product, type ProductCategory } from '@/data/products'

export const Route = createFileRoute('/')({
  component: DivyaastraHome,
})

type ProductFilter = 'all-products' | ProductCategory

const productFilters: Array<{
  id: ProductFilter
  label: string
  description: string
}> = [
  {
    id: 'all-products',
    label: 'All Products',
    description: 'The entire Divyaastra collection, purified for daily worship, gifting and patronage.',
  },
  {
    id: 'pooja-essentials',
    label: 'Pooja Essentials',
    description: 'Diyas, ghee, incense, akshat, kalash and ritual vessels for daily seva.',
  },
  {
    id: 'idols-murthy',
    label: 'Idols & Murthy',
    description: 'Ganesha, Lakshmi, Shivlings and Shaligram stones for the home mandir.',
  },
  {
    id: 'crystals-stones',
    label: 'Crystals & Stones',
    description: 'Black Tourmaline, Amethyst, Citrine, Moonstone and astrological gemstones.',
  },
  {
    id: 'malas-accessories',
    label: 'Malas & Accessories',
    description: 'Rudraksha, Tulsi, Sphatik and Gomti Chakra pieces for japa and protection.',
  },
  {
    id: 'heritage-vault',
    label: 'Heritage Vault',
    description: 'Premium, museum-grade yantras and rare sacred acquisitions for legacy devotees.',
  },
]

function DivyaastraHome() {
  const [activeFilter, setActiveFilter] = useState<ProductFilter>('all-products')

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.07 }
    )
    reveals.forEach((el) => obs.observe(el))

    const handleScroll = () => {
      const y = window.scrollY
      const heroImg = document.querySelector('.hero-temple-img img') as HTMLImageElement
      if (heroImg && y < window.innerHeight) {
        heroImg.style.transform = `scale(1.02) translateY(${y * 0.08}px)`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      obs.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const activeFilterDetails = productFilters.find((filter) => filter.id === activeFilter) ?? productFilters[0]
  const filteredProducts = useMemo(
    () => activeFilter === 'all-products' ? products : products.filter((product) => product.category === activeFilter),
    [activeFilter]
  )

  return (
    <>
      {/* NAV */}
      <nav>
        <a href="#hero" className="nav-brand">
          <span className="nav-brand-text">DIVYAASTRA</span>
        </a>
        <ul className="nav-links">
          <li><a href="#products">Sacred Store</a></li>
          <li><a href="#mission">Mission</a></li>
          <li><a href="#food-mission">Annadaan</a></li>
          <li><a href="#vault">Heritage Vault</a></li>
          <li><a href="#foundation">Foundation</a></li>
        </ul>
        <button className="nav-cta">Support Temple</button>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-bg-pattern" />
        <div className="hero-eyebrow">ॐ — The World's Greatest Spiritual Sanctuary</div>
        <span className="hero-title">DIVYAASTRA</span>
        <div className="hero-sub-title">Restoring Ancient Wisdom • Feeding a Lakh Daily • Building an Eternal Legacy</div>
        <p className="hero-tagline">
          Where the eternal flame of Dharma meets the modern world. Sacred products, consecrated by tradition,
          delivered to your door. Every purchase builds the world's greatest temple to Mahadev.
        </p>

        <div className="hero-stats-bar">
          <div className="hstat">
            <span className="hstat-num">501 ft</span>
            <span className="hstat-label">Temple Height</span>
          </div>
          <div className="hstat">
            <span className="hstat-num">1,00,000</span>
            <span className="hstat-label">Meals Daily</span>
          </div>
          <div className="hstat">
            <span className="hstat-num">108</span>
            <span className="hstat-label">Sacred Products</span>
          </div>
          <div className="hstat">
            <span className="hstat-num">5,000</span>
            <span className="hstat-label">Animals Cared</span>
          </div>
          <div className="hstat">
            <span className="hstat-num">500 Beds</span>
            <span className="hstat-label">Free Hospital</span>
          </div>
        </div>

        <div className="hero-btns">
          <a href="#products" className="btn-green">Enter the Sanctuary</a>
          <a href="#foundation" className="btn-gold-outline">View Investor Deck</a>
        </div>
      </section>

      {/* VISION SHOWCASE */}
      <section className="vision-showcase">
        <div className="vision-showcase-frame reveal">
          <video
            src="/videos/divyaastra-vision-anime.mp4"
            poster="/images/temple-architecture.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="Divyaastra — The World's Greatest Spiritual Sanctuary"
          >
            <img
              src="/images/temple-architecture.jpg"
              alt="Divyaastra — The World's Greatest Spiritual Sanctuary"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </video>
        </div>
        <p className="vision-showcase-caption reveal">
          New Delhi–Jaipur Expressway, India · Est. The Divine Vision 2026
        </p>
      </section>

      <div className="gold-divider" />
      <div className="section-ornament">✦ &nbsp; The Sacred Store &nbsp; ✦</div>
      <div className="gold-divider" />

      {/* FEATURED PRODUCTS */}
      <section id="products" className="section" style={{ paddingTop: '60px' }}>
        <div className="products-inner">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <div className="section-eyebrow reveal">Premium Devotion</div>
              <h2 className="section-title reveal title-green">Divyaastra Sacred Store</h2>
              <p className="section-body reveal">Unadulterated, sustainably sourced, energised. Every purchase directly funds the Mahadev Temple construction.</p>
            </div>
            <a href="#foundation" className="btn-green reveal" style={{ alignSelf: 'flex-end' }}>Support Temple Project</a>
          </div>
          <div className="product-filter-panel reveal">
            <div className="product-filter-copy">
              <span className="product-filter-kicker">Product Categories</span>
              <p>{activeFilterDetails.description}</p>
            </div>
            <div className="product-filter-controls" aria-label="Product categories">
              {productFilters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  className={`product-filter-btn${activeFilter === filter.id ? ' active' : ''}`}
                  onClick={() => setActiveFilter(filter.id)}
                  aria-pressed={activeFilter === filter.id}
                >
                  {filter.label}
                  <span>
                    {filter.id === 'all-products'
                      ? products.length
                      : products.filter((product) => product.category === filter.id).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* MISSION */}
      <section id="mission" className="section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-eyebrow reveal" style={{ textAlign: 'center' }}>Our Sacred Purpose</div>
          <h2 className="section-title reveal" style={{ textAlign: 'center', margin: '0 auto 16px' }}>
            The Divyaastra Mission
          </h2>
          <p className="section-body reveal" style={{ margin: '0 auto 0', textAlign: 'center' }}>
            We are not merely a store. We are a movement — to restore Dharma, rebuild ancient glory, and serve every soul.
          </p>
          <div className="mission-grid">
            <div className="mission-card reveal">
              <span className="mission-icon">🕉️</span>
              <div className="mission-title">World's Tallest Shiva Temple</div>
              <p className="mission-body">A 501-foot monument to Mahadev — the tallest temple ever built. Housing all 12 Jyotirlingas, sacred to every Hindu on earth. Your purchase builds this eternal legacy.</p>
            </div>
            <div className="mission-card reveal">
              <span className="mission-icon">🍛</span>
              <div className="mission-title">Annadaan — Feed the World</div>
              <p className="mission-body">1,00,000 free meals served daily, 365 days a year. No pilgrim, no student, no homeless soul goes hungry at Divyaastra. This is not charity. This is Dharma.</p>
            </div>
            <div className="mission-card reveal">
              <span className="mission-icon">🐄</span>
              <div className="mission-title">All Creatures, All Equal</div>
              <p className="mission-body">5,000 cows. Free veterinary care for all animals. India's largest animal welfare campus — because in the eyes of Mahadev, no creature is lesser.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* INTERIOR */}
      <section id="interior" style={{ padding: '100px 70px' }}>
        <div className="interior-inner">
          <div>
            <div className="section-eyebrow reveal">Temple Architecture</div>
            <h2 className="section-title reveal title-green">Shri Mahadev<br />Shiv Parvati Dham</h2>
            <p className="section-body reveal">The architectural vision of the century. Rising 501 feet above the sacred earth, housing all 12 Jyotirlingas, with a Kailash summit visible from 100 kilometres. Designed to stand for 10,000 years.</p>
            <div className="interior-stats">
              <div className="istat reveal">
                <span className="istat-num">501 ft</span>
                <span className="istat-label">Towering Height</span>
              </div>
              <div className="istat reveal">
                <span className="istat-num">12</span>
                <span className="istat-label">Jyotirlingas</span>
              </div>
              <div className="istat reveal">
                <span className="istat-num">108</span>
                <span className="istat-label">Shrines Inside</span>
              </div>
              <div className="istat reveal">
                <span className="istat-num">10,000</span>
                <span className="istat-label">Year Legacy</span>
              </div>
            </div>
          </div>
          <div className="interior-visual reveal">
            <img
              src="/images/temple-architecture.jpg"
              alt="Shri Mahadev Shiv Parvati Dham — 501 ft Temple Architecture"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <div className="gold-divider" />
      <div className="section-ornament">✦ &nbsp; Daily Sacred Service &nbsp; ✦</div>
      <div className="gold-divider" />

      {/* FOOD MISSION */}
      <section id="food-mission" className="section">
        <div className="food-inner">
          <div className="food-text">
            <div className="section-eyebrow reveal">Daily Sacred Service</div>
            <h2 className="section-title reveal" style={{ color: '#fff' }}>1,00,000 Meals.<br />Every. Single. Day.</h2>
            <p className="food-body reveal">
              The Divyaastra Annadaan Yagna is the world's largest daily free kitchen — serving hot, nutritious, freshly cooked meals to one lakh human beings every day without exception. Pilgrims, the homeless, students, elders, patients, and any soul that arrives hungry. This is not charity. This is Dharma.
            </p>
            <p className="food-body reveal">
              On the same sacred premises, our animal care sanctuary provides free food, shelter, and medical treatment for cows, dogs, birds, and all living beings — because in the eyes of Mahadev, no creature is lesser.
            </p>
            <div className="food-counters reveal">
              <div className="food-counter">
                <span className="food-counter-num">1,00,000</span>
                <span className="food-counter-label">Meals Served Daily</span>
              </div>
              <div className="food-counter">
                <span className="food-counter-num">3,65,00,000</span>
                <span className="food-counter-label">Meals Per Year</span>
              </div>
              <div className="food-counter">
                <span className="food-counter-num">5,000</span>
                <span className="food-counter-label">Animals Cared For</span>
              </div>
              <div className="food-counter">
                <span className="food-counter-num">500 Beds</span>
                <span className="food-counter-label">Free Hospital</span>
              </div>
            </div>
          </div>
          <div className="food-visual-side reveal">
            <div className="food-service-card">
              <span className="food-service-icon">🍛</span>
              <div>
                <div className="food-service-title">Bhandara Hall</div>
                <p className="food-service-desc">Seats 5,000 at a time. Pure vegetarian sattvic food cooked fresh in the world's largest temple kitchen. Running 365 days, rain or shine.</p>
              </div>
            </div>
            <div className="food-service-card">
              <span className="food-service-icon">🐄</span>
              <div>
                <div className="food-service-title">Goshala & Animal Sanctuary</div>
                <p className="food-service-desc">5,000 cows. Free vet care for all animals. Birds, dogs, every creature fed and treated — India's largest animal welfare campus.</p>
              </div>
            </div>
            <div className="food-service-card">
              <span className="food-service-icon">🏥</span>
              <div>
                <div className="food-service-title">Dhanvantari Free Hospital</div>
                <p className="food-service-desc">500-bed hospital with Ayurvedic and allopathic wings. All treatment free for pilgrims and the underprivileged. Staffed by 200 doctors and volunteers.</p>
              </div>
            </div>
            <div className="food-service-card">
              <span className="food-service-icon">🏠</span>
              <div>
                <div className="food-service-title">Pilgrim Residences</div>
                <p className="food-service-desc">3,000-room dharamshala providing free accommodation to pilgrims from all corners of the world. No one is turned away.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider" />
      <div className="section-ornament">✦ &nbsp; Sacred Heritage Vault &nbsp; ✦</div>
      <div className="gold-divider" />

      {/* VAULT */}
      <section id="vault" className="section" style={{ background: 'var(--off-white)' }}>
        <div className="vault-inner">
          <div>
            <div className="section-eyebrow reveal">Heritage Acquisitions</div>
            <h2 className="section-title reveal title-gold">The Divyaastra Vault</h2>
            <p className="section-body reveal">Museum-grade Vedic artifacts, consecrated Yantras, and heritage sacred objects. Every acquisition funds the eternal temple. For high-net-worth devotees seeking divine protection and legacy.</p>
          </div>
          <div className="vault-grid">
            <div className="vault-item reveal">
              <div className="vault-visual">🪬<span className="vault-provenance">11th Century · Authenticated</span></div>
              <div className="vault-content">
                <div className="vault-name">Shri Yantra of Mahakaal</div>
                <p className="vault-desc">Hand-engraved black tourmaline. Authenticated by the Archaeological Survey of India. Museum provenance documentation.</p>
                <div className="vault-price">₹12,00,000</div>
              </div>
            </div>
            <div className="vault-item reveal">
              <div className="vault-visual">🔱<span className="vault-provenance">Kashi Consecrated</span></div>
              <div className="vault-content">
                <div className="vault-name">Parad Shivling</div>
                <p className="vault-desc">Solidified mercury Shivling — the rarest of sacred objects. Energised at Kashi Vishwanath by senior Pandits.</p>
                <div className="vault-price">₹5,50,000</div>
              </div>
            </div>
            <div className="vault-item reveal">
              <div className="vault-visual">🌺<span className="vault-provenance">Bengal School · Rare</span></div>
              <div className="vault-content">
                <div className="vault-name">Radha Krishna Patta Chitra</div>
                <p className="vault-desc">12th generation Bengal master artisan on handmade silk. Museum provenance and certification of authenticity.</p>
                <div className="vault-price">₹3,80,000</div>
              </div>
            </div>

            <div className="vault-item reveal">
              <div className="vault-visual">🩸<span className="vault-provenance">Kamakhya Mahapeeth · Rarest</span></div>
              <div className="vault-content">
                <div className="vault-name">Kamakhya Mata Sindoor</div>
                <p className="vault-desc">Ambubachi-charged crimson sindoor from the Kamakhya Mahapeeth. The single rarest Tantric talisman — for love, dominion, and the breaking of malefic spells.</p>
                <div className="vault-price">₹11,000</div>
              </div>
            </div>
            <div className="vault-item reveal">
              <div className="vault-visual">⚡<span className="vault-provenance">Datia Peetham · Sealed</span></div>
              <div className="vault-content">
                <div className="vault-name">Bagalamukhi Yantra — Gold Plated</div>
                <p className="vault-desc">Pitambari Devi Yantra for victory in litigation, debate and rivalry. Consecrated for 21 nights at Pitambara Peeth, Datia.</p>
                <div className="vault-price">₹9,500</div>
              </div>
            </div>
            <div className="vault-item reveal">
              <div className="vault-visual">🪷<span className="vault-provenance">Mahalakshmi Tradition</span></div>
              <div className="vault-content">
                <div className="vault-name">Maa Lakshmi Silver Charan Paduka</div>
                <p className="vault-desc">Pure 99.9 silver footprints of Devi Mahalakshmi on red velvet. Daily abhishek invites the eternal flow of Shree into the home.</p>
                <div className="vault-price">₹7,200</div>
              </div>
            </div>
            <div className="vault-item reveal">
              <div className="vault-visual">🛕<span className="vault-provenance">Sankat Mochan Lineage</span></div>
              <div className="vault-content">
                <div className="vault-name">Sindoor-Charged Red Hanuman Idol</div>
                <p className="vault-desc">Ashtadhatu Veer Hanuman bathed in genuine sindoor, hand-blessed at Sankat Mochan Mandir, Kashi. The shield against every fear and obstacle.</p>
                <div className="vault-price">₹6,800</div>
              </div>
            </div>
            <div className="vault-item reveal">
              <div className="vault-visual">🔺<span className="vault-provenance">Vastu · 9-Plane Geometric</span></div>
              <div className="vault-content">
                <div className="vault-name">Nine-Layer Copper Vastu Pyramid</div>
                <p className="vault-desc">Nine-tier copper Maha Meru pyramid for Vastu doshas. Stabilises subtle currents in homes, offices and temples — a quiet engine of prosperity.</p>
                <div className="vault-price">₹2,400</div>
              </div>
            </div>
            <div className="vault-item reveal">
              <div className="vault-visual">🜍<span className="vault-provenance">Mahakaleshwar · Bhasma Aarti</span></div>
              <div className="vault-content">
                <div className="vault-name">Mahakaal Bhasma Locket</div>
                <p className="vault-desc">Sacred ash from the only Bhasma Aarti in the world, sealed in a sterling silver Trishul locket. The wearer walks under Mahakaal's gaze.</p>
                <div className="vault-price">₹3,900</div>
              </div>
            </div>
            <div className="vault-item reveal">
              <div className="vault-visual">💰<span className="vault-provenance">Ashtadhatu · Eight-Metal</span></div>
              <div className="vault-content">
                <div className="vault-name">Ashtadhatu Kuber Yantra</div>
                <p className="vault-desc">Hand-cast eight-metal Kuber Yantra in the traditional Banarasi foundry. Activates the northern wealth axis. For business owners and patriarchs.</p>
                <div className="vault-price">₹4,800</div>
              </div>
            </div>
            <div className="vault-item reveal">
              <div className="vault-visual">🔮<span className="vault-provenance">Himalayan Quartz · Solid</span></div>
              <div className="vault-content">
                <div className="vault-name">Sphatik Shree Yantra (Solid Crystal)</div>
                <p className="vault-desc">Sri Yantra carved from a single block of natural Himalayan quartz. The geometry of the goddess in living crystal — the most luminous Lakshmi tool.</p>
                <div className="vault-price">₹8,400</div>
              </div>
            </div>
            <div className="vault-item reveal">
              <div className="vault-visual">🪸<span className="vault-provenance">Italy Coral · Mars Charged</span></div>
              <div className="vault-content">
                <div className="vault-name">Red Coral Hanuman Locket</div>
                <p className="vault-desc">Untreated Italian moonga set in 22kt gold-plate. A double remedy — Hanuman bhakti and Mangal grah balance — for the warrior in pursuit.</p>
                <div className="vault-price">₹5,200</div>
              </div>
            </div>
            <div className="vault-item reveal">
              <div className="vault-visual">🐚<span className="vault-provenance">Dakshinavarti · Lakshmi Vibhuti</span></div>
              <div className="vault-content">
                <div className="vault-name">Dakshinavarti Shankh (Right-Spiral)</div>
                <p className="vault-desc">A natural right-spiralling conch — one in ten thousand. Gem-tested. The personal residence of Devi Mahalakshmi when worshipped daily.</p>
                <div className="vault-price">₹14,500</div>
              </div>
            </div>
            <div className="vault-item reveal">
              <div className="vault-visual">🥥<span className="vault-provenance">Ekakshi · Rarest Talisman</span></div>
              <div className="vault-content">
                <div className="vault-name">Ekakshi Nariyal (One-Eyed Coconut)</div>
                <p className="vault-desc">A genuine single-eyed coconut, sacred to Devi Mahalakshmi. Worshipped by ancient royal houses for unbroken wealth lineage. Authenticated specimen.</p>
                <div className="vault-price">₹9,800</div>
              </div>
            </div>
            <div className="vault-item reveal">
              <div className="vault-visual">✨<span className="vault-provenance">Diwali Mahurat · Charged</span></div>
              <div className="vault-content">
                <div className="vault-name">Mahalaxmi Kuber Dhan Varsha Set</div>
                <p className="vault-desc">Twin yantra set — Mahalakshmi and Kuber — energised together at Lakshmi Pujan Mahurat. The classical pairing for unstoppable cash flow.</p>
                <div className="vault-price">₹6,500</div>
              </div>
            </div>
            <div className="vault-item reveal">
              <div className="vault-visual">🔱<span className="vault-provenance">Shanidev · Saturn Charged</span></div>
              <div className="vault-content">
                <div className="vault-name">Black Horseshoe Ring — Kaal Sarp Dosh</div>
                <p className="vault-desc">Forged from the iron horseshoe of a black mare, sanctified at Shani Shingnapur. Quiets Kaal Sarp and Sade Sati. The veteran's remedy.</p>
                <div className="vault-price">₹2,200</div>
              </div>
            </div>
            <div className="vault-item reveal">
              <div className="vault-visual">🌑<span className="vault-provenance">Tarapeeth · Sealed</span></div>
              <div className="vault-content">
                <div className="vault-name">Maa Tara Bhasma Yantra</div>
                <p className="vault-desc">A Mahavidya yantra carrying the bhasma of Tarapeeth's eternal smashan dhuni. For seekers walking the Tantric path of fearless wisdom.</p>
                <div className="vault-price">₹7,800</div>
              </div>
            </div>
            <div className="vault-item reveal">
              <div className="vault-visual">🐢<span className="vault-provenance">Vastu · Direction Cure</span></div>
              <div className="vault-content">
                <div className="vault-name">Brass Vastu Tortoise on Water Plate</div>
                <p className="vault-desc">A heavy brass kachhua on a copper water plate — placed in the north it slows time, holds wealth, and steadies a household's fortune.</p>
                <div className="vault-price">₹1,800</div>
              </div>
            </div>
            <div className="vault-item reveal">
              <div className="vault-visual">🗿<span className="vault-provenance">Trimbakeshwar Sourced</span></div>
              <div className="vault-content">
                <div className="vault-name">Trimbakeshwar Black Stone Shivling</div>
                <p className="vault-desc">Dense black-stone Shivling from the Brahmagiri foothills near Trimbakeshwar Jyotirling. The ideal centerpiece for a serious daily Rudra abhishek.</p>
                <div className="vault-price">₹4,400</div>
              </div>
            </div>
            <div className="vault-item reveal">
              <div className="vault-visual">🦁<span className="vault-provenance">Kashi Bhairav Mandir</span></div>
              <div className="vault-content">
                <div className="vault-name">Kaal Bhairav Sterling Locket</div>
                <p className="vault-desc">Hand-engraved Kotwal of Kashi locket on black thread. Wear over the chest for protection from accidents, debts and unseen attack.</p>
                <div className="vault-price">₹3,200</div>
              </div>
            </div>
            <div className="vault-item reveal">
              <div className="vault-visual">🌰<span className="vault-provenance">Nepali Certified · 9 Mukhi</span></div>
              <div className="vault-content">
                <div className="vault-name">Nine-Mukhi Rudraksha (Rare)</div>
                <p className="vault-desc">A certified nine-faced Nepali Rudraksha — the bead of Maa Durga's nine Shaktis. Rarest beyond the five-mukhi. Worn by warriors and protectors.</p>
                <div className="vault-price">₹12,500</div>
              </div>
            </div>
            <div className="vault-item reveal">
              <div className="vault-visual">🍚<span className="vault-provenance">Kashi Tradition</span></div>
              <div className="vault-content">
                <div className="vault-name">Annapurna Pure Brass Murti</div>
                <p className="vault-desc">Devi of food and abundance — solid brass, Kashi-style. Placed in the kitchen, no plate ever leaves the home empty. A lineage offering.</p>
                <div className="vault-price">₹3,800</div>
              </div>
            </div>
            <div className="vault-item reveal">
              <div className="vault-visual">🎼<span className="vault-provenance">Crystal Carved · Vidya Shakti</span></div>
              <div className="vault-content">
                <div className="vault-name">Saraswati Sphatik Veena Idol</div>
                <p className="vault-desc">Devi Saraswati hand-carved from a single piece of natural sphatik. For students, scholars, founders and artists building a legacy.</p>
                <div className="vault-price">₹5,400</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider" />
      <div className="section-ornament">✦ &nbsp; Join the Sacred Mission &nbsp; ✦</div>
      <div className="gold-divider" />

      {/* FOUNDATION */}
      <section id="foundation" className="section">
        <div className="foundation-inner">
          <div className="foundation-header">
            <div>
              <div className="section-eyebrow reveal">The Divyaastra Foundation</div>
              <h2 className="section-title reveal title-green">India's Greatest<br />Spiritual NGO</h2>
              <p className="section-body reveal">
                Section 8 registered. FCRA eligible. We are building the most ambitious humanitarian-spiritual organisation in the history of modern India — feeding a lakh people daily, healing animals and humans alike, educating thousands, and constructing an eternal monument to Mahadev that the entire world will look upon in awe.
              </p>
            </div>
            <div>
              <div className="ngo-impact-bar reveal">
                <div className="nib"><span className="nib-num">1L/day</span><span className="nib-label">Fed Daily</span></div>
                <div className="nib"><span className="nib-num">5,000</span><span className="nib-label">Animals Cared</span></div>
                <div className="nib"><span className="nib-num">500</span><span className="nib-label">Free Hospital Beds</span></div>
                <div className="nib"><span className="nib-num">10,000</span><span className="nib-label">Scholarships</span></div>
                <div className="nib"><span className="nib-num">12</span><span className="nib-label">States Active</span></div>
              </div>
              <p className="section-body reveal" style={{ marginTop: '28px' }}>
                Your donation is tax-exempt. Your name, etched in stone for eternity. Join as a Founding Patron and take your place alongside India's greatest philanthropic legacy.
              </p>
            </div>
          </div>
          <div className="donation-tiers">
            <div className="tier reveal">
              <span className="tier-icon">🌿</span>
              <div className="tier-name">Devotee Partner</div>
              <span className="tier-amount">₹1,00,000</span>
              <ul className="tier-perks">
                <li>Name on the Devotee Wall of Fame</li>
                <li>Annual Abhishek in your family's name</li>
                <li>Lifetime Samagri subscription</li>
                <li>Priority Darshan access</li>
              </ul>
              <button className="btn-tier">Donate Now</button>
            </div>
            <div className="tier featured reveal">
              <span className="tier-icon">🔱</span>
              <div className="tier-name">Heritage Patron</div>
              <span className="tier-amount">₹25,00,000</span>
              <ul className="tier-perks">
                <li>Dedicated shrine room naming rights</li>
                <li>Gold-engraved family name in Mandap</li>
                <li>Permanent Advisory Board seat</li>
                <li>Private consecration ceremony</li>
              </ul>
              <button className="btn-tier">Become a Patron</button>
            </div>
            <div className="tier reveal">
              <span className="tier-icon">👑</span>
              <div className="tier-name">Temple Founder</div>
              <span className="tier-amount">₹1 Crore+</span>
              <ul className="tier-perks">
                <li>Full tower or hall naming rights — eternal</li>
                <li>Inaugural consecration ceremony</li>
                <li>Lifetime VIP suite on campus</li>
                <li>Legacy documentary tribute</li>
              </ul>
              <button className="btn-tier">Inquire Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-top">
          <div>
            <span className="footer-brand">DIVYAASTRA</span>
            <p className="footer-tagline">The World's Greatest Spiritual Authority.<br />Restoring Ancient Wisdom. Feeding a Lakh Daily.<br />Building an Eternal Legacy. New Delhi, India — Est. 2024</p>
          </div>
          <div className="footer-col">
            <h4>The Temple</h4>
            <ul>
              <li><a href="#">Vision & Architecture</a></li>
              <li><a href="#">The 12 Jyotirlingas</a></li>
              <li><a href="#">Sacred Kalash</a></li>
              <li><a href="#">Construction Timeline</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Foundation</h4>
            <ul>
              <li><a href="#">Annadaan Seva</a></li>
              <li><a href="#">Animal Sanctuary</a></li>
              <li><a href="#">Free Hospital</a></li>
              <li><a href="#">Vedic Education</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Invest</h4>
            <ul>
              <li><a href="#">Investor Deck</a></li>
              <li><a href="#">Sacred Vault</a></li>
              <li><a href="#">Naming Rights</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom"> <div
  style={{
    textAlign: 'center',
    padding: '15px',
    fontSize: '14px',
    color: '#999999',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    marginTop: '20px',
    lineHeight: '1.6'
  }}
>
  <strong>Temple Project Notice:</strong> The proposed Divyaastra Temple is a future visionary project currently in the conceptual and planning stage. Information presented on this website is for informational purposes only. No donations, investments, memberships, crowdfunding contributions, or public financial support are currently being requested or accepted for temple construction.
</div>
          <span className="footer-copy">© 2026 Divyaastra Foundation. All Rights Reserved. Section 8 Company. FCRA Eligible. Tax-Exempt Donations.</span>
          <span className="footer-reg">ॐ नमः शिवाय</span>
        </div>
      </footer>
    </>
  )
}

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to="/products/$productId"
      params={{ productId: product.id.toString() }}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div className="product-card reveal visible">
        <div className="product-img">
          <img src={product.image} alt={product.name} loading="lazy" decoding="async" />
          {product.badge && (
            <span
              className="product-badge"
              style={product.badgeColor ? { background: product.badgeColor } : undefined}
            >
              {product.badge}
            </span>
          )}
        </div>
        <div className="product-info">
          <div className="product-name">{product.name}</div>
          <p className="product-desc">{product.shortDescription}</p>
          <div className="product-price">
            {product.originalPrice && (
              <del style={{ color: '#999', fontSize: '14px', marginRight: '6px' }}>
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </del>
            )}
            ₹{product.price.toLocaleString('en-IN')} <span>/ {product.unit}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
