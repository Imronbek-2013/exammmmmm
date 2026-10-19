import React from 'react'
import { Link } from 'react-router-dom'
import img2 from '../assets/Image (17).png'
import img3 from '../assets/Image (18).png'
import img4 from '../assets/1.png'
import img5 from '../assets/2.png'
import img7 from '../assets/Image (19).png'
import { ArrowIcon } from '../components/Icons'

function About() {
  const add = () => {
    const name = document.querySelector('.name')?.value || ''
    const email = document.querySelector('.email')?.value || ''

    if (name === '' || email === '') {
      alert('End all inputs')
    } else {
      alert('massage sended sucefully')
    }
  }

  return (
    <main>
      {/* Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner__box">
            <h1>About Us</h1>
            <p>Home / About Us</p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="quote">
        <div className="container">
          <div className="quote__box">
            <span className="quote__mark">“</span>
            <h2>I like an interior that defies labeling. I don't really want someone to walk into a room and know that I did it</h2>
            <cite>-BUNNY WILLIAMS</cite>
          </div>
        </div>
      </section>

      {/* What we do / The end result */}
      <section className="about-block">
        <div className="container">
          <div className="about-block__row">
            <div className="about-block__text">
              <h2>What We Do</h2>
              <p>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.</p>
              <Link className="btn" to="/projects">Our Concept <ArrowIcon /></Link>
            </div>
            <div>
              <img src={img2} alt="What We Do" />
            </div>
          </div>

          <div className="about-block__row about-block__row--reverse">
            <div className="about-block__text">
              <h2>The End Result</h2>
              <p>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.</p>
              <Link className="btn" to="/projects">Our Portfolio <ArrowIcon /></Link>
            </div>
            <div>
              <img src={img3} alt="The End Result" />
            </div>
          </div>
        </div>
      </section>

      {/* Team strip */}
      <section className="team-strip">
        <div className="container">
          <div className="section-head">
            <h2>What the People Thinks About Us</h2>
          </div>
          <div className="team-strip__grid">
            <Link to="/team"><img src={img4} alt="Team Member" /></Link>
            <Link to="/team"><img src={img5} alt="Team Member" /></Link>
            <div className="team-strip__card">
              <h3>{'Nattasha Julie\nDesign, Australia'}</h3>
              <div className="team-strip__contacts">
                <span>+1 (378) 400-1234</span>
                <span>julie@email.com</span>
              </div>
            </div>
            <Link to="/team"><img src={img7} alt="Team Member" /></Link>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="contact-form-section">
        <div className="container">
          <h2>{"Creative project? Let's have\na productive talk."}</h2>
          <form className="form-grid" onSubmit={(event) => event.preventDefault()}>
            <input className="name" type="text" placeholder="Name" />
            <input className="email" type="email" placeholder="Email" />
            <input className="other form-grid__wide" type="text" placeholder="Hello Iam Intrested in.." />
            <button className="btn" type="button" onClick={add}>Send <ArrowIcon /></button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default About
