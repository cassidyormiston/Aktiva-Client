import './App.css';
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Hero from './pages/Hero'
import Home from './pages/Home'
import Profile from './pages/Profile'

function App() {

  const [user, setUser] = React.useState(null);

  const setCurrentUser = (value) => {
    if (value) {
      console.log("The user has been set at the highest level");
      setUser(value);
      console.log("this is the user at the highest level")
      console.log(user)
    }
  }

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Hero user={user} setUser={setCurrentUser} />} />
          <Route path="/home" element={<Home user={user} setUser={setCurrentUser} />} />
          <Route path="/profile" element={<Profile user={user} setUser={setCurrentUser} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
