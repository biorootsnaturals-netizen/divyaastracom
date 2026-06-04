+164
Lines changed: 164 additions & 0 deletions
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,164 @@
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
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(201,168,76,0.2)',
        padding: '0 60px', height: '72px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
      }}>
        <Link to="/" className="nav-brand">
          <span className="nav-brand-text">DIVYAASTRA</span>
        </Link>
        <Link to="/" style={{
          fontFamily: "'Cinzel', serif", fontSize: '10px', letterSpacing: '2px',
          color: 'var(--green)', textDecoration: 'none', textTransform: 'uppercase',
        }}>
          ← Back to Sacred Store
        </Link>
      </nav>
      <div style={{ paddingTop: '72px', minHeight: '100vh', background: 'var(--cream)' }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto', padding: '60px 40px',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start',
        }}>
          <div style={{ position: 'relative' }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%', aspectRatio: '3/4', objectFit: 'cover',
                border: '1px solid rgba(201,168,76,0.2)',
                boxShadow: '0 30px 80px rgba(0,0,0,0.1)',
              }}
            />
            {product.badge && (
              <span style={{
                position: 'absolute', top: '20px', left: '20px',
                fontFamily: "'Cinzel', serif", fontSize: '10px', letterSpacing: '2px',
                background: product.badgeColor || 'var(--green)',
                color: '#fff', padding: '8px 16px', textTransform: 'uppercase',
              }}>
                {product.badge}
              </span>
            )}
          </div>
          <div style={{ paddingTop: '20px' }}>
            <div style={{
              fontFamily: "'Cinzel', serif", fontSize: '10px', letterSpacing: '6px',
              color: 'var(--green)', textTransform: 'uppercase', marginBottom: '14px',
            }}>
              Sacred Product
            </div>
            <h1 style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, lineHeight: 1.2,
              color: 'var(--text-dark)', marginBottom: '24px',
            }}>
              {product.name}
            </h1>
            <div style={{
              width: '60px', height: '1px',
              background: 'linear-gradient(to right, var(--gold), transparent)',
              marginBottom: '24px',
            }} />
            <p style={{
              fontSize: '17px', fontStyle: 'italic', fontWeight: 300,
              color: '#555', lineHeight: 1.85, marginBottom: '32px',
            }}>
              {product.description}
            </p>
            <div style={{
              display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '36px',
            }}>
              {product.originalPrice && (
                <del style={{ fontFamily: "'Cinzel', serif", fontSize: '18px', color: '#bbb' }}>
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </del>
              )}
              <span style={{
                fontFamily: "'Cinzel', serif", fontSize: '32px', fontWeight: 700,
                color: 'var(--green)',
              }}>
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <span style={{ fontSize: '14px', color: '#999', fontStyle: 'italic' }}>/ {product.unit}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button style={{
                fontFamily: "'Cinzel', serif", fontSize: '11px', letterSpacing: '3px',
                background: 'linear-gradient(135deg, #1A5C2E, #2E7D46)',
                color: '#fff', border: 'none', padding: '18px 44px', cursor: 'pointer',
                textTransform: 'uppercase', fontWeight: 600, transition: 'all .4s',
              }}>
                Add to Cart — ₹{product.price.toLocaleString('en-IN')}
              </button>
              <button style={{
                fontFamily: "'Cinzel', serif", fontSize: '11px', letterSpacing: '3px',
                background: 'transparent', color: 'var(--gold)',
                border: '1.5px solid var(--gold)', padding: '15px 44px', cursor: 'pointer',
                textTransform: 'uppercase', transition: 'all .4s',
              }}>
                Add to Wishlist
              </button>
            </div>
            <div style={{
              marginTop: '36px', padding: '24px',
              border: '1px solid rgba(201,168,76,0.2)',
              background: 'rgba(255,255,255,0.7)',
            }}>
              <p style={{
                fontFamily: "'Cinzel', serif", fontSize: '10px', letterSpacing: '3px',
                color: 'var(--green)', textTransform: 'uppercase', marginBottom: '10px',
              }}>
                Sacred Promise
              </p>
              <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#777', lineHeight: 1.7 }}>
                Every item is hand-selected, energised and blessed by our Pandits. Your purchase directly funds the construction of the world's tallest Shiva temple and feeds one lakh souls daily.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer style={{
        background: 'var(--obsidian)', color: '#fff',
        borderTop: '2px solid var(--gold)',
        padding: '40px 70px', textAlign: 'center',
      }}>
        <span style={{
          fontFamily: "'Cinzel', serif", fontSize: '11px', letterSpacing: '4px',
          color: 'rgba(201,168,76,.5)',
        }}>
          ॐ नमः शिवाय
        </span>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,.3)', marginTop: '8px' }}>
          © 2024 Divyaastra Foundation. All Rights Reserved.
        </p>
      </footer>
    </>
  )
}
