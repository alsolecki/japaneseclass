import React from 'react'
import street from "/shibuya-street-tokyo-japan-scaled.jpg";
import robots from "/robotics-01.jpg";
import anime from "/anime-01.jpeg";
import jpop from "/5767061564_2370bdde78_z.jpg";


const Home = () => {
  return (
    <div className="main-content home">
      <div className="topic fact">
        <p>Montgomery Blair H.S. is one of just four high schools in Montgomery County that offer a Japanese Language Program.</p>
      </div>
      <div className="topic">
        <h3>Why should I learn Japanese?</h3>

        <p>The U.S. and Japan are allies, and both are among the top five economies in the world. Japanese will prepare you for a future career in global business!</p>
        <figure>
          <img src={street} alt="japanese street scene" />
          <figcaption>Busy Japanese street scene.</figcaption>
        </figure>
        <p>The Japanese are leaders in the fields of technology, medicine, automobiles, engineering and many other sciences.</p>
        <figure>
          <img src={robots} alt="robots" />
          <figcaption>Japanese robots are at the cutting edge.</figcaption>
        </figure>
        <p>It will set you apart from the crowd!</p>
        <figure>
          <img src={anime} alt="anime characters" />
          <figcaption>Anime have fans across the globe.</figcaption>
        </figure>
        <p>The Japanese culture is rich with centuries old traditions and a modern day pheonomena like Manga, Anime and J-Pop.</p>
        <figure>
          <img src={jpop} alt="J-Pop group performing on stage" />
          <figcaption>J-Pop idol group performing on stage.</figcaption>
        </figure>
      </div>
    </div>
  )
}

export default Home