import React from 'react'
import bowl1 from "/Japan Bowl 4-13-23.jpeg";
import bowl2 from "/Japan Bowl 4-13-23 2 2.jpeg";
import whitehouse1 from "/whitehousevisit-1.jpeg";
import whitehouse2 from "/whitehousevisit-2.jpeg";
import whitehouse3 from "/whitehousevisit-3.jpeg";
import whitehouse5 from "/whitehousevisit-5.jpg";
import japantrip1 from "/japantrip-01.jpg";
import japantrip2 from "/japantrip-02.jpg";
import japantrip3 from "/japantrip-03.jpg";
import japantrip4 from "/japantrip-04.jpg";
import japantrip5 from "/japantrip-05.jpg";
import japantrip6 from "/japantrip-06.jpg";
import japantrip7 from "/japantrip-07.jpg";
import japantrip8 from "/japantrip-08.jpg";
import japantrip9 from "/japantrip-09.jpg";

const Beyond = () => {
  return (
    <div className="main-content beyond">
      <div className="topic fact">
        <p>There are many ways that the Japanese Learning Program at Blair gets engaged with the community outside the classroom.</p>
      </div>
      <div className="topic">
        <h3>National Japan Bowl</h3>
        <p> Every year, students from Blair compete at the <a href="https://japanbowl.org/31st-national-japan-bowl/">National Japan Bowl</a>.</p>
        <figure className="bigger">
          <img src={bowl1} alt="class at Japan Bowl 2023" />
          <figcaption>Three students with Instructor Yoko Zoll at Japan Bowl 2023</figcaption>
        </figure>
        <figure className="bigger">
          <img src={bowl2} alt="class at Japan Bowl 2023" />
          <figcaption>At a banquet table during Japan Bowl 2023.</figcaption>
        </figure>
      </div>
      <div className="topic">
        <h3>Visit to the White House</h3>
        <p> In 2015 students met former Japanese Prime Minister Shinzo Abe at the White House.</p>
        <figure className="bigger">
          <img src={whitehouse1} alt="class at whitehouse" />
          <figcaption>Blair students at the White House South Lawn.</figcaption>
        </figure>
        <figure className="bigger">
          <img src={whitehouse2} alt="class at whitehouse" />
          <figcaption>Blair students amongst the crowd.</figcaption>
        </figure>
        <figure className="bigger">
          <img src={whitehouse3} alt="class at whitehouse" />
          <figcaption>Podium where Former President Obama and Former Prime Minister Abe addressed the crowd.</figcaption>
        </figure>
        <figure className="bigger">
          <img src={whitehouse5} alt="class at whitehouse" />
          <figcaption>Blair students outside of the Japanese Embassy.</figcaption>
        </figure>
      </div>
      <div className="topic">
        <h3>Trips to Japan</h3>
        <p> In 2010, 2014 and 2019 Blair students visited Japan. </p>
        <figure className="bigger">
          <img src={japantrip1} alt="class in Japan" />
          <figcaption>Traditional Japanese meal.</figcaption>
        </figure>
        <figure className="bigger">
          <img src={japantrip2} alt="class in Japan" />
          <figcaption>At a Shinto Buddhist Temple.</figcaption>
        </figure>
        <figure className="bigger">
          <img src={japantrip3} alt="class in Japan" />
          <figcaption>At a performance on stage.</figcaption>
        </figure>
        <figure className="bigger">
          <img src={japantrip6} alt="class in Japan" />
          <figcaption>At a performance on stage.</figcaption>
        </figure>
        <figure className="bigger">
          <img src={japantrip4} alt="class in Japan" />
          <figcaption>Visiting a Japanese high school.</figcaption>
        </figure>
        <figure className="bigger">
          <img src={japantrip5} alt="class in Japan" />
          <figcaption>Blair students at a tea ceremony.</figcaption>
        </figure>
        <figure className="bigger">
          <img src={japantrip7} alt="class in Japan" />
          <figcaption>Blair students in kimonos.</figcaption>
        </figure>
        <figure className="bigger">
          <img src={japantrip8} alt="class in Japan" />
          <figcaption>Blair students in Japan.</figcaption>
        </figure>
        <figure className="bigger">
          <img src={japantrip9} alt="class in Japan" />
          <figcaption>Blair students in matching kimonos.</figcaption>
        </figure>

      </div>
    </div>
  )
}

export default Beyond