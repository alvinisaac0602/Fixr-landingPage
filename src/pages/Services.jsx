import React from 'react'

const Services = () => {
  return (
    <main className="page page-services">
      <section className="section">
        <span className="eyebrow">Services</span>
        <h1>Comprehensive vehicle support whenever you need it.</h1>
        <p>
          Fixr offers a full range of on-demand mechanic services designed for busy drivers.
          Our team brings smart repairs, routine maintenance, and emergency care wherever you are.
        </p>
      </section>

      <section className="section service-list">
        <article className="service-card">
          <h2>Roadside assistance</h2>
          <p>Battery jumps, flat tire service, fuel delivery, lockout support, and towing coordination.</p>
        </article>
        <article className="service-card">
          <h2>Repair appointments</h2>
          <p>Brake repair, engine diagnostics, suspension work, fluid service, and component replacement.</p>
        </article>
        <article className="service-card">
          <h2>Maintenance plans</h2>
          <p>Scheduled inspections, oil changes, safety checks, and preventive care for long-term reliability.</p>
        </article>
      </section>

      <section className="section">
        <h2>How Fixr works</h2>
        <ul className="process-list">
          <li><strong>1. Request service:</strong> Use the app to describe the issue and your location.</li>
          <li><strong>2. Confirm a mechanic:</strong> See arrival times, pricing, and technician details.</li>
          <li><strong>3. Receive service:</strong> Our mechanic arrives, resolves the issue, and documents the work.</li>
        </ul>
      </section>
    </main>
  )
}

export default Services