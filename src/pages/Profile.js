import React from 'react'
import ProfilePage from '../components/Profile/ProfilePage'
import HomeNavBar from '../components/HomeNavBar/HomeNavBar'
import '../components/HomeNavBar/HomeNavBar.css'

const Profile = (props) => {
    return (
      <div>
        <HomeNavBar />
        <ProfilePage user={props.user} setUser={props.setUser} />
      </div>
    )
}

export default Profile