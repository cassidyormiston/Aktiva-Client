import React from 'react'
import './HeroNavBar.css'

const HeroNavBar = (props) => {
  return (
    <div className='nav'>
        <div className='navbar-container'>
            <button onClick={props.toggleSignUp} className='sign-button'>- Sign Up</button>
            <button onClick={props.toggleSignIn} className='sign-button'>- Sign In</button>
        </div>
    </div>
  )
}

export default HeroNavBar