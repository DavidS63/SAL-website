import Head from 'next/head'
import Link from 'next/link'

export default function Members() {
  return (
    <>
      <Head>
        <title>Members — Sunshine After Loss</title>
        <meta name="description" content="Our growing community of sunshine seekers. Join Sunshine After Loss and connect with others navigating life after loss." />
      </Head>
      <main>
        <div className="page-hero">
          <h1>Members</h1>
          <p>Our growing community of sunshine seekers</p>
        </div>
        <div className="inner-content">
          <div className="members-grid">
            <div className="member-card">
              <div className="member-avatar">S</div>
              <h4>Sunshine</h4>
              <p>Founder</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <p style={{ fontSize: '15px', marginBottom: '16px' }}>Ready to be part of our community?</p>
            <Link href="/welcome" className="btn btn-primary">Become a Member</Link>
          </div>
        </div>
      </main>
    </>
  )
}
