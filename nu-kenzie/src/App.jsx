import { Dashboard } from './pages/Dashboard';
import { useState } from 'react';
import { LandingPage } from './pages/LandingPage';


const  App = () => {
  
  const  [isLoggedIn, setIsLoggedIn] = useState(false)
  
  const login = () => {
    setIsLoggedIn(true)
  }

  const logout = () => {
    setIsLoggedIn(false)
  }

  
  return (
    <div className="App">
     {isLoggedIn? <Dashboard logout={logout}/> : <LandingPage login={login}/>
    }
    </div>
  );
}

export default App;
