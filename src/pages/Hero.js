import { React, useState } from 'react'
import LandingPage from '../components/LandingPage/LandingPage'
import HeroNavBar from '../components/HeroNavBar/HeroNavBar'

const Hero = (props) => {

  const [signIn, setSignIn] = useState(false);

  const [signUp, setSignUp] = useState(false);

  const toggleSignIn = () => {
    setSignIn(!signIn);
  }

  const toggleSignUp = () => {
    setSignUp(!signUp);
  }
  
  return (
    <div>
      <HeroNavBar toggleSignIn={toggleSignIn} toggleSignUp={toggleSignUp} signUp={signUp} user={props.user} setUser={props.setUser} />
      <LandingPage signIn={signIn} signUp={signUp} toggleSignUp={toggleSignUp} user={props.user} setUser={props.setUser} />
    </div>
  )
}

export default Hero