import { Link, createFileRoute } from '@tanstack/react-router'
import products from '../../data/products'

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

            <div className="pdp-promise">
              <p className="pdp-promise-title">
                Sacred Promise
              </p>
              <p className="pdp-promise-body">
                Every item is hand-selected, energised and blessed by our Pandits. Your purchase directly funds the construction of the world's tallest Shiva temple and feeds one lakh souls daily.
              </p>
            </div>
          </div>
        </div>
      </div>

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
