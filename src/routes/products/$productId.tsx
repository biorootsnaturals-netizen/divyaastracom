import { useState } from 'react'
import type { ReactNode } from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import products from '../../data/products'
import productDetails from '../../data/productDetails'
import type { Product } from '../../data/products'
import type { BenefitIcon, ProductDetail } from '../../data/productDetails'

export const Route = createFileRoute('/products/$productId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const product = products.find((p) => p.id === +params.productId)
    if (!product) throw new Error('Product not found')
    return product
  },
})

function RouteComponent() {
  const product = Route.useLoaderData()
  const detail = productDetails[product.id]

  return (
    <>
      <nav className="pdp-nav">
        <Link to="/" className="nav-brand">
          <span className="nav-brand-text">DIVYAASTRA</span>
        </Link>
        <Link to="/" className="pdp-back">
          ← Back to Sacred Store
        </Link>
      </nav>

      {detail ? (
        <ProductDetailPage product={product} detail={detail} />
      ) : (
        <ProductSummaryPage product={product} />
      )}

      <footer className="pdp-footer">
        <span className="pdp-footer-om">
          ॐ नमः शिवाय
        </span>
        <p className="pdp-footer-copy">
          © 2024 Divyaastra Foundation. All Rights Reserved.
        </p>
      </footer>
    </>
  )
}

/* ------------------------------------------------------------------
   Original detail layout — used by every product without extended
   content. Unchanged.
   ------------------------------------------------------------------ */
function ProductSummaryPage({ product }: { product: Product }) {
  return (
    <div className="pdp-page">
      <div className="pdp-grid">
        <div className="pdp-media">
          <img
            className="pdp-img"
            src={product.image}
            alt={product.name}
          />
          {product.badge && (
            <span
              className="pdp-badge"
              style={{ background: product.badgeColor || 'var(--green)' }}
            >
              {product.badge}
            </span>
          )}
        </div>

        <div className="pdp-details">
          <div className="pdp-eyebrow">
            Sacred Product
          </div>
          <h1 className="pdp-title">
            {product.name}
          </h1>

          <div className="pdp-rule" />

          <p className="pdp-desc">
            {product.description}
          </p>

          <div className="pdp-price-row">
            {product.originalPrice && (
              <del className="pdp-price-old">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </del>
            )}
            <span className="pdp-price">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            <span className="pdp-unit">/ {product.unit}</span>
          </div>

          <div className="pdp-actions">
            <button className="pdp-btn-primary">
              Add to Cart — ₹{product.price.toLocaleString('en-IN')}
            </button>
            <button className="pdp-btn-secondary">
              Add to Wishlist
            </button>
          </div>

          <SacredPromise />
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------
   Extended detail layout — same page shell, same design tokens, with
   a gallery, sacred certification notice and the full product story.
   ------------------------------------------------------------------ */
function ProductDetailPage({
  product,
  detail,
}: {
  product: Product
  detail: ProductDetail
}) {
  return (
    <div className="pdp-page">
      <div className="pdp-grid">
        <Gallery detail={detail} />

        <div className="pdp-details">
          <SacredNotice notice={detail.sacredNotice} />

          <div className="pdp-eyebrow">
            Sacred Product
          </div>
          <h1 className="pdp-title">
            {product.name}
          </h1>
          <p className="rud-subtitle">
            {detail.subtitle}
          </p>
          <p className="rud-support-line">
            {detail.supportingLine}
          </p>

          <div className="rud-rating-row">
            <Stars rating={detail.rating} />
            <span className="rud-rating-value">{detail.ratingLabel}</span>
            <span className="rud-rating-sep">·</span>
            <span className="rud-sold">{detail.soldLabel}</span>
          </div>

          <div className="rud-purchase">
            <div className="rud-price-row">
              <span className="pdp-price">{detail.price}</span>
              <span className="pdp-unit">/ {detail.priceUnit}</span>
              <del className="pdp-price-old">{detail.originalPrice}</del>
              <span className="rud-discount">{detail.discountLabel}</span>
            </div>

            <div className="rud-actions">
              <button type="button" className="pdp-btn-primary">
                Add to Cart
              </button>
              <button type="button" className="pdp-btn-secondary">
                Buy Now
              </button>
            </div>
          </div>

          <p className="pdp-desc rud-short-desc">
            {detail.shortDescription}
          </p>

          <SacredPromise />
        </div>
      </div>

      <div className="rud-sections">
        <Section title="Sacred Benefits">
          <ul className="rud-benefits">
            {detail.benefits.map((benefit) => (
              <li className="rud-benefit" key={benefit.title}>
                <span className="rud-benefit-icon" aria-hidden="true">
                  <BenefitGlyph icon={benefit.icon} />
                </span>
                <span className="rud-benefit-title">{benefit.title}</span>
                <span className="rud-benefit-body">{benefit.body}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="About The Mala">
          <div className="rud-prose">
            {detail.about.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </Section>

        <Section title="Why DIVYAASTRA">
          <ul className="rud-why">
            {detail.why.map((point) => (
              <li className="rud-why-item" key={point.title}>
                <span className="rud-why-title">{point.title}</span>
                <span className="rud-why-body">{point.body}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Product Details">
          <dl className="rud-specs">
            {detail.specs.map((spec) => (
              <div className="rud-spec" key={spec.label}>
                <dt>{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <div className="rud-duo">
          <Section title="How To Use">
            <div className="rud-prose">
              {detail.howToUse.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </Section>

          <Section title="Care Instructions">
            <div className="rud-prose">
              {detail.care.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </Section>
        </div>

        <Section title="What's Included">
          <ul className="rud-included">
            {detail.included.map((item) => (
              <li key={item}>
                <span className="rud-included-mark" aria-hidden="true">
                  ✦
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <div className="rud-duo">
          <Section title="Delivery">
            <dl className="rud-specs rud-specs-compact">
              {detail.delivery.map((item) => (
                <div className="rud-spec" key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section title="Replacement">
            <div className="rud-prose">
              {detail.replacement.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </Section>
        </div>

        <Section title="Frequently Asked">
          <div className="rud-faqs">
            {detail.faqs.map((faq) => (
              <details className="rud-faq" key={faq.question}>
                <summary className="rud-faq-q">
                  {faq.question}
                  <span className="rud-faq-sign" aria-hidden="true" />
                </summary>
                <p className="rud-faq-a">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Section>

        <Section title="Ratings">
          <div className="rud-reviews">
            <div className="rud-reviews-score">
              <span className="rud-reviews-num">{detail.rating} / 5</span>
              <Stars rating={detail.rating} />
            </div>
            <div className="rud-reviews-sold">
              <span className="rud-reviews-sold-num">{detail.soldLabel}</span>
              <span className="rud-reviews-sold-label">
                Devotees across India
              </span>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="rud-section">
      <h2 className="rud-section-title">{title}</h2>
      <div className="pdp-rule" />
      {children}
    </section>
  )
}

function SacredPromise() {
  return (
    <div className="pdp-promise">
      <p className="pdp-promise-title">
        Sacred Promise
      </p>
      <p className="pdp-promise-body">
        Every item is hand-selected, energised and blessed by our Pandits. Your purchase directly funds the construction of the world's tallest Shiva temple and feeds one lakh souls daily.
      </p>
    </div>
  )
}

function SacredNotice({ notice }: { notice: ProductDetail['sacredNotice'] }) {
  return (
    <div className="rud-notice">
      <p className="rud-notice-head">
        <span className="rud-notice-glyph" aria-hidden="true">
          {notice.glyph}
        </span>
        <span className="rud-notice-primary">{notice.primary}</span>
        <span className="rud-notice-dot" aria-hidden="true">
          •
        </span>
        <span className="rud-notice-secondary">{notice.secondary}</span>
      </p>
      <p className="rud-notice-body">{notice.body}</p>
      <div className="rud-notice-rule" />
    </div>
  )
}

function Gallery({ detail }: { detail: ProductDetail }) {
  const [active, setActive] = useState(0)
  const main = detail.gallery[active]

  return (
    <div className="pdp-media rud-gallery">
      <div className="rud-gallery-main">
        <img
          className="rud-gallery-img"
          src={main.src}
          alt={main.alt}
          width={1400}
          height={1400}
          decoding="async"
        />
      </div>

      <div className="rud-thumbs" role="tablist" aria-label="Product photographs">
        {detail.gallery.map((image, index) => (
          <button
            type="button"
            key={image.src}
            role="tab"
            aria-selected={index === active}
            aria-label={`View photograph ${index + 1}`}
            className={
              index === active ? 'rud-thumb rud-thumb-active' : 'rud-thumb'
            }
            onClick={() => setActive(index)}
          >
            <img
              src={image.src}
              alt=""
              loading={index === 0 ? undefined : 'lazy'}
              decoding="async"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="rud-stars" aria-label={`${rating} out of 5`}>
      {[0, 1, 2, 3, 4].map((index) => {
        const fill = Math.min(Math.max(rating - index, 0), 1)
        return (
          <span className="rud-star" key={index}>
            <span className="rud-star-base" aria-hidden="true">
              ★
            </span>
            <span
              className="rud-star-fill"
              aria-hidden="true"
              style={{ width: `${fill * 100}%` }}
            >
              ★
            </span>
          </span>
        )
      })}
    </span>
  )
}

function BenefitGlyph({ icon }: { icon: BenefitIcon }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  switch (icon) {
    // Lotus — meditation
    case 'meditation':
      return (
        <svg {...common}>
          <path d="M12 4c1.9 2 2.8 4 2.8 6.2S13.6 14.4 12 16c-1.6-1.6-2.8-3.6-2.8-5.8S10.1 6 12 4Z" />
          <path d="M12 16c-2.3.6-4.3.2-5.9-1.2-1.6-1.4-2.3-3.2-2.1-5.2 2 .2 3.7 1 5 2.3" />
          <path d="M12 16c2.3.6 4.3.2 5.9-1.2 1.6-1.4 2.3-3.2 2.1-5.2-2 .2-3.7 1-5 2.3" />
          <path d="M4 18.5c2.3 1.4 5 2 8 2s5.7-.6 8-2" />
        </svg>
      )
    // Bead circle — mantra japa
    case 'japa':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="5" r="1.5" />
          <circle cx="19" cy="12" r="1.5" />
          <circle cx="12" cy="19" r="1.5" />
          <circle cx="5" cy="12" r="1.5" />
          <path d="M12 21v1.5" />
        </svg>
      )
    // Diya flame — inner peace
    case 'peace':
      return (
        <svg {...common}>
          <path d="M12 3c2.2 2.6 3.4 4.6 3.4 6.4A3.4 3.4 0 0 1 12 12.8a3.4 3.4 0 0 1-3.4-3.4C8.6 7.6 9.8 5.6 12 3Z" />
          <path d="M4.5 15.5h15c-.8 2.9-3.7 4.8-7.5 4.8s-6.7-1.9-7.5-4.8Z" />
        </svg>
      )
    // Shield — divine protection
    case 'protection':
      return (
        <svg {...common}>
          <path d="M12 3 5 5.5v6c0 4 2.9 7.3 7 9.5 4.1-2.2 7-5.5 7-9.5v-6L12 3Z" />
          <path d="M9.2 11.8l2 2 3.6-3.8" />
        </svg>
      )
    // Mala worn at the neck — daily wear
    case 'wear':
    default:
      return (
        <svg {...common}>
          <path d="M6.5 4.5c0 5.2 2.5 9.4 5.5 9.4s5.5-4.2 5.5-9.4" />
          <circle cx="12" cy="16.6" r="2.1" />
          <path d="M12 18.7v2.3" />
        </svg>
      )
  }
}
