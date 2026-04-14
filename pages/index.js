import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Home() {
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
        <title>Sunshine After Loss | Support for Widows</title>
        <meta name="description" content="Sunshine After Loss walks alongside widows as they navigate life after loss — offering encouragement, connection, and hope. Based in Gilbert, AZ." />
        <meta name="keywords" content="widow support, grief support, loss recovery, sunshine after loss, Gilbert AZ, widows community, young widows" />
        <meta name="author" content="Sunshine After Loss" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Sunshine After Loss | Support for Widows" />
        <meta property="og:description" content="Reclaiming life, one step at a time. A space for navigating life after loss — offering encouragement, connection, and hope." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sunshineafterloss.com" />
        <meta property="og:image" content="https://static.wixstatic.com/media/8d010f_4a010a6fc2a445958991f2597b5ea870~mv2.jpg" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Sunshine After Loss" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sunshine After Loss | Support for Widows" />
        <meta name="twitter:description" content="Reclaiming life, one step at a time. A space for navigating life after loss." />
        <meta name="twitter:image" content="https://static.wixstatic.com/media/8d010f_4a010a6fc2a445958991f2597b5ea870~mv2.jpg" />
        <link rel="canonical" href="https://www.sunshineafterloss.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Sunshine After Loss",
              "url": "https://www.sunshineafterloss.com",
              "description": "Walking alongside widows as they navigate life after loss — offering encouragement, connection, and hope.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Gilbert",
                "addressRegion": "AZ",
                "postalCode": "85298",
                "addressCountry": "US"
              },
              "telephone": "602-373-9916",
              "email": "sunshineafterloss@outlook.com"
            })
          }}
        />
      </Head>
      <main>

        <section className="hero">
          <div className="hero-content">
            <img
              src="https://static.wixstatic.com/media/8d010f_4a010a6fc2a445958991f2597b5ea870~mv2.jpg/v1/fill/w_580,h_451,al_c,lg_1,q_80,enc_avif,quality_auto/sunshine_after_loss_logo.jpg"
              alt="Sunshine After Loss logo"
              className="hero-logo fade-up"
            />
            <h1 className="fade-up">
              A Space for Navigating Life After Loss<br />
              A Place to Feel Understood, Supported, and Not So Alone
            </h1>
            <Link href="/welcome" className="btn btn-primary fade-up">
              Start Your Journey
            </Link>
            <p className="hero-text fade-up">
              Through my journey of loss and renewal as a young widow, I&apos;ve learned that while grief can feel isolating, it can also become a source of strength and transformation. My hope is to share that strength here — to inspire and uplift others walking this path. Together, we can face the challenges of widowhood, honor our past, and embrace the possibility of a life filled with courage, confidence, and hope for the days ahead.
            </p>
            <p className="hero-text fade-up">
              At Sunshine After Loss, our mission is to walk alongside widows as they navigate life after loss — offering encouragement, connection, and hope. My own story is shaped by becoming a widow at a younger age, a time when very few around me could relate. Because of that, I hold a special place in my heart for younger widows who may feel isolated or unseen.
            </p>
            <p className="hero-text fade-up">
              Still, this is more than a space for widows alone. It is also a place for family and friends — those who have walked beside us, witnessed our struggles, and want to share encouragement of their own. Together, through honest stories and supportive reflections, we honor the past while finding the strength to rebuild. With courage and confidence, we reclaim life one step at a time — living proof that there is, truly, &ldquo;<em>sunshine after loss</em>.&rdquo; Joining is easy — tap above to be part of our supportive community, then scroll down for more. Let&apos;s navigate through this journey together.
            </p>
          </div>
          <div className="hero-image" role="img" aria-label="Family photo"></div>
        </section>

        <section className="joy-section">
          <h2 className="fade-up">Find Your Joy</h2>
        </section>

        <section style={{ background: 'var(--cream)' }}>
          <div className="section-pad">
            <h2 className="section-title fade-up">Services</h2>
            <div className="services-grid">
              <Link href="/services" className="service-card fade-up">
                <img
                  src="https://static.wixstatic.com/media/11062b_da68af68fb7e467b975e2af5de6e9a81~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/11062b_da68af68fb7e467b975e2af5de6e9a81~mv2.jpg"
                  alt="Light and Grace Photography"
                />
                <div className="service-card-body">
                  <h3>Coming Soon: Light &amp; Grace Photography</h3>
                </div>
              </Link>
              <Link href="/services" className="service-card fade-up">
                <img
                  src="https://static.wixstatic.com/media/8d010f_ced8a2def0434872821efded513534e3~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/8d010f_ced8a2def0434872821efded513534e3~mv2.jpg"
                  alt="Balance After Loss"
                />
                <div className="service-card-body">
                  <h3>Coming Soon: Balance After Loss</h3>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="circles-section">
          <div className="section-pad">
            <div className="circles-grid">
              <div className="circles-image fade-up">
                <img
                  src="https://static.wixstatic.com/media/8d010f_ef36d67565984e28a06f8ddfd88f3907~mv2.jpeg/v1/fill/w_800,h_450,al_c,q_80,enc_avif,quality_auto/8d010f_ef36d67565984e28a06f8ddfd88f3907~mv2.jpeg"
                  alt="Sunset"
                />
              </div>
              <div className="circles-content fade-up">
                <div className="circles-header">
                  <h2>Steps Toward Sunshine with &ldquo;Sunshine Circles&rdquo;</h2>
                  <img
                    src="https://static.wixstatic.com/media/8d010f_09fc2298fcc64e8eb5b5ccbe086fcf48~mv2.png/v1/fill/w_200,h_200,al_c,q_85,enc_avif,quality_auto/8d010f_09fc2298fcc64e8eb5b5ccbe086fcf48~mv2.png"
                    alt="Sunshine Circles logo"
                    className="circles-logo"
                  />
                </div>
                <p className="note">
                  Monthly Zoom Calls: A safe space to share, grow, and shine again (Membership is required. It&apos;s simple and easy, just scroll up and tap the button)
                </p>
                <p>
                  Each month, we come together in a safe, supportive space to share stories, celebrate progress, and encourage one another. These circles aren&apos;t about dwelling on the past — they&apos;re about building confidence, finding light, and reclaiming life one step at a time.
                </p>
                <Link href="/reserve" className="btn btn-light">Reserve Your Spot</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="blog-section">
          <div className="section-pad">
            <p className="blog-intro fade-up">
              Welcome to the Blog Board, where widows share stories, encouragement, and hope — one post at a time.
            </p>
            <div className="blog-grid">
              <Link href="/blog" className="blog-card fade-up">
                <svg viewBox="0 0 600 440" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '220px', display: 'block' }}>
                  <defs>
                    <linearGradient id="hSky" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#e8c4a0" />
                      <stop offset="45%" stopColor="#e0a080" />
                      <stop offset="75%" stopColor="#d4928a" />
                      <stop offset="100%" stopColor="#b87878" />
                    </linearGradient>
                    <radialGradient id="hGlow" cx="50%" cy="62%" r="28%">
                      <stop offset="0%" stopColor="#fff4d6" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#e0a080" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <rect width="600" height="440" fill="url(#hSky)" />
                  <circle cx="300" cy="280" r="130" fill="url(#hGlow)" />
                  <circle cx="300" cy="300" r="38" fill="#fff4d6" opacity="0.55" />
                  <circle cx="300" cy="300" r="24" fill="#fffbe8" opacity="0.4" />
                  <path d="M0 310 Q80 275 180 300 Q280 270 380 295 Q480 265 600 300 L600 440 L0 440Z" fill="#2E0F13" opacity="0.45" />
                  <path d="M0 340 Q140 305 300 330 Q460 305 600 335 L600 440 L0 440Z" fill="#2E0F13" opacity="0.55" />
                  <line x1="130" y1="330" x2="130" y2="300" stroke="#2E0F13" strokeWidth="2.5" opacity="0.5" />
                  <circle cx="130" cy="295" r="11" fill="#2E0F13" opacity="0.45" />
                  <line x1="470" y1="320" x2="470" y2="288" stroke="#2E0F13" strokeWidth="2.5" opacity="0.5" />
                  <circle cx="470" cy="283" r="13" fill="#2E0F13" opacity="0.45" />
                  <line x1="300" y1="240" x2="260" y2="160" stroke="#fff4d6" strokeWidth="1" opacity="0.2" />
                  <line x1="300" y1="240" x2="300" y2="145" stroke="#fff4d6" strokeWidth="1.5" opacity="0.25" />
                  <line x1="300" y1="240" x2="340" y2="155" stroke="#fff4d6" strokeWidth="1" opacity="0.2" />
                  <polygon points="160,90 163,100 173,100 165,106 168,116 160,110 152,116 155,106 147,100 157,100" fill="#fff4d6" opacity="0.3" />
                  <polygon points="440,70 442,77 449,77 444,81 446,88 440,84 434,88 436,81 431,77 438,77" fill="#fff4d6" opacity="0.25" />
                  <polygon points="85,55 87,61 93,61 88,65 90,71 85,67 80,71 82,65 77,61 83,61" fill="#fff4d6" opacity="0.18" />
                  <polygon points="520,120 522,126 528,126 523,129 525,135 520,132 515,135 517,129 512,126 518,126" fill="#fff4d6" opacity="0.22" />
                  <rect x="291" y="376" width="18" height="44" rx="3" fill="#2E0F13" opacity="0.45" />
                  <ellipse cx="300" cy="373" rx="7" ry="11" fill="#e8c4a0" opacity="0.5" />
                  <ellipse cx="300" cy="370" rx="3.5" ry="6" fill="#fff4d6" opacity="0.55" />
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
        </section>

        <section className="dedication-section">
          <div className="dedication-inner">
            <h2 className="fade-up">Dedication</h2>
            <p className="fade-up">Sunshine After Loss is lovingly dedicated to two men whose love continues to guide my life.</p>
            <div className="dedication-divider"></div>
            <p className="fade-up">To Joe; my late husband — who loved me for exactly who I am; who made me better, challenged me, kept me grounded, and swore he would stay close. He promised that I would be okay, and he believed that even in loss, something truly good would come from our experience.</p>
            <div className="dedication-divider"></div>
            <p className="fade-up">And to my Dad — to him I was &ldquo;Sunshine&rdquo;; he was the first man that loved me, was my biggest cheerleader, he held me up when all I wanted to do was fall, and he gave me strength...so much strength!</p>
            <div className="dedication-divider"></div>
            <p className="fade-up">Their love, wisdom, and promises are the foundation of Sunshine After Loss.</p>
            <p className="fade-up" style={{ marginTop: '24px' }}>Today, that foundation is carried forward through my angel on earth, David — my sunshine after loss. His love and support inspire me to help others find hope, healing, and courage to move forward.</p>
          </div>
        </section>

      </main>
    </>
  )
}
