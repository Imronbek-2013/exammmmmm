import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import image44 from '../assets/Image (44).png'
import image45 from '../assets/Image (45).png'
import image46 from '../assets/Image (46).png'
import image47 from '../assets/Image (47).png'
import image48 from '../assets/Image (48).png'
import image49 from '../assets/Image (49).png'
import image50 from '../assets/Image (50).png'
import image51 from '../assets/Image (51).png'
import img4 from '../assets/1.png'
import img5 from '../assets/2.png'
import img7 from '../assets/Image (19).png'
import { ArrowIcon, MailIcon, PhoneIcon, GlobeIcon } from '../components/Icons'

const teamMembers = [
  { id: '44', name: 'Charlotte Levi', image: image44 },
  { id: '45', name: 'Nattasha Julie', image: image45 },
  { id: '46', name: 'John Smith', image: image46 },
  { id: '47', name: 'Nora Owen', image: image47 },
  { id: '48', name: 'Sofia Carter', image: image48 },
  { id: '49', name: 'Avery Jackson', image: image49 },
  { id: '50', name: 'Luna James', image: image50 },
  { id: '51', name: 'Gianna Mateo', image: image51 },
]

const questions = [
  {
    title: 'Website & Mobile App Design?',
    answer: 'Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus.',
  },
  {
    title: 'How to Easy Successful Projects?',
    answer: 'Clear communication and thoughtful planning help every project move forward.',
  },
  {
    title: 'International Trade Experience?',
    answer: 'Our team works with clients and partners across international markets.',
  },
]

const skills = [
  ['Project Design', 65],
  ['Team Management', 95],
  ['Client Satisfaction', 75],
]

function TeamSingle() {
  const { id } = useParams()
  const member = teamMembers.find((person) => person.id === id) ?? teamMembers[0]
  const [openQuestion, setOpenQuestion] = useState(0)

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
      {/* Profile */}
      <section className="team-profile">
        <div className="container team-profile__inner">
          <img src={member.image} alt={member.name} />
          <div>
            <h2>{member.name}</h2>
            <p className="team-profile__role">Designer</p>
            <p className="team-profile__intro">
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contropbelie
              frandomised words which don’t look even slightly believable.
            </p>

            <div className="team-profile__contacts">
              <div className="team-profile__contact"><span><MailIcon /></span><span>info@yourdomain.com</span></div>
              <div className="team-profile__contact"><span><PhoneIcon /></span><span>+1 (378) 400-1234</span></div>
              <div className="team-profile__contact"><span><GlobeIcon /></span><span>www.yourdomain.com</span></div>
            </div>

            <div className="team-profile__socials" aria-label="Social media">
              <a href="#">f</a>
              <a href="#">♥</a>
              <a href="#">in</a>
              <a href="#">◎</a>
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="biography">
        <div className="container">
          <h2>Short Biography</h2>
          <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, njecthumour randomised words which don’t look even slightly believable.</p>
          <p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined but the majority have suffered alteration in some form chunks as necessary.</p>

          <div className="biography__columns">
            <div>
              <h3>Simplicity and Functionality</h3>
              <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in belief.</p>
              <p>There are many variations of passages of Lorem Ipsum from available, but the majority have suffered alteration in some form, njecthumour</p>

              <div className="team-skills">
                {skills.map(([label, value]) => (
                  <div className="skill" key={label}>
                    <div className="skill__label"><span>{label}</span><span>{value}%</span></div>
                    <div className="skill__track"><span style={{ width: `${value}%` }} /></div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3>Question And Answer</h3>
              <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.</p>

              <div className="faq">
                {questions.map((question, index) => (
                  <div className={`faq__item${openQuestion === index ? ' is-open' : ''}`} key={question.title}>
                    <button
                      className="faq__toggle"
                      type="button"
                      aria-expanded={openQuestion === index}
                      onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)}
                    >
                      <span>{question.title}</span>
                      <span aria-hidden="true">{openQuestion === index ? '−' : '+'}</span>
                    </button>
                    {openQuestion === index && <p className="faq__answer">{question.answer}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team strip */}
      <section className="team-strip">
        <div className="container">
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

export default TeamSingle
