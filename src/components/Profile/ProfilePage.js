import React from 'react'
import Gradient from '../../images/Gradient.jpeg'
import {Link} from 'react-router-dom'
import '../HomeNavBar/HomeNavBar.css'
import './ProfilePage.css'

const ProfilePage = (props) => {

  const signOut = () => {
    props.setUser(null)
  }

  // if (props.user) {
  //   name = props.user.firstName + " " + props.user.lastName;
  //   location = props.user.location;
  // }

  return (
      <div className="profile-container">
      <div className="profile-bg">
          <img src={Gradient} className="gradient-profile-bg" alt="background" />
      </div>
      <div className='profile-title'>
        <h1>{/*props.user.firstName + " " + props.user.lastName*/}Cassidy Ormiston</h1> 
        <Link to="/">
          {signOut()}
          <p>Sign Out</p>
        </Link>
      </div>
      <div className='profile-content'>
        <div className='profile-location'>
          <p>{/*props.user.location*/}Located in Brisbane, Australia</p>
        </div>
      </div>
      </div>
  )
}

export default ProfilePage