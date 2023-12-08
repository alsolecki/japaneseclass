import './App.css'
import React, { useState, useEffect, useRef } from 'react';
import { Route, Routes } from "react-router-dom";

import Home from './Home.jsx';
import CourseInfo from './CourseInfo';
import Header from './Header.jsx';
import Beyond from './Beyond.jsx';
import Footer from './footer.jsx'
import CalltoAction from './CalltoAction.jsx'

function App() {

  const [callVisible, setCallVisible] = useState(true);

  // const handleCallVisible = () => {
  //   if (callVisible) {
  //     setCallVisible(false)
  //   }  
  //   console.log('change')
  // }


  let menuRef = useRef;

  useEffect(() => {
    let handler = (e) => {
      if (e.target.className == "call-to-action-bg") {
        setCallVisible(false);
      }
    };

    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  });


  return (
    <>
      {callVisible && <CalltoAction setCallVisible={setCallVisible} />}
      <div className="bg">
        <div className="v-stripe"></div>
      </div>
      <div className="title">
        <h1>Japanese Language Program</h1>
        <h4>Montgomery Blair High School</h4>
        <button
          onClick={() => setCallVisible(true)}
          style={{
            background: "transparent", border: "none", color: "var(--med-blue1-color)", marginTop: "0.5rem", cursor: "pointer"
          }}>Click Here For Registration Info</button>
      </div>


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
