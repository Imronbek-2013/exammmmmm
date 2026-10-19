import React from 'react'
import Banner from '../assets/Banner.jpg'
import img from '../assets/Image (42).png'
import img2 from '../assets/Image (43).png'
import { ArrowIcon } from '../components/Icons'

const recentPosts = [
  { title: 'We Focus On Comfort And Gorgeous', date: '06/02/2020' },
  { title: 'We Focus On Comfort And Gorgeous', date: '06/02/2020' },
  { title: 'We Focus On Comfort And Gorgeous', date: '06/02/2020' },
]

const categories = ['Decoration', 'Door Windows', 'Home Land', 'Roof Installation']
const sidebarTags = ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning', 'Bedroom']

function BlogSingle() {
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
      {/* Hero image */}
      <section className="blog-hero">
        <div className="container">
          <img src={Banner} alt="Building construction work" />
        </div>
      </section>

      {/* Post + sidebar */}
      <section className="blog-single">
        <div className="container blog-single__inner">
          <article className="blog-post">
            <h2>{'Let’s Get Solution for Building\nConstruction Work'}</h2>
            <img src={img} alt="Interior design" />
            <p>26 December,2022</p>
            <p>Interior / Design / Home / Decore</p>

            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p>
            <p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>

            <div className="blog-quote">
              <span className="blog-quote__mark">“</span>
              <h3><i>The details are not the details. They make the design.</i></h3>
            </div>

            <h2>Design sprints are great</h2>
            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            <ol>
              <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
              <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
              <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
            </ol>

            <img src={img2} alt="Interior detail" />
            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>

            <div className="blog-tags">
              <h3>Tags</h3>
              <button className="tag tag--solid" type="button">Kitchan</button>
              <button className="tag tag--solid" type="button">Bedroom</button>
            </div>

            <div className="contact-form-section">
              <h2>Leave a Reply</h2>
              <form className="form-grid" onSubmit={(event) => event.preventDefault()}>
                <input className="name" type="text" placeholder="Name" />
                <input className="email" type="email" placeholder="Email" />
                <input type="text" placeholder="Website" />
                <input type="tel" placeholder="Phone" />
                <input className="form-grid__wide" type="text" placeholder="Hello Iam Intrested in.." />
                <button className="btn" type="button" onClick={add}>Send Now <ArrowIcon /></button>
              </form>
            </div>
          </article>

          <aside className="blog-sidebar">
            <input type="search" placeholder="Search" />

            <div>
              <h4>Recent Post</h4>
              <div className="recent-post">
                {recentPosts.map((post, index) => (
                  <div className="recent-post__item" key={`${post.title}-${index}`}>
                    <h5>{post.title}</h5>
                    <p>{post.date}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4>Categories</h4>
              <div className="categories">
                {categories.map((category) => <div key={category}><p>{category}</p></div>)}
              </div>
            </div>

            <div>
              <h4>Tags</h4>
              <div className="blog-sidebar__tags">
                {sidebarTags.map((tag, index) => (
                  <button className="tag" type="button" key={`${tag}-${index}`}>{tag}</button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default BlogSingle
