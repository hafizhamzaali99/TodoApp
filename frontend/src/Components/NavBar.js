import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='mainContainer'>
      <div className='navItem'>
        <h1>ToDo App</h1>
        <h3><Link to="/">Home</Link></h3>
        <h3><Link to="/login">Login</Link></h3>
        <h3><Link to="/signup">SignUp</Link></h3>
      </div>
      <div>
        <h3><Link to="/profile">Profile</Link></h3>
      </div>
    </div>
  )
}

export default NavBar
