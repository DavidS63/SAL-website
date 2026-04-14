import Head from 'next/head'
import Link from 'next/link'

export default function Events() {
  return (
    <>
      <Head>
        <title>Event Details — Sunshine After Loss</title>
        <meta name="description" content="Sunshine Circles monthly Zoom gatherings — held the first Saturday of each month at 10 AM Arizona Time. A safe space for widows to share and grow." />
      </Head>
      <main>
        <div className="page-hero">
          <h1>Event Details</h1>
          <p>Upcoming gatherings, workshops, and circles</p>
        </div>
        <div className="inner-content">
          <div className="content-card" style={{ textAlign: 'center' }}>
            <img
              src="https://static.wixstatic.com/media/8d010f_09fc2298fcc64e8eb5b5ccbe086fcf48~mv2.png/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/8d010f_09fc2298fcc64e8eb5b5ccbe086fcf48~mv2.png"
              alt="Sunshine Circles"
              style={{ width: '100px', borderRadius: '50%', marginBottom: '20px' }}
            />
            <h2 style={{ marginTop: '0' }}>Sunshine Circles — Monthly Zoom</h2>
            <p style={{ maxWidth: '500px', margin: '0 auto 12px' }}>
              A monthly gathering where members come together to share stories, celebrate progress, and encourage one another in a safe, supportive space.
            </p>
            <p style={{ fontSize: '14px', color: 'var(--gray-text)', marginBottom: '24px' }}>
              Held the first Saturday of each month &middot; 10:00 AM Arizona Time &middot; Via Zoom
            </p>
            <Link href="/reserve" className="btn btn-primary">Reserve Your Spot</Link>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <p style={{ fontSize: '14px', color: 'var(--gray-text)' }}>
              More events coming soon.{' '}
              <Link href="/welcome" className="link">Join as a member</Link> to be notified.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
