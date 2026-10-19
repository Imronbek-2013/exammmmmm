import React from 'react'
import { useNavigate } from 'react-router-dom'
import bg from '../assets/Banner (1).jpg'
import map from '../assets/Map.png'
import { ArrowIcon, MailIcon, PhoneIcon, GlobeIcon } from '../components/Icons'

function Contact() {
  const navigate = useNavigate()

  const add = () => {
    const name = document.querySelector('.name')?.value || ''
    const email = document.querySelector('.email')?.value || ''
    const subject = document.querySelector('.subject')?.value || ''
    const phone = document.querySelector('.phone')?.value || ''
    const message = document.querySelector('.message')?.value || ''
    if ([name, email, subject, phone, message].some((value) => value.trim() === '')) {
      alert('Please fill in all fields')
    } else {
      navigate('/')
    }
  }

  return (
    <main>
      {/* Hero image */}
      <section className="contact-hero">
        <div className="container">
          <img src={bg} alt="Interior studio" />
        </div>
      </section>

      {/* Contact */}
      <section className="contact-content">
        <div className="container">
          <h2>{'We love meeting new people\nand helping them.'}</h2>

          <div className="contact-content__inner">
            <div className="contact-card">
              <div className="contact-card__item"><span><MailIcon /></span><span>info@yourdomain.com</span></div>
              <div className="contact-card__item"><span><PhoneIcon /></span><span>+1 (378) 400-1234</span></div>
              <div className="contact-card__item"><span><GlobeIcon /></span><span>www.yourdomain.com</span></div>
              <div className="contact-card__socials" aria-label="Social media">
                <a href="#">f</a>
                <a href="#">♥</a>
                <a href="#">in</a>
                <a href="#">◎</a>
              </div>
            </div>

            <form className="form-grid contact-form" onSubmit={(event) => event.preventDefault()}>
              <input className="name" type="text" placeholder="Name" />
              <input className="email" type="email" placeholder="Email" />
              <input className="subject" type="text" placeholder="Subject" />
              <input className="phone" type="tel" placeholder="Phone" />
              <textarea className="form-grid__wide message" placeholder="Hello Iam Intrested in.." />
              <button className="btn" type="button" onClick={add}>Send Now <ArrowIcon /></button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="contact-map">
        <div className="container">
          <img src={map} alt="Map" />
        </div>
      </section>
    </main>
  )
}

export default Contact
