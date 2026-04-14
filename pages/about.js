import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>About Us — Sunshine After Loss</title>
        <meta name="description" content="The heart behind Sunshine After Loss — a community built by a young widow to walk alongside others navigating life after loss." />
      </Head>
      <main>
        <div className="page-hero">
          <h1>About Us</h1>
          <p>The heart behind Sunshine After Loss</p>
        </div>
        <div className="inner-content">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <img
              src="https://static.wixstatic.com/media/8d010f_4a010a6fc2a445958991f2597b5ea870~mv2.jpg/v1/fill/w_300,h_233,al_c,lg_1,q_80,enc_avif,quality_auto/sunshine_after_loss_logo.jpg"
              alt="Sunshine After Loss Logo"
              style={{ width: '200px', borderRadius: '12px' }}
            />
          </div>
          <p>Through my journey of loss and renewal as a young widow, I&apos;ve learned that while grief can feel isolating, it can also become a source of strength and transformation. My hope is to share that strength here — to inspire and uplift others walking this path.</p>
          <p>At Sunshine After Loss, our mission is to walk alongside widows as they navigate life after loss — offering encouragement, connection, and hope. My own story is shaped by becoming a widow at a younger age, a time when very few around me could relate. Because of that, I hold a special place in my heart for younger widows who may feel isolated or unseen.</p>
          <p>Still, this is more than a space for widows alone. It is also a place for family and friends — those who have walked beside us, witnessed our struggles, and want to share encouragement of their own.</p>
          <h2>Our Dedication</h2>
          <p>Sunshine After Loss is lovingly dedicated to two men whose love continues to guide my life. To Joe, my late husband — who loved me for exactly who I am. And to my Dad — to him I was &ldquo;Sunshine.&rdquo;</p>
          <p>Today, that foundation is carried forward through my angel on earth, David — my sunshine after loss. His love and support inspire me to help others find hope, healing, and courage to move forward.</p>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/welcome" className="btn btn-primary">Join Our Community</Link>
          </div>
        </div>
      </main>
    </>
  )
}
