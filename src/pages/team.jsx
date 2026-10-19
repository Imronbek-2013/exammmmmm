import React from 'react'
import img1 from '../assets/Image (44).png'
import img2 from '../assets/Image (45).png'
import img3 from '../assets/Image (46).png'
import img4 from '../assets/Image (47).png'
import img5 from '../assets/Image (48).png'
import img6 from '../assets/Image (49).png'
import img7 from '../assets/Image (50).png'
import img8 from '../assets/Image (51).png'
import social from '../assets/Icon (4).png'

const members = [
  { id: '44', image: img1, name: 'Charlotte Levi' },
  { id: '45', image: img2, name: 'Nattasha Julie' },
  { id: '46', image: img3, name: 'John Smith' },
  { id: '47', image: img4, name: 'Nora Owen' },
  { id: '48', image: img5, name: 'Sofia Carter' },
  { id: '49', image: img6, name: 'Avery Jackson' },
  { id: '50', image: img7, name: 'Luna James' },
  { id: '51', image: img8, name: 'Gianna Mateo' },
]

function Team() {
  return (
    <main>
      {/* Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner__box">
            <h1>Our Professional</h1>
            <p>Home / Team</p>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="team-page">
        <div className="container team-page__grid">
          {members.map((member) => (
            <a className="team-card" href={`/team/${member.id}`} key={member.id}>
              <div className="team-card__photo">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-card__body">
                <h3>{member.name}</h3>
                <p>Design, Australia</p>
                <img src={social} alt="" />
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Team
