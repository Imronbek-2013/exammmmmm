import React from 'react'
import { Link } from 'react-router-dom'
import img2 from '../assets/Image (9).png'
import img3 from '../assets/01.svg'
import img4 from '../assets/02.svg'
import img5 from '../assets/03.svg'
import img6 from '../assets/04.svg'
import img7 from '../assets/05.svg'
import img8 from '../assets/Image (10).png'
import img9 from '../assets/Image (11).png'
import img10 from '../assets/Image (12).png'
import img11 from '../assets/Image (13).png'
import img12 from '../assets/Image (14).png'
import img13 from '../assets/Image (15).png'
import img14 from '../assets/Image (16).png'
import { ArrowIcon, PhoneIcon } from '../components/Icons'

function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <h1>Let Your Home Be Unique</h1>
            <p>There are many variations of the passages of lorem Ipsum fromavailable,variations of the passages.</p>
            <Link className="btn" to="/projects">Get Started <ArrowIcon /></Link>
          </div>
          <div className="hero__media">
            <img src={img2} alt="Modern living room" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container features__grid">
          <div className="features__item">
            <h4>Project Plan</h4>
            <p>There are many variations of the passages of lorem Ipsum from available, majority.</p>
            <Link className="link-more" to="/projects">Read More <ArrowIcon /></Link>
          </div>
          <div className="features__item">
            <h4>Interior Work</h4>
            <p>There are many variations of the passages of lorem Ipsum from available, majority.</p>
            <Link className="link-more" to="/projects">Read More <ArrowIcon /></Link>
          </div>
          <div className="features__item">
            <h4>Realization</h4>
            <p>There are many variations of the passages of lorem Ipsum from available, majority.</p>
            <Link className="link-more" to="/projects">Read More <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      {/* We create the art */}
      <section className="art">
        <div className="container art__inner">
          <div className="art__content">
            <h2>We Create The Art Of Stylish Living Stylishly</h2>
            <p>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.</p>
            <div className="art__call">
              <span className="art__call-icon"><PhoneIcon /></span>
              <div>
                <strong>012345678</strong>
                <span>Call Us Anytime</span>
              </div>
            </div>
            <Link className="btn" to="/contact">Get Free Estimate <ArrowIcon /></Link>
          </div>
          <div className="art__media">
            <img src={img2} alt="Stylish interior" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="testimonials__box">
            <h2>What the People Thinks About Us</h2>
            <div className="testimonials__grid">
              <div className="testimonial">
                <div className="testimonial__head">
                  <img src={img3} alt="Nattasha Mith" />
                  <div>
                    <strong>Nattasha Mith</strong>
                    <span>Sydney, USA</span>
                  </div>
                </div>
                <p>Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.</p>
              </div>
              <div className="testimonial">
                <div className="testimonial__head">
                  <img src={img4} alt="Raymond Galario" />
                  <div>
                    <strong>Raymond Galario</strong>
                    <span>Sydney, Australia</span>
                  </div>
                </div>
                <p>Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.</p>
              </div>
              <div className="testimonial">
                <div className="testimonial__head">
                  <img src={img5} alt="Benny Roll" />
                  <div>
                    <strong>Benny Roll</strong>
                    <span>Sydney, New York</span>
                  </div>
                </div>
                <p>Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="brands">
        <div className="container brands__grid">
          <a href="#"><img src={img3} alt="Brand" /></a>
          <a href="#"><img src={img4} alt="Brand" /></a>
          <a href="#"><img src={img5} alt="Brand" /></a>
          <a href="#"><img src={img6} alt="Brand" /></a>
          <a href="#"><img src={img7} alt="Brand" /></a>
        </div>
      </section>

      {/* Follow our projects */}
      <section className="projects">
        <div className="container">
          <div className="section-head">
            <h2>Follow Our Projects</h2>
            <p>It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.</p>
          </div>

          <div className="projects__grid">
            <article className="project-card">
              <div className="project-card__thumb"><img src={img8} alt="Modern Kitchan" /></div>
              <div className="project-card__body">
                <div>
                  <h4>Modern Kitchan</h4>
                  <p>Decor / Artchitecture</p>
                </div>
                <Link className="btn-round" to="/projectsingle" aria-label="Open project"><ArrowIcon /></Link>
              </div>
            </article>
            <article className="project-card">
              <div className="project-card__thumb"><img src={img9} alt="Modern Kitchan" /></div>
              <div className="project-card__body">
                <div>
                  <h4>Modern Kitchan</h4>
                  <p>Decor / Artchitecture</p>
                </div>
                <Link className="btn-round" to="/projectsingle" aria-label="Open project"><ArrowIcon /></Link>
              </div>
            </article>
            <article className="project-card">
              <div className="project-card__thumb"><img src={img10} alt="Modern Kitchan" /></div>
              <div className="project-card__body">
                <div>
                  <h4>Modern Kitchan</h4>
                  <p>Decor / Artchitecture</p>
                </div>
                <Link className="btn-round" to="/projectsingle" aria-label="Open project"><ArrowIcon /></Link>
              </div>
            </article>
            <article className="project-card">
              <div className="project-card__thumb"><img src={img11} alt="Modern Kitchan" /></div>
              <div className="project-card__body">
                <div>
                  <h4>Modern Kitchan</h4>
                  <p>Decor / Artchitecture</p>
                </div>
                <Link className="btn-round" to="/projectsingle" aria-label="Open project"><ArrowIcon /></Link>
              </div>
            </article>
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

      {/* Articles & News */}
      <section className="articles">
        <div className="container">
          <div className="section-head">
            <h2>Articles &amp; News</h2>
            <p>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
          </div>

          <div className="articles__grid">
            <article className="article-card">
              <img src={img12} alt="Building construction work" />
              <h3>Let’s Get Solution For Building Construction Work</h3>
              <div className="article-card__foot">
                <p>26 December,2022</p>
                <Link className="btn-round" to="/blogsingle" aria-label="Read article"><ArrowIcon /></Link>
              </div>
            </article>
            <article className="article-card">
              <img src={img13} alt="Interior designing ideas" />
              <h3>Low Cost Latest Invented Interior Designing Ideas.</h3>
              <div className="article-card__foot">
                <p>22 December,2022</p>
                <Link className="btn-round" to="/blogsingle" aria-label="Read article"><ArrowIcon /></Link>
              </div>
            </article>
            <article className="article-card">
              <img src={img14} alt="Office interior solution" />
              <h3>Best For Any Office &amp; Business Interior Solution</h3>
              <div className="article-card__foot">
                <p>25 December,2022</p>
                <Link className="btn-round" to="/blogsingle" aria-label="Read article"><ArrowIcon /></Link>
              </div>
            </article>
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

export default Home
