import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/Image (35).png'
import img2 from '../assets/Image (36).png'
import img3 from '../assets/Image (37).png'
import img4 from '../assets/Image (38).png'
import img5 from '../assets/Image (39).png'
import img6 from '../assets/Image (40).png'
import img7 from '../assets/Image (41).png'
import { ArrowIcon } from '../components/Icons'

const posts = [
  { image: img2, title: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022' },
  { image: img3, title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022' },
  { image: img4, title: 'Best For Any Office & Business Interior Solution', date: '25 December,2022' },
  { image: img5, title: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022' },
  { image: img6, title: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022' },
  { image: img7, title: 'Best For Any Office & Business Interior Solution', date: '25 December,2022' },
]

function Blog() {
  return (
    <main>
      {/* Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="page-banner__box">
            <h1>Articles &amp; News</h1>
            <p>Home / Blog</p>
          </div>
        </div>
      </section>

      {/* Latest post */}
      <section className="blog-latest">
        <div className="container">
          <h2>Latest Post</h2>
          <div className="blog-latest__inner">
            <img src={img} alt="Low cost interior designing ideas" />
            <div className="blog-latest__text">
              <h4>Low Cost Latest Invented Interior Designing Ideas</h4>
              <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p>
              <p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
              <div className="blog-latest__foot">
                <p>26 December,2022</p>
                <Link className="btn-round" to="/blogsingle" aria-label="Read article"><ArrowIcon /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="blog-grid">
        <div className="container">
          <h2>Articles &amp; News</h2>
          <div className="articles__grid">
            {posts.map((post, index) => (
              <article className="article-card" key={`${post.title}-${index}`}>
                <img src={post.image} alt={post.title} />
                <h3>{post.title}</h3>
                <div className="article-card__foot">
                  <p>{post.date}</p>
                  <Link className="btn-round" to="/blogsingle" aria-label="Read article"><ArrowIcon /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Blog
