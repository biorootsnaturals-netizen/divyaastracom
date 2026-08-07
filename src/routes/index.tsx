import { createFileRoute, Link } from '@tanstack/react-router'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import products, { type Product, type ProductCategory } from '@/data/products'

export const Route = createFileRoute('/')({
  component: DivyaastraHome,
})

type ProductFilter = 'all-products' | ProductCategory

const mobileNavLinks: Array<{ href: string; label: string }> = [
  { href: '#products', label: 'Sacred Store' },
  { href: '#mission', label: 'Mission' },
  { href: '#food-mission', label: 'Annadaan' },
  { href: '#experiences', label: 'Experiences' },
  { href: '#foundation', label: 'Foundation' },
  { href: '#contact', label: 'Contact Us' },
]

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
  const [menuOpen, setMenuOpen] = useState(false)

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
          <li><a href="#experiences">Experiences</a></li>
          <li><a href="#foundation">Foundation</a></li>
        </ul><li className="nav-contact">
  <a
    href="#contact"
    style={{
      color: "#16a34a",
      fontWeight: 700,
      fontSize: "16px"
    }}
  >
    Contact Us
  </a>
</li>
        <button className="nav-cta">Support Temple</button>
        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* MOBILE NAV PANEL */}
      <div id="mobile-nav" className={`nav-mobile-panel${menuOpen ? ' is-open' : ''}`}>
        {mobileNavLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <button className="nav-cta" onClick={() => setMenuOpen(false)}>Support Temple</button>
      </div>

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
            <span className="hstat-num">1110
              ft</span>
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
            <span className="hstat-num">3,000 Beds</span>
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
          <div className="section-eyebrow reveal" style={{ textAlign: 'center' }}><span style={{ color: '#D4AF37' }}>Our Sacred Purpose</span>
</div>
          <h2 className="section-title reveal" style={{ textAlign: 'center', margin: '0 auto 16px' }}>
            <span style={{ color: '#D4AF37' }}>The Divyaastra Mission</span>

          </h2>
          <p className="section-body reveal" style={{ margin: '0 auto 0', textAlign: 'center' }}>
            We are not merely a store. We are a movement — to restore Dharma, rebuild ancient glory, and serve every soul.
          </p>
          <div className="mission-grid">
            <div className="mission-card reveal">
              <span className="mission-icon">🕉️</span>
              <div className="mission-title">World's Tallest Shiva Temple</div>
              <p className="mission-body">A 1110-ft monument to Mahadev — the tallest temple ever built. Housing all 12 Jyotirlingas, sacred to every Hindu on earth. Your purchase builds this eternal legacy.</p>
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
      <section id="interior">
        <div className="interior-inner">
          <div>
            <div className="section-eyebrow reveal">Temple Architecture</div>
            <h2 className="section-title reveal title-green">Shri Mahadev<br />Shiv Parvati Dham</h2>
            <p className="section-body reveal">The architectural vision of the century. Rising 1110 feet above the sacred earth, housing all 12 Jyotirlingas, with a Kailash summit visible from 100 kilometres. Designed to stand for 10,000 years.</p>
            <div className="interior-stats">
              <div className="istat reveal">
                <span className="istat-num">1110 ft</span>
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
              alt="Shri Mahadev Shiv Parvati Dham — 1110 ft Temple Architecture"
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
                <span className="food-counter-num">3,000 Beds</span>
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
                <p className="food-service-desc">3,000-bed hospital — India's largest free hospital campus — with Ayurvedic and allopathic wings. All treatment free for pilgrims and the underprivileged. Staffed by 200 doctors and volunteers.</p>
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
      <div className="section-ornament">✦ &nbsp; Divyaastra Experiences &nbsp; ✦</div>
      <div className="gold-divider" />

      {/* EXPERIENCES — PODCASTS, VIDEOS & REAL STORIES */}
      <ExperiencesSection />

      {/* COMMUNITY REVIEWS */}
      <CommunityReviews />

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
                <div className="nib"><span className="nib-num">3,000</span><span className="nib-label">Free Hospital Beds</span></div>
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

<section id="contact" className="section">
  <div className="contact-inner">

    <span className="hero-eyebrow">GET IN TOUCH</span>

    <h2 className="hero-title" style={{ color: "#D4AF37" }}>
      Contact Us
    </h2>

    <p className="hero-tagline">
      We'd love to hear from you. Reach out to the Divyaastra Foundation.
    </p>

    <div className="contact-details">

      <p>
          <strong>📍 United States Office</strong><br />112 N Main Street, Robbinsville, NJ 08561, United States
        </p>

        <p>
          <strong>☎ Phone</strong><br />
          <a href="tel:+16099191212">+1 (609) 919-1212</a>
        </p>

        <p>
          <strong>📍 Australia Office</strong><br />42 Station Road, Seven Hills, NSW 2147, Australia
        </p>

        <p>
          <strong>☎ Phone</strong><br />
          <a href="tel:+61296263133">+61 2 9626 3133</a>
        </p>

        <p>
          <strong>📍 India Office</strong><br />The Camellias, DLF Golf Links, DLF Phase 5, Sector 42, Gurugram, Haryana 122009, India
        </p>

        <p>
          <strong>✉ Email</strong><br />
          <a href="mailto:info@divyaastra.com">info@divyaastra.com</a>
        </p>



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

/* ============================================================
   EXPERIENCES — Podcasts, Videos & Real Stories
   All artwork is generated with CSS/SVG; no external images.
   ============================================================ */

type Platform = 'youtube' | 'instagram' | 'spotify' | 'shorts'

type VideoCard = {
  badge: string
  title: string
  duration: string
  platform: Platform
  platformLabel: string
  glyph: string
  tone: [string, string]
}

const experienceVideos: VideoCard[] = [
  {
    badge: 'Podcast',
    title: 'Power of Rudraksha with Acharya Ji',
    duration: '22:18',
    platform: 'youtube',
    platformLabel: 'YouTube',
    glyph: 'ॐ',
    tone: ['#5A4326', '#1E1409'],
  },
  {
    badge: 'Customer Story',
    title: 'How Rudraksha Changed My Life',
    duration: '01:32',
    platform: 'instagram',
    platformLabel: 'Instagram Reel',
    glyph: 'श्री',
    tone: ['#4E3B2A', '#1A120B'],
  },
  {
    badge: 'Temple Ritual',
    title: '21-Day Hanuman Ritual at Divyaastra',
    duration: '02:45',
    platform: 'youtube',
    platformLabel: 'YouTube',
    glyph: 'ह्रीं',
    tone: ['#6B4A1E', '#1C1206'],
  },
  {
    badge: 'Podcast',
    title: 'Astrology Remedies for a Better Life',
    duration: '19:07',
    platform: 'spotify',
    platformLabel: 'Spotify',
    glyph: 'ऐं',
    tone: ['#3F3520', '#15110A'],
  },
  {
    badge: 'Product Demo',
    title: 'Rudraksha Bracelet Unboxing & Benefits',
    duration: '01:01',
    platform: 'instagram',
    platformLabel: 'Instagram Reel',
    glyph: 'क्लीं',
    tone: ['#6A4B2C', '#20140A'],
  },
  {
    badge: 'Spiritual Shorts',
    title: 'Hanuman Kripa In 60 Seconds',
    duration: '00:46',
    platform: 'shorts',
    platformLabel: 'YouTube Shorts',
    glyph: 'ह्रौं',
    tone: ['#71341A', '#1F0D06'],
  },
]

function PlatformIcon({ platform }: { platform: Platform }) {
  if (platform === 'youtube') {
    return (
      <svg className="vid-plat-icon" viewBox="0 0 24 18" aria-hidden="true">
        <rect width="24" height="18" rx="5" fill="#FF0000" />
        <path d="M9.6 5.1 16 9l-6.4 3.9V5.1Z" fill="#fff" />
      </svg>
    )
  }
  if (platform === 'shorts') {
    return (
      <svg className="vid-plat-icon" viewBox="0 0 24 18" aria-hidden="true">
        <rect width="24" height="18" rx="5" fill="#FF0033" />
        <path d="M13.4 3.4 8.8 9.3h2.7l-1.3 5.3 4.9-6.1h-2.9l1.2-5.1Z" fill="#fff" />
      </svg>
    )
  }
  if (platform === 'spotify') {
    return (
      <svg className="vid-plat-icon" viewBox="0 0 20 20" aria-hidden="true">
        <circle cx="10" cy="10" r="10" fill="#1DB954" />
        <path
          d="M5.3 7.4c3-.8 6.2-.6 8.9.8M5.9 10.3c2.5-.7 5.2-.5 7.4.7M6.5 13c2.1-.5 4.3-.4 6.1.6"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    )
  }
  return (
    <svg className="vid-plat-icon" viewBox="0 0 20 20" aria-hidden="true">
      <defs>
        <linearGradient id="ig-grad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#FDCB52" />
          <stop offset="35%" stopColor="#F1533E" />
          <stop offset="70%" stopColor="#C42E92" />
          <stop offset="100%" stopColor="#6A38B3" />
        </linearGradient>
      </defs>
      <rect width="20" height="20" rx="6" fill="url(#ig-grad)" />
      <rect x="4.5" y="4.5" width="11" height="11" rx="3.6" fill="none" stroke="#fff" strokeWidth="1.4" />
      <circle cx="10" cy="10" r="2.9" fill="none" stroke="#fff" strokeWidth="1.4" />
      <circle cx="14.1" cy="5.9" r="1" fill="#fff" />
    </svg>
  )
}

function Stars({ className = 'stars' }: { className?: string }) {
  return (
    <div className={className} aria-label="Rated 5 out of 5">
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} aria-hidden="true">★</span>
      ))}
    </div>
  )
}

function ExperiencesSection() {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [pages, setPages] = useState(1)
  const [page, setPage] = useState(0)

  const cardStep = (el: HTMLElement) => {
    const card = el.querySelector('.vid-card') as HTMLElement | null
    return card ? card.offsetWidth + 24 : Math.max(1, el.clientWidth)
  }

  const measure = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    const step = cardStep(el)
    const total = max <= 1 ? 1 : Math.ceil(max / step) + 1
    setPages(total)
    setPage(max <= 1 ? 0 : Math.min(total - 1, Math.round(el.scrollLeft / step)))
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    measure()
    el.addEventListener('scroll', measure, { passive: true })
    window.addEventListener('resize', measure)

    // Pointer drag-to-scroll (mouse); touch swipe is handled natively by overflow-x.
    let dragging = false
    let startX = 0
    let startScroll = 0
    const down = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return
      dragging = true
      startX = e.clientX
      startScroll = el.scrollLeft
      el.classList.add('is-dragging')
    }
    const move = (e: PointerEvent) => {
      if (!dragging) return
      e.preventDefault()
      el.scrollLeft = startScroll - (e.clientX - startX)
    }
    const up = () => {
      dragging = false
      el.classList.remove('is-dragging')
    }
    el.addEventListener('pointerdown', down)
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)

    return () => {
      el.removeEventListener('scroll', measure)
      window.removeEventListener('resize', measure)
      el.removeEventListener('pointerdown', down)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
    }
  }, [measure])

  const scrollByPage = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const step = cardStep(el)
    const perView = Math.max(1, Math.floor(el.clientWidth / step))
    el.scrollBy({ left: dir * step * perView, behavior: 'smooth' })
  }

  const goToPage = (index: number) => {
    const el = trackRef.current
    if (!el || pages < 2) return
    const max = el.scrollWidth - el.clientWidth
    el.scrollTo({ left: Math.min(max, cardStep(el) * index), behavior: 'smooth' })
  }

  return (
    <section id="experiences" className="section vids-section">
      <div className="vids-inner">
        <div className="vids-head">
          <div className="section-eyebrow reveal">Divyaastra Experiences</div>
          <h2 className="section-title reveal title-gold vids-title">Podcasts, Videos &amp; Real Stories</h2>
          <div className="vids-diamond reveal" aria-hidden="true" />
        </div>

        <div className="vids-subrow reveal">
          <p className="vids-sub">Insights, divine conversations and real experiences from our community.</p>
          <div className="vids-controls">
            <button type="button" className="vids-arrow" onClick={() => scrollByPage(-1)} aria-label="Previous videos">
              ‹
            </button>
            <button type="button" className="vids-arrow" onClick={() => scrollByPage(1)} aria-label="Next videos">
              ›
            </button>
            <a href="#experiences" className="vids-viewall">
              View All Videos
              <span className="vids-viewall-dot" aria-hidden="true">▶</span>
            </a>
          </div>
        </div>

        <div className="vids-viewport">
          <div className="vids-track" ref={trackRef}>
            {experienceVideos.map((video) => (
              <article className="vid-card reveal" key={video.title}>
                <div
                  className="vid-thumb"
                  style={{ ['--tone-a' as string]: video.tone[0], ['--tone-b' as string]: video.tone[1] }}
                >
                  <span className="vid-thumb-glyph" aria-hidden="true">{video.glyph}</span>
                  <span className="vid-badge">{video.badge}</span>
                  <button type="button" className="vid-play" aria-label={`Play ${video.title}`}>
                    <span className="vid-play-tri" aria-hidden="true" />
                  </button>
                  <span className="vid-duration">{video.duration}</span>
                </div>
                <div className="vid-body">
                  <h3 className="vid-title">{video.title}</h3>
                  <div className="vid-platform">
                    <PlatformIcon platform={video.platform} />
                    <span>{video.platformLabel}</span>
                  </div>
                  <Stars className="stars vid-stars" />
                </div>
              </article>
            ))}
          </div>
          <button type="button" className="vids-edge-arrow" onClick={() => scrollByPage(1)} aria-label="Scroll videos forward">
            ›
          </button>
        </div>

        <div className="vids-dots" role="tablist" aria-label="Video carousel pages" hidden={pages < 2}>
          {Array.from({ length: pages }).map((_, i) => (
            <button
              type="button"
              key={i}
              role="tab"
              aria-selected={i === page}
              aria-label={`Go to slide ${i + 1}`}
              className={`vids-dot${i === page ? ' active' : ''}`}
              onClick={() => goToPage(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   COMMUNITY REVIEWS
   ============================================================ */

const communityReviews = [
  {
    name: 'Rahul Sharma',
    city: 'Delhi',
    initials: 'RS',
    quote:
      'The Rudraksha bracelet I purchased from Divyaastra has brought so much positive energy and calmness in my life. Truly authentic and powerful.',
  },
  {
    name: 'Priya Mehta',
    city: 'Mumbai',
    initials: 'PM',
    quote:
      'Excellent quality products and beautifully packed with so much positivity. I feel the difference in energy within days.',
  },
  {
    name: 'Amit Verma',
    city: 'Bengaluru',
    initials: 'AV',
    quote:
      'The consultation was very detailed and practical. It gave me clarity and direction in a very confusing phase of life.',
  },
  {
    name: 'Neha Joshi',
    city: 'Pune',
    initials: 'NJ',
    quote:
      "Divyaastra is not just a store, it's a spiritual family. Grateful for the guidance and support.",
  },
]

function CommunityReviews() {
  return (
    <section id="community-reviews" className="section reviews-section">
      <div className="vids-inner">
        <div className="reviews-rule" aria-hidden="true">
          <span className="reviews-rule-diamond" />
        </div>
        <div className="vids-head">
          <div className="section-eyebrow reveal">Divyaastra Community</div>
          <h2 className="section-title reveal title-gold reviews-title">What Our Community Says</h2>
          <div className="vids-diamond reveal" aria-hidden="true" />
        </div>

        <div className="reviews-grid">
          {communityReviews.map((review) => (
            <figure className="review-card reveal" key={review.name}>
              <div className="review-mandala" aria-hidden="true" />
              <div className="review-top">
                <span className="review-quote-mark" aria-hidden="true">“</span>
                <Stars className="stars review-stars" />
              </div>
              <blockquote className="review-text">{review.quote}</blockquote>
              <figcaption className="review-author">
                <span className="review-avatar" aria-hidden="true">{review.initials}</span>
                <span>
                  <span className="review-name">{review.name}</span>
                  <span className="review-city">{review.city}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="reviews-cta-row">
          <a href="#community-reviews" className="btn-gold-outline reviews-cta">
            Read More Reviews &nbsp;✦
          </a>
        </div>
      </div>
    </section>
  )
}
