import React from 'react'
import Bar from './Bar.jsx'
import events from './eventsData.jsx'

const Beyond = () => {
  return (
    <div className="main-content beyond">
      <Bar
        quote={"Beyond the Classroom"}
        bgColor={"var(--blair-red2-color)"}
        textColor={"var(--blair-white1-color)"}
      />
      {events.map((event) => (
        <div className="topic" key={event.title}>
          <h3>{event.title}</h3>
          {event.description}
          {event.photos.map((photo, i) => (
            <figure className="bigger" key={photo.src + i}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              {photo.caption && <figcaption>{photo.caption}</figcaption>}
            </figure>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Beyond
