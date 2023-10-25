import './App.css'
import React from 'react';
import Accordion from './components/accordian.jsx';
import { accordionData } from './Content'

import Header from './components/header.jsx'
import Footer from './components/footer.jsx'

function App() {


  return (
    <>
      <Header />

      <div className="call-to-action">
        <h3>sign up for WLG 2081 A/B</h3>
      </div>

      <div>
        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
