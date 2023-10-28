import './App.css'
import React from 'react';
import { Route, Routes } from "react-router-dom";

import Home from './Home.jsx';
import CourseInfo from './CourseInfo';
import Header from './Header.jsx';
import Beyond from './Beyond.jsx';
import Footer from './footer.jsx'
import CalltoAction from './CalltoAction.jsx'

function App() {

  return (
    <>
      <div className="bg">
        <div className="v-stripe"></div>
      </div>
      <div className="title">
        <h1>Japanese Language Program</h1>
        <h4>Montgomery Blair High School</h4>
      </div>
        
      {/* <CalltoAction /> */}
      
      <div className="container">
        
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="courseinfo" element={<CourseInfo />} />
          <Route path="beyond" element={<Beyond />} />
        </Routes>
      </div>
        <Footer />
    </>
  )
}

export default App
