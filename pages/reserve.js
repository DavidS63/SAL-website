import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Reserve() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', session: '', notes: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Head>
        <title>Reserve a Zoom — Sunshine After Loss</title>
        <meta name="description" content="Reserve your spot for the next Sunshine Circles monthly Zoom gathering — held the first Saturday of each month at 10 AM Arizona Time." />
      </Head>
      <main>
        <div className="page-hero" style={{ background: 'linear-gradient(135deg,var(--mauve) 0%,#b8a8b0 50%,var(--blush) 100%)' }}>
          <img
            src="https://static.wixstatic.com/media/8d010f_09fc2298fcc64e8eb5b5ccbe086fcf48~mv2.png/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/8d010f_09fc2298fcc64e8eb5b5ccbe086fcf48~mv2.png"
            alt="Sunshine Circles"
            style={{ width: '100px', borderRadius: '50%', marginBottom: '20px', border: '3px solid rgba(255,255,255,0.45)' }}
          />
          <h1>Reserve a Zoom</h1>
          <p>Secure your spot for the next Sunshine Circles gathering</p>
        </div>
        <div className="inner-content">
          <div className="zoom-features">
            <div className="zoom-feature">
              <span className="zf-icon">🗓️</span>
              <h3>Monthly Gathering</h3>
              <p>First Saturday of each month at 10:00 AM Arizona Time</p>
            </div>
            <div className="zoom-feature">
              <span className="zf-icon">💬</span>
              <h3>Safe Space</h3>
              <p>Share stories, celebrate progress, and encourage one another</p>
            </div>
            <div className="zoom-feature">
              <span className="zf-icon">🔒</span>
              <h3>Members Only</h3>
              <p>A private, supportive circle for registered members</p>
            </div>
          </div>

          {!submitted ? (
            <div className="content-card">
              <h2 style={{ textAlign: 'center', marginTop: '0', marginBottom: '8px' }}>Reserve Your Spot</h2>
              <p style={{ textAlign: 'center', fontSize: '14px', color: 'var(--gray-text)', marginBottom: '32px' }}>
                Fill in your details below and we&apos;ll send you the Zoom link before the next circle.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="firstName">First name <span className="req">*</span></label>
                    <input id="firstName" name="firstName" type="text" placeholder="Enter your first name" value={form.firstName} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last name <span className="req">*</span></label>
                    <input id="lastName" name="lastName" type="text" placeholder="Enter your last name" value={form.lastName} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email <span className="req">*</span></label>
                    <input id="email" name="email" type="email" placeholder="you@email.com" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" placeholder="(555) 555-5555" value={form.phone} onChange={handleChange} />
                  </div>
                  <div className="form-group full">
                    <label htmlFor="session">Which session? <span className="req">*</span></label>
                    <select id="session" name="session" value={form.session} onChange={handleChange} required>
                      <option value="">Select a date...</option>
                      <option value="next">Next Scheduled Session</option>
                      <option value="following">Following Month</option>
                      <option value="unsure">Not sure yet — just keep me informed</option>
                    </select>
                  </div>
                  <div className="form-group full">
                    <label htmlFor="notes">
                      Anything you&apos;d like us to know?{' '}
                      <span style={{ fontWeight: '400', color: 'var(--gray-text)' }}>(optional)</span>
                    </label>
                    <textarea id="notes" name="notes" placeholder="Topics you'd like discussed, first-timer note, etc." value={form.notes} onChange={handleChange}></textarea>
                  </div>
                </div>
                <div className="form-submit-row">
                  <button type="submit" className="btn btn-dark">Reserve Your Spot</button>
                </div>
              </form>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '48px 32px', background: 'rgba(234,185,179,0.12)', borderRadius: '16px', marginTop: '24px' }}>
              <span style={{ fontSize: '48px', marginBottom: '14px', display: 'block' }}>🌞</span>
              <h3 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '22px', fontWeight: '400', marginBottom: '8px' }}>
                You&apos;re registered!
              </h3>
              <p style={{ marginTop: '8px' }}>We&apos;ll send you the Zoom link before the next Sunshine Circle. We can&apos;t wait to see you there.</p>
              <Link href="/" className="btn btn-primary" style={{ marginTop: '24px', display: 'inline-block' }}>
                Return Home
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  )
}
