import { Link } from 'gatsby'
import React from 'react'
import image from '../assets/images/about.jpg'

const About = () => (
  <section id="about" className="main">
    <div className="spotlight">
      <div className="content">
        <header className="major">
          <h2>Read about me</h2>
        </header>
        <div className="bio">
          <h3>Hi! I'm Darren.</h3>
          <p>I am a 23 year old Las Vegas-based software engineer.</p>
          <p>
            I am an alumnus of the University of Nevada, Las Vegas where I
            graduated in December 2019 with a B.S. in Computer Science.
          </p>
          <p>
            I am currently pursing a career in Software Engineering. However, I
            am open to exploring other opportunities in Computer Science as
            earning my degree has taught me how to quickly grasp new ideas and
            new tools to solve problems.
          </p>
          <p>
            My works are on my GitHub, where I keep some old coursework and push
            new personal projects. If you would like to check out my GitHub,
            click <a href="https://github.com/WongDarren">here.</a>
          </p>
        </div>

        {/*
            <ul className="actions">
              <li>
                <Link to="/generic" className="button">
                  Want to see more?
                </Link>
              </li>
            </ul>
          */}
      </div>
      <span className="image">
        <img src={image} alt="" />
      </span>
    </div>
  </section>
)

export default About
