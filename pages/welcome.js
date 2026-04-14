import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Welcome() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', cityState: '', about: ''
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
        <title>Welcome — Sunshine After Loss</title>
        <meta name="description" content="Join the Sunshine After Loss community. Free membership gives you access to Sunshine Circles, the Blog Board, Groups, and more." />
      </Head>
      <main>
        <div className="page-hero" style={{ background: 'linear-gradient(135deg,var(--cream) 0%,var(--blush-light) 50%,var(--blush) 100%)' }}>
          <img
            src="https://static.wixstatic.com/media/8d010f_4a010a6fc2a445958991f2597b5ea870~mv2.jpg/v1/fill/w_280,h_218,al_c,lg_1,q_80,enc_avif,quality_auto/sunshine_after_loss_logo.jpg"
            alt="Sunshine After Loss"
            style={{ width: '140px', borderRadius: '8px', marginBottom: '24px' }}
          />
          <h1>Welcome, New Sunshine Member!</h1>
          <p>Become a member today and let&apos;s go find the sunshine!</p>
        </div>
        <div className="inner-content">
          {!submitted ? (
            <div className="content-card">
              <p style={{ textAlign: 'center', marginBottom: '32px', fontSize: '15px' }}>
                Join our community of strength, hope, and encouragement. Membership is free and gives you access to Sunshine Circles, the Blog Board, Groups, and more.
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
                    <label htmlFor="phone">Phone <span className="req">*</span></label>
                    <input id="phone" name="phone" type="tel" placeholder="(555) 555-5555" value={form.phone} onChange={handleChange} required />
                  </div>
                  <div className="form-group full">
                    <label htmlFor="cityState">City and State <span className="req">*</span></label>
                    <input id="cityState" name="cityState" type="text" placeholder="e.g. Gilbert, AZ" value={form.cityState} onChange={handleChange} required />
                  </div>
                  <div className="form-group full">
                    <label htmlFor="about">
                      Tell us a little about yourself{' '}
                      <span style={{ fontWeight: '400', color: 'var(--gray-text)' }}>(optional)</span>
                    </label>
                    <textarea id="about" name="about" placeholder="What brought you here? How can we best support you?" value={form.about} onChange={handleChange}></textarea>
                  </div>
                </div>
                <div className="form-submit-row">
                  <button type="submit" className="btn btn-primary">Become a Member</button>
                </div>
              </form>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '48px 32px', background: 'rgba(234,185,179,0.12)', borderRadius: '16px', marginTop: '24px' }}>
              <span style={{ fontSize: '48px', marginBottom: '14px', display: 'block' }}>☀️</span>
              <h3 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '22px', fontWeight: '400', marginBottom: '8px' }}>
                Welcome to the Sunshine family!
              </h3>
              <p style={{ marginTop: '8px' }}>Thank you for joining. We&apos;ll be in touch soon with next steps.</p>
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
