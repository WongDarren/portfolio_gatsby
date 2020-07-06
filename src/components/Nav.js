import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
	<nav id="nav" className={props.sticky ? 'alt' : ''}>
		<Scrollspy items={ ['about', 'projects', 'hobbies', 'contact'] } currentClassName="is-active" offset={-300}>
			<li>
				<Scroll type="id" element="about">
					<a href="#">About Me</a>
				</Scroll>
			</li>
			<li>
				<Scroll type="id" element="projects">
					<a href="#">Projects</a>
				</Scroll>
			</li>
			<li>
				<Scroll type="id" element="hobbies">
					<a href="#">Hobbies</a>
				</Scroll>
			</li>
			<li>
				<Scroll type="id" element="contact">
					<a href="#">Contact</a>
				</Scroll>
			</li>
		</Scrollspy>
	</nav>
)

export default Nav
