import React from 'react'

const Contact = () => {
  return (
    <main className="page page-contact">
      <section className="section contact-grid">
        <div>
          <span className="eyebrow">Contact</span>
          <h1>Connect with Fixr support.</h1>
          <p>
            Need service, support, or assistance booking? Our team is ready to help you on the road and in the app.
          </p>

          <div className="contact-details">
            <div>
              <strong>Email</strong>
              <p>support@fixr.com</p>
            </div>
            <div>
              <strong>Phone</strong>
              <p>+1 (555) 012-3456</p>
            </div>
            <div>
              <strong>App support</strong>
              <p>App Store &amp; Google Play assistance</p>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <label>
            Full name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email address
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Service request
            <textarea placeholder="Describe your vehicle issue or request"></textarea>
          </label>
          <button type="submit" className="button button-primary">
            Submit request
          </button>
        </form>
      </section>
    </main>
  )
}

export default Contact