import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './components/Folio/LandingPage.jsx';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
          <BrowserRouter>
              <Routes>
                <Route  path='' element={<LandingPage/>}  />
              </Routes>
          </BrowserRouter>
       

      </div>
    </>

  );
}

export default App;
