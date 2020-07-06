import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = () => (
  <header id="header" className="alt">
    <span className="logo"><img src={logo} alt="" /></span>
    <h1>Darren Wong</h1>
    <h2>Portfolio</h2>
  </header>
)

export default Header
