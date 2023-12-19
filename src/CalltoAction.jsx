import React from 'react'

const CalltoAction = ({ setCallVisible }) => {
  return (
    <div className="call-to-action-bg">
      <div className="call-to-action-modal">
        <button
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "transparent",
            color: "white",
            border: "none",
            fontSize: "2rem",
            cursor: "pointer"
          }}
          onClick={() => setCallVisible(false)}>&#x2715;</button>
        <div className="call-info">
          <h3>** 2024 Registration Is Now Open **</h3>
          <p><a href="https://sites.google.com/mcpsmd.net/mbhscoursebulletin/world-languages?authuser=0" target="_blank" rel="noopener noreferrer">Sign Up Now!</a></p>
          <ul>
            <li><strong>WLG2081A/B</strong> Japanese 1 A/B</li>
            <li><strong>WLG2082A/B</strong> Japanese 2 A/B</li>
            <li><strong>WLG2088A/B</strong> Honors Japanese 3 A/B</li>
            <li><strong>WLG2089A/B</strong> Honors Japanese 4 A/B </li>
            <li><strong>WLG2090A/B</strong> AP Japanese A/B</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CalltoAction