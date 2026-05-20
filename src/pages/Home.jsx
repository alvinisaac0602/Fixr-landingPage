import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className="page page-home">
      <section className="hero section">
        <div className="hero-copy">
          <span className="eyebrow">On-Demand Mechanics</span>
          <h1>Fixr brings expert roadside service directly to you.</h1>
          <p>
            Book certified mechanics, request fast roadside assistance, and manage repairs all from the Fixr mobile app.
            We deliver dependable service wherever your vehicle needs help.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" to="/contact">
              Book a mechanic
            </Link>
            <Link className="button button-secondary" to="/services">
              Explore services
            </Link>
          </div>
        </div>

        <div className="hero-panel">
          <div className="stats-card">
            <div>
              <strong>24/7 service</strong>
              <p>Immediate roadside support no matter the hour.</p>
            </div>
            <div>
              <strong>Verified mechanics</strong>
              <p>Trusted professionals with fast arrival times.</p>
            </div>
            <div>
              <strong>Mobile app</strong>
              <p>Available on the App Store and Google Play.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section feature-grid">
        <article className="feature-card">
          <h2>Roadside response</h2>
          <p>
            Fast help for flat tires, jump starts, lockouts, and fuel delivery so you can get back on the road with confidence.
            If your vehicle needs more support, Fixr also links broken down cars to nearby trusted garages and towing partners.
          </p>
        </article>
        <article className="feature-card">
          <h2>Mobile diagnostics</h2>
          <p>
            Our team performs on-site inspections and provides transparent repair recommendations before any work begins.
          </p>
        </article>
        <article className="feature-card">
          <h2>Reliable repairs</h2>
          <p>
            From brake service to preventive maintenance, Fixr technicians handle your vehicle with care and craftsmanship.
          </p>
        </article>
      </section>

      <section className="section">
        <span className="eyebrow">How Fixr works</span>
        <h2>Get help in three simple steps.</h2>
        <ul className="process-list">
          <li>
            <strong>1. Request service:</strong> Open the app, choose your issue, and share your location.
          </li>
          <li>
            <strong>2. Confirm a mechanic:</strong> Review mechanic profiles, ETA, and pricing before booking.
          </li>
          <li>
            <strong>3. Receive support:</strong> A certified mechanic arrives, resolves the problem, and completes service details in the app.
          </li>
        </ul>
      </section>

      <section className="section feature-grid">
        <article className="feature-card">
          <h2>Fast arrival</h2>
          <p>
            Our dispatch network reduces wait times with local mechanics ready to respond across service areas.
          </p>
        </article>
        <article className="feature-card">
          <h2>Transparent pricing</h2>
          <p>
            See cost estimates up front and approve service before work begins, with no surprise fees.
          </p>
        </article>
        <article className="feature-card">
          <h2>App-based tracking</h2>
          <p>
            Track mechanic arrival and access service history right from your phone.
          </p>
        </article>
      </section>

      <section className="section">
        <div className="hero-copy">
          <span className="eyebrow">Trusted by drivers</span>
          <h2>The easiest way to manage vehicle emergencies on the go.</h2>
          <p>
            Fixr is built for drivers who need dependable support without calling multiple shops. Whether you need a quick fix or a scheduled repair,
            our app puts a certified mechanic in your pocket.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/contact">
              Start a request
            </Link>
            <Link className="button button-secondary" to="/services">
              View all offerings
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home