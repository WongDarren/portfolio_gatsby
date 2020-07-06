import { Link } from 'gatsby'
import React from 'react'
import Data from './data/data.json'

class Projects extends React.Component {
  // always need constructor() {}
  constructor() {
    // need to call super so that we pull in all the things we need from our React.Component into our class
    super();

  }

  // This is the HTML we will render.
  render() {
    return (
      <section id="projects" className="main special">
        <header className="major">
          <h2>Projects</h2>
        </header>

        <ul className="features">
          {Data.map((project, index) => {
            return(
              <li>
                <a href={project.link} target='_blank'>   
                  <div className='spotlight'>
                    <span className='image project'>
                      <img src={project.image} alt="" />
                    </span>
                  </div>

                  <h2>{project.title}</h2>
                  <p>{project.subtitle}</p>
                </a>
              </li>
            ) 
          })}
        </ul>
      </section>
    )
  }
}

export default Projects

  

  
// <span className="icon major style1 fa-code"></span>

