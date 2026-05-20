import React from 'react'

const Careers = () => {
  return (
    <main className="page page-careers">
      <section className="section">
        <span className="eyebrow">Careers</span>
        <h1>Build the future of on-demand automotive service.</h1>
        <p>
          Fixr is growing fast. Join a team of mechanics, support specialists, and operations experts who help drivers stay safe and moving.
        </p>
      </section>

      <section className="section career-grid">
        <article className="career-card">
          <h2>Field mechanic</h2>
          <p>Deliver roadside assistance and repair services directly to customers across the city.</p>
          <p><strong>Location:</strong> Local region</p>
        </article>
        <article className="career-card">
          <h2>Driver operations</h2>
          <p>Coordinate technician dispatch, manage service routes, and keep response times fast.</p>
          <p><strong>Location:</strong> Remote / hybrid</p>
        </article>
        <article className="career-card">
          <h2>Customer support</h2>
          <p>Support app users with booking, billing, and vehicle service guidance.</p>
          <p><strong>Location:</strong> Remote</p>
        </article>
      </section>

      <section className="section">
        <h2>Why work with Fixr?</h2>
        <ul className="benefits-list">
          <li>Impactful work supporting drivers in real time</li>
          <li>Flexible schedules and clear performance goals</li>
          <li>Professional training and mechanic certification support</li>
        </ul>
      </section>
    </main>
  )
}

export default Careers