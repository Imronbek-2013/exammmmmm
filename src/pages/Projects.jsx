import React from 'react'
import { Link } from 'react-router-dom'
import img2 from '../assets/Image (27).png'
import img3 from '../assets/Image (28).png'
import img4 from '../assets/Image (29).png'
import img5 from '../assets/Photo.png'
import img6 from '../assets/Image (30).png'
import img7 from '../assets/Image (31).png'
import img8 from '../assets/Image (32).png'
import img9 from '../assets/Image (33).png'
import { ArrowIcon } from '../components/Icons'

const filters = ['Bathroom', 'Bed Room', 'Kitchen', 'Living Area']

const projects = [
  { image: img2, title: 'Minimal Bedroom' },
  { image: img3, title: 'Classic Minimal Bedroom' },
  { image: img4, title: 'Minimal Bedroom' },
  { image: img5, title: 'Minimal Bedroom' },
  { image: img6, title: 'Minimal Bedroom table' },
  { image: img7, title: 'System Table' },
  { image: img8, title: 'Modern Medroom' },
  { image: img9, title: 'Modern Bedroom' },
]

function Projects() {
  return (
    <main>
      {/* Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner__box">
            <h1>Our Project</h1>
            <p>Home / Project</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="projects">
        <div className="container">
          <div className="projects__filters">
            {filters.map((filter) => (
              <button type="button" key={filter}>{filter}</button>
            ))}
          </div>

          <div className="projects__grid">
            {projects.map((project, index) => (
              <article className="project-card" key={`${project.title}-${index}`}>
                <div className="project-card__thumb"><img src={project.image} alt={project.title} /></div>
                <div className="project-card__body">
                  <div>
                    <h4>{project.title}</h4>
                    <p>Decor / Artchitecture</p>
                  </div>
                  <Link className="btn-round" to="/projectsingle" aria-label="Open project"><ArrowIcon /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Projects
