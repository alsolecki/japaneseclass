import React from 'react'
import street2 from "/shibuya-street-tokyo-japan-scaled.jpg"
import robots from "/robotics-01.jpg";
import anime from "/anime-01.jpeg";
import jpop from "/5767061564_2370bdde78_z.jpg";
import tokyo from "/louie-martinez-IocJwyqRv3M-unsplash.jpg"
import Bar from "./Bar.jsx";
import Factoid from './Factoid.jsx';
import jetclass from "/JETprogramclass.jpg"
import sushi from "/bladimir-garcia-YyVxoeJFBBY-unsplash.jpg"

const Home = () => {
  return (
    <div className="main-content home">

      <Bar
        quote={"Why Should You Learn Japanese?"}
        bgColor={"var(--blair-red2-color)"}
        textColor={"var(--blair-white1-color)"}
      />

      <div className="topic fact">
        <p>There are many reasons to learn Japanese and <strong>Montgomery Blair H.S. is one of just four high schools in Montgomery County that offers a Japanese Language Program</strong>. Studying the Japanese language and culture will open the door to many new and exciting opportunities!</p>
      </div>

      <img src={street2} alt="Japanese street scene" />
      <Factoid
        factoid={"There are over 128 million Japanese speakers globally."}
      />
      <img src={tokyo} alt="Skyline of Tokyo, Japan" />

      <Bar
        quote={"Greater Business Potential"}
      />

      <div className="topic">
        <p>The U.S. and Japan are allies and ranked first and third largest economies in the world! <strong>Japan is a prosperous country and has the most diverse economy in Asia.</strong> Familiar names like Sony, Toshiba, Nikon, Sanyo, Nintendo, Casio, Canon, Minolta, Honda, Toyota, Mitsubishi, and many others have infiltrated the world market in a variety of sectors.</p>
      </div>

      <Factoid
        factoid={"Japan is the third largest economy in the world."}
      />

      <div className="topic">
        <p>Being able to communicate with potential customers in their own language is key to winning their business. In addition, when you learn Japanese, you become not only proficient in the language but also gain an insider view of the culture.</p>
      </div>

      <img src={robots} alt="japanese robots demonstrating on stage" />

      <div className="topic">
        <p>The Japanese are innovators and have relied on their creativity and scientific know-how to succeed not only economically but also in ecology- and effiency-oriented ways. <strong>The Japanese are known as high tech leaders</strong> in fields such as optical media, semiconductor manufacturing, and industrial robotics. </p>
      </div>

      <Bar
        quote={"Educational & Professional Opportunities"}
      />

      <img src={jetclass} alt="jet class" />

      <div className="topic">
        <p>In communities across the United States, there are a wide variety of employment opportunities at Japan-related workplaces. <strong>Learning Japanese will help you stand out</strong>, but not just because of language skills: These organizations are looking for candidates who have Japan-style business "soft skills" and cultural familiarity, which are taught in Japanese courses! </p>
      </div>

      <Factoid
        factoid={"There is a high demand for Japanese-English teachers and translators in all industries."}
      />
 
      <div className="topic">
        <p>The language and cultural knowledge that you can get in Japanese classes are great "add-on" skills to industry-specific training and experience. By adding Japanese courses to internship opportunities and work experiences like the Japan Exchange and Teaching (JET) Program, you will be well positioned to compete!</p>
      </div>

      <div className="facts">
      <h4>The JET Program provides a way to live and work in Japan!</h4>
        <a href="https://jetprogramusa.org/" target="_blank" rel="noopener noreferrer">
          <h5>Learn More Here</h5>
        </a>
      </div>

      <Bar
        quote={" Knowing Japanese Will Set You Apart From the Crowd"}
      />

      <div className="topic">
        <p>The majority of people who learn a foreign language choose a European language like Spanish, French, German, or Italian. Choosing <strong>a less commonly taught language will pop out on your resume</strong> and differentiate you from the crowd.</p>
      </div>


      <img src={anime} alt="japanese anime characters" />

      <Bar
        quote={"Japanese Cultural Exports Are Exploding!"}
      />

      <img src={jpop} alt="jpop performers on stage" />


      <div className="topic">
        <p>From anime to sushi bars, karaoke to manga, bonsai to origami, <strong>Japanese culture has become part of international culture.</strong> A knowledge of the language will give you direct access to Japanese film, animations, and comic books, give you insight into the special terminology used in your favorite martial art, help you understand the cultural basis of the samurai warrior, and develop your ability to order sashimi like a native at your favorite Japanese restaurant!</p>
      </div>

      <img src={sushi} alt="large plate of sushi on a table" />

    </div>
  )
}

export default Home