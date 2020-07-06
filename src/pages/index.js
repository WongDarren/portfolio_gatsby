import React from 'react'

/*
This reusable React component will manage all of your changes to the document head.
Helmet takes plain HTML tags and outputs plain HTML tags. It's dead simple, and React beginner friendly.
*/
import Helmet from 'react-helmet'

/*
A React component to execute a function whenever you scroll to an element. Works in all containers that can scroll, including the window.
React Waypoint can be used to build features like lazy loading content, infinite scroll, scrollspies, or docking elements to the viewport on scroll.
*/
import { Waypoint } from 'react-waypoint'

import Layout from '../components/layout'
import Nav from '../components/Nav'
import About from '../components/About'
import Projects from '../components/Projects'
import Hobbies from '../components/Hobbies'
import Contact from '../components/Contact';

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Darren Wong - Portfolio" />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />

        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <About />
          <Projects />
          <Hobbies />
          <Contact />
        </div>

      </Layout>
    )
  }
}

export default Index
