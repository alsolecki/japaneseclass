import React from 'react'
import bowl1 from "/Japan Bowl 4-13-23.jpeg";
import bowl2 from "/Japan Bowl 4-13-23 2 2.jpeg";
import whitehouse1 from "/whitehousevisit-1.jpeg";
import whitehouse2 from "/whitehousevisit-2.jpeg";
import whitehouse3 from "/whitehousevisit-3.jpeg";

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
      </div>
      <div className="topic">
        <h3>Trips to Japan</h3>
        <p> In 2010, 2014 and 2019 Blair students visited Japan. </p>

      </div>
    </div>
  )
}

export default Beyond