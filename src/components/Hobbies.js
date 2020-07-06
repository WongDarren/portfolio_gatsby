import { Link } from 'gatsby'
import React from 'react'
import image from '../assets/images/about.jpg'

const Hobbies = () => (
  
<section id="hobbies" className="main special">
  <header className="major">
    <h2>Hobbies</h2>
    <p>
      On top of software engineering, I'd like to think I have a ton of hobbies!
    </p>
  </header>
  <ul className="statistics">
    <li className="style3">
      <span className="icon fa-gamepad"></span>
      <strong>Video Games</strong>
    </li>
    <li className="style2">
      <span className="icon fa-dumbbell"></span>
      <strong>Powerlifting</strong>
    </li>
    <li className="style3">
      <span className="icon fa-table-tennis"></span>
      <strong>Ping Pong</strong>
    </li>
    <li className="style2">
      <span className="icon fa-volleyball-ball"></span>
      <strong>Volleyball</strong>
    </li>
    <li className="style3">
      <span className="icon fa-hamburger"></span>
      <strong>Food</strong>
    </li>
  </ul>
  <p className="content">
    Competitive video games are my favorite. The focus, teamwork, and communication aspects of playing video games are the best.
    League of Legends and Valorant are two games that have a competitive nature even when I am playing their casual game modes.
    They are both team games where each team must communicate and perform to win. Besides competitive team games, I also love 
    role playing games (RPG), real time strategy (RTS), and massively multiplayer online (MMO) style games.
    <br/>
    <br/>
    I also love participating in sports such as powerlifting, ping pong, volleyball, and much more. I believe working out and playing sports
    with friends are the best ways to keep in shape and build strong bonds with one another. 
    <br/>
    <br/>
    Last but not least is my love for food. Whether I am in Vegas or out of town, one of my favorite things to do is to find awesome restaurants to eat at.
    Some of my favorite memories are eating out with coworkers, friends, and families. A great meal followed up with sweet desserts is honestly the most satisfying feeling.
  </p>
  {
    /*
      <footer className="major">
        <ul className="actions">
          <li>
            <Link to="/generic" className="button">
              Learn More
            </Link>
          </li>
        </ul>
      </footer>
    */
  }

</section>
)

export default Hobbies
