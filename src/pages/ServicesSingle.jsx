import React from 'react'
import { Link } from 'react-router-dom'
import img2 from '../assets/01.svg'
import img3 from '../assets/02.svg'
import img4 from '../assets/03.svg'
import img5 from '../assets/04.svg'
import img6 from '../assets/05.svg'
import img7 from '../assets/Image (25).png'
import { ArrowIcon } from '../components/Icons'

const bullets = [
  'We provide high quality design services.',
  'Project on time and Latest Design.',
  'Scientific Skills For getting a better result.',
  'Renovations Benefit of Service',
  'We are confident about our projects.',
]

function ServiceSingle() {
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

      {/* Intro */}
      <section className="service-intro">
        <div className="container">
          <h2>{'We set the trends of\nmodern living\nServices.'}</h2>
          <p>
            <b>It is a long established fact that a reader will be distracted by the of readable content of a page </b><br /><br />
            when lookings at its layouts the points spriof using that it has a more
            less normal.A wonderful serenity has taken pgossession of my entire soul, like thesce sweet morndsings of sphring which I enjoy with my forwhole heart. I am alone, and feel the charm of excgistence in this spot, which was created for the bliss of souls like mine.
            <br /><br />
            when lookings at its layouts the points spriof using that it has a more
            less normal.A wonderful serenity has taken pgossession of my entire soul, like thesce sweet morndsings of sphring which I enjoy with my forwhole heart. I am alone, and feel the charm of excgistence in this spot, which was created for the bliss of souls like mine.
          </p>
        </div>
      </section>

      {/* Brands */}
      <section className="brands">
        <div className="container brands__grid">
          <a href="#"><img src={img2} alt="Brand" /></a>
          <a href="#"><img src={img3} alt="Brand" /></a>
          <a href="#"><img src={img4} alt="Brand" /></a>
          <a href="#"><img src={img5} alt="Brand" /></a>
          <a href="#"><img src={img6} alt="Brand" /></a>
        </div>
      </section>

      {/* Video */}
      <section className="video-block">
        <div className="container">
          <iframe
            src="https://www.youtube.com/embed/5GgvVXTzYVw"
            title="Modern house video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Use of interior */}
      <section className="use-list">
        <div className="container use-list__cols">
          <div>
            <h2>Use of Interior</h2>
            <ol>
              {bullets.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </div>
          <div>
            <ol>
              {bullets.map((item) => <li key={`second-${item}`}>{item}</li>)}
            </ol>
          </div>
        </div>
      </section>

      {/* Portrait */}
      <section className="portrait">
        <div className="container portrait__inner">
          <div><img src={img7} alt="We love design" /></div>
          <div>
            <h2>We love design.That's how we got here.</h2>
            <p>It is a long established fact that a reader will be distracted by the of readable content .</p>
            <Link className="btn" to="/projects">Our Portfolio <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="container">
          <div className="stats__box">
            <div className="stats__item">
              <h2>12</h2>
              <p>Years Of Experiance</p>
            </div>
            <div className="stats__item">
              <h2>85</h2>
              <p>Success Project</p>
            </div>
            <div className="stats__item">
              <h2>15</h2>
              <p>Active Projects</p>
            </div>
            <div className="stats__item">
              <h2>95</h2>
              <p>Happy CUstomers</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ServiceSingle
