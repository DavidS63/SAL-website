import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Blog() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Head>
        <title>Blog Feed — Sunshine After Loss</title>
        <meta name="description" content="Stories, encouragement, and hope from the Sunshine After Loss community — one post at a time." />
      </Head>
      <main>
        <div className="page-hero">
          <h1>Blog Feed</h1>
          <p>Stories, encouragement, and hope — one post at a time</p>
        </div>
        <div className="section-pad">
          <div className="blog-grid">
            <Link href="/blog" className="blog-card fade-up">
              <svg viewBox="0 0 600 440" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '220px', display: 'block' }}>
                <defs>
                  <linearGradient id="s2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#e8c4a0" />
                    <stop offset="50%" stopColor="#d4928a" />
                    <stop offset="100%" stopColor="#b87878" />
                  </linearGradient>
                  <radialGradient id="g2" cx="50%" cy="62%" r="28%">
                    <stop offset="0%" stopColor="#fff4d6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#d4928a" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect width="600" height="440" fill="url(#s2)" />
                <circle cx="300" cy="280" r="120" fill="url(#g2)" />
                <circle cx="300" cy="300" r="30" fill="#fffbe8" opacity="0.4" />
                <path d="M0 320 Q150 280 300 310 Q450 280 600 310 L600 440 L0 440Z" fill="#2E0F13" opacity="0.5" />
                <polygon points="150,90 153,100 163,100 155,106 158,116 150,110 142,116 145,106 137,100 147,100" fill="#fff4d6" opacity="0.3" />
                <polygon points="450,70 452,77 449,77 444,81 446,88 440,84 434,88 436,81 431,77 438,77" fill="#fff4d6" opacity="0.25" />
                <rect x="291" y="380" width="18" height="40" rx="3" fill="#2E0F13" opacity="0.4" />
                <ellipse cx="300" cy="374" rx="4" ry="7" fill="#fff4d6" opacity="0.5" />
              </svg>
              <div className="blog-card-body">
                <h3>Holidays After Loss: Grace Over Expectations</h3>
                <p className="author">Sunshine</p>
              </div>
            </Link>
            <Link href="/blog" className="blog-card fade-up">
              <img
                src="https://static.wixstatic.com/media/8d010f_b8294813c6224d95aec40669726cd377~mv2.png/v1/fill/w_600,h_450,fp_0.50_0.50,q_90,enc_avif,quality_auto/8d010f_b8294813c6224d95aec40669726cd377~mv2.png"
                alt="13 Years Later"
              />
              <div className="blog-card-body">
                <h3>13 Years Later: A Reflection of Love, Loss, and New Beginnings</h3>
                <p className="author">Sunshine</p>
              </div>
            </Link>
            <Link href="/blog" className="blog-card fade-up">
              <img
                src="https://static.wixstatic.com/media/8d010f_5036d338a6a444249c00a70ff39a76cb~mv2.jpeg/v1/fill/w_600,h_450,fp_0.50_0.50,q_90,enc_avif,quality_auto/8d010f_5036d338a6a444249c00a70ff39a76cb~mv2.jpeg"
                alt="My Journey"
              />
              <div className="blog-card-body">
                <h3>My Journey: Finding Sunshine After Loss</h3>
                <p className="author">Sunshine</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
