import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
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
          <ToastContainer />

      </div>
    </>

  );
}

export default App;
