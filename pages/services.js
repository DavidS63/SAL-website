import Head from 'next/head'
import Link from 'next/link'

export default function Services() {
  return (
    <>
      <Head>
        <title>Services — Sunshine After Loss</title>
        <meta name="description" content="Services offered by Sunshine After Loss including Sunshine Circles monthly Zoom calls, Light and Grace Photography, and Balance After Loss." />
      </Head>
      <main>
        <div className="page-hero">
          <h1>Services</h1>
          <p>Programs and offerings designed to support your journey</p>
        </div>
        <div className="inner-content">
          <div className="info-cards">
            <div className="info-card">
              <span className="ic-icon">📸</span>
              <h3>Light &amp; Grace Photography</h3>
              <p>Capturing beauty in every season of life. Portrait sessions designed to celebrate who you are today. Coming Soon.</p>
            </div>
            <div className="info-card">
              <span className="ic-icon">⚖️</span>
              <h3>Balance After Loss</h3>
              <p>Practical guidance and wellness support for navigating the day-to-day challenges of life after loss. Coming Soon.</p>
            </div>
            <div className="info-card" style={{ cursor: 'pointer' }}>
              <Link href="/reserve" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <span className="ic-icon">☀️</span>
                <h3>Sunshine Circles</h3>
                <p>Monthly Zoom calls — a safe, supportive space to share, grow, and shine again. <span className="link">Reserve your spot →</span></p>
              </Link>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <p style={{ fontSize: '14px', color: 'var(--gray-text)' }}>
              More services are on the way. Stay connected by{' '}
              <Link href="/welcome" className="link">becoming a member</Link>.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
