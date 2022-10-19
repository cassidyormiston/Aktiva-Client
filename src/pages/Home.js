import React from 'react'
import HomePage from '../components/HomePage/HomePage'
import HomeNavBar from '../components/HomeNavBar/HomeNavBar'


const Home = (props) => {
    return (
      <div>
        <HomeNavBar />
        <HomePage />
      </div>
    )
}

export default Home