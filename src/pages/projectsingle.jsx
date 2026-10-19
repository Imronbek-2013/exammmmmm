import React from 'react'
import img2 from '../assets/Image (34).png'

const meta = [
  ['Client', 'Your client name'],
  ['Category', 'Interiors'],
  ['Tags', 'interior, Home'],
  ['Date', 'Date 23,02, 2022'],
  ['Link', 'Link example.com'],
]

function ProjectSingle() {
  return (
    <main>
      {/* Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner__box">
            <h1>Project Details</h1>
            <p>Home / Project Details</p>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="project-details">
        <div className="container project-details__inner">
          <dl className="project-meta">
            {meta.map(([term, value]) => (
              <div className="project-meta__row" key={term}>
                <dt>{term}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <div className="project-body">
            <h2>Minimal Look Bedrooms</h2>
            <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.

In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.`}</p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="project-image">
        <div className="container">
          <img src={img2} alt="Minimal look bedroom" />
        </div>
      </section>
    </main>
  )
}

export default ProjectSingle
