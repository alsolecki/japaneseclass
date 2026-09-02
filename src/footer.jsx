import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
        <div className="contact-box">
          <p>Instructor Yoko H. Zoll</p>
          <a href="mailto:Yoko_H_Zoll@mcpsmd.org"><p>Yoko_H_Zoll@mcpsmd.org</p></a>
          <p>Montgomery Blair High School</p>
          <p>copyright &#169;{year}</p>
        </div>
    </footer>
  )
}

export default Footer