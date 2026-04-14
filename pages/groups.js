import Head from 'next/head'
import Link from 'next/link'

export default function Groups() {
  return (
    <>
      <Head>
        <title>Groups — Sunshine After Loss</title>
        <meta name="description" content="Connect with others on a similar journey through Sunshine Sisters, Friends and Family, and Young Widows Circle groups." />
      </Head>
      <main>
        <div className="page-hero">
          <h1>Groups</h1>
          <p>Connect with others on a similar journey</p>
        </div>
        <div className="inner-content">
          <div className="info-cards">
            <div className="info-card">
              <span className="ic-icon">🌻</span>
              <h3>Sunshine Sisters</h3>
              <p>A private group for widows to connect, share, and support one another through every season.</p>
            </div>
            <div className="info-card">
              <span className="ic-icon">💛</span>
              <h3>Friends &amp; Family</h3>
              <p>For the loved ones who walk beside us — a space to share encouragement and understanding.</p>
            </div>
            <div className="info-card">
              <span className="ic-icon">✨</span>
              <h3>Young Widows Circle</h3>
              <p>A dedicated space for those who became widows at a younger age and may feel unseen or isolated.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/welcome" className="btn btn-primary">Join to Access Groups</Link>
          </div>
        </div>
      </main>
    </>
  )
}
