import React from 'react';
import { BrowserRouter,Route,Routes} from "react-router-dom";

import Ingresar from './components/auth/Ingresar.jsx';
import Auth from './components/auth/Auth.jsx';
import HomeUser from './components/home/HomeUser.jsx';
import LandingPage from './components/Folio/LandingPage.jsx';

import './App.css';
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
                <Routes>
                    <Route path='' element={<LandingPage/>}/>
                    <Route path='' element={<Ingresar/>} />
                    <Route path='/Auth' element={<Auth/>} />   
                    <Route path='/HomeUser' element={<HomeUser/>} /> 
                </Routes>
        </BrowserRouter>
      </div>
    </>

  );
}

export default App;
