import React from 'react'
import { Link } from 'react-router-dom'
import img2 from '../assets/Image (20).png'
import icon from '../assets/Icon.png'
import icon2 from '../assets/Icon (1).png'
import img3 from '../assets/Image (22).png'
import img4 from '../assets/Image (23).png'
import icon3 from '../assets/Icon (2).png'
import icon4 from '../assets/Icon (3).png'
import img5 from '../assets/Image (24).png'
import { ArrowIcon } from '../components/Icons'

const services = [
  'Project Plan',
  'Interior Work',
  'Retail Design',
  '2d/3d Art Work',
  'Interior Work',
  'Decoration Work',
]

function Services() {
  return (
    <main>
      {/* Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner__box">
            <h1>Services</h1>
            <p>Home / Services</p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="services-grid">
        <div className="container services-grid__list">
          {services.map((service, index) => (
            <article className="service-item" key={`${service}-${index}`}>
              <h4>{service}</h4>
              <p>There are many variations of the passages of lorem Ipsum from available, majority.</p>
              <Link className="link-more" to="/servicessingle">Read More <ArrowIcon /></Link>
            </article>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="work-process">
        <div className="container">
          <div className="section-head">
            <h2>How We Work</h2>
            <p>It is a long established fact will be distracted.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>

          <div className="work-process__row">
            <div><img src={img2} alt="Concept & Details" /></div>
            <div className="work-process__text">
              <div className="work-process__num">
                <img src={icon} alt="" />
                <h2>01</h2>
              </div>
              <h3>Concept &amp; Details</h3>
              <p>It is a long established fact will be distracted.Lorem Ipsum is simply dummy from text of the and typesetting indufstry.</p>
            </div>
          </div>

          <div className="work-process__row">
            <div className="work-process__text">
              <div className="work-process__num">
                <img src={icon2} alt="" />
                <h2>02</h2>
              </div>
              <h3>Idea for Work</h3>
              <p>It is a long established fact will be distracted.Lorem Ipsum is simply dummy from text of the and typesetting indufstry.</p>
            </div>
            <div><img src={img3} alt="Idea for Work" /></div>
          </div>

          <div className="work-process__row">
            <div><img src={img4} alt="Design" /></div>
            <div className="work-process__text">
              <div className="work-process__num">
                <img src={icon3} alt="" />
                <h2>03</h2>
              </div>
              <h3>Design</h3>
              <p>It is a long established fact will be distracted.Lorem Ipsum is simply dummy from text of the and typesetting indufstry.</p>
            </div>
          </div>

          <div className="work-process__row">
            <div className="work-process__text">
              <div className="work-process__num">
                <img src={icon4} alt="" />
                <h2>04</h2>
              </div>
              <h3>Perfection</h3>
              <p>It is a long established fact will be distracted.Lorem Ipsum is simply dummy from text of the and typesetting indufstry.</p>
            </div>
            <div><img src={img5} alt="Perfection" /></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <div className="cta__box">
            <div>
              <h2>Wanna join the interno?</h2>
              <p>It is a long established fact will be distracted.</p>
            </div>
            <Link className="btn btn--gold" to="/contact">Contact Us <ArrowIcon /></Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services
