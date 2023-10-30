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
          <p>Learn Japanese!</p>
          <h3>** 2024 Registration Open Soon! **</h3>
          <p>Sign up for WLG 2081 A/B</p>
        </div>
      </div>
    </div>
  )
}

export default CalltoAction