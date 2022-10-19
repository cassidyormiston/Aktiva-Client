import React from 'react'
import {Link} from 'react-router-dom'
import './HomeNavBar.css'

const HomeNavBar = () => {
  return (
    <div className='home-nav'>
    <div className='home-navbar-container'>
        <h1 className="home-heading">Aktiva</h1>
    </div>
    <div className='home-button-container'>
        <div>
            <Link to="/profile">
                <button className='home-nav-button'>Profile</button>
            </Link>
        </div>
        <div>
            <Link to="/home">
                <button className='home-nav-button'>Home</button>
            </Link>
        </div>
    </div>
</div>
  )
}

export default HomeNavBar