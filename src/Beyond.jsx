import React from 'react';
import Bar from './Bar.jsx'
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
import japantrip10 from "/jlp-class2017.jpg"
import japantrip11 from "/japantrip11.jpg"
import japantrip12 from "/japantrip12.jpg"
import onigiri11 from "/onigiri-11.jpeg"
import onigiri1 from "/IMG_3979.jpg";
import onigiri2 from "/IMG_3980.jpg";
import onigiri4 from "/IMG_3982.jpg";
import onigiri5 from "/image6.jpeg";
import onigiri7 from "/IMG_3985.jpg";
import onigiri8 from "/IMG_3986.jpg";
import onigiri9 from "/image7.jpeg";
import akimatsuri1 from "/akimatsuri01.jpg";
import akimatsuri2 from "/akimatsuri02.jpg";
import akimatsuri3 from "/akimatsuri03.jpg";
import akimatsuri5 from "/akimatsuri05.jpg";
import akimatsuri6 from "/akimatsuri06.jpg";
import akimatsuri7 from "/akimatsuri07.jpg";
import embassyVisitors from '/japan-embassy-visits-blair.jpeg'
import giftexchange from '/L3-4giftexchange.jpg'

const Beyond = () => {
  return (
    <div className="main-content beyond">
      <Bar
        quote={"Beyond the Classroom"}
        bgColor={"var(--blair-red2-color)"}
        textColor={"var(--blair-white1-color)"}
      />
      <div className="topic fact">
        <p>There are many ways that the Japanese Learning Program at Blair gets engaged with the community outside the classroom.</p>
      </div>

      <div className="topic">
        <h3>Visitors from Japan Embassy</h3>
        <p>In November, Mr. Taichi Kaneshiro, Counsellor of Education and Ms. Tomoko Nakamura, First Secretary visited Blair. <a href="https://twitter.com/JapanEmbDC/status/1734678876343922991" target="_blank" rel="noopener noreferrer">#social media post</a></p>
        
        <figure className="bigger">
          <img src={embassyVisitors} alt="students during onigiri action 2023" />
          <figcaption>Blair Principal Johnson, Mr. Taichi Kaneshiro, Ms. Tomoko Nakamura and Instructor Zoll.</figcaption>
        </figure>

      </div>

      <div className="topic">
        <h3>Holiday Gift Exchange</h3>
        <p>Level 3, 4 and AP Japanese students exchange gifts during the 2023 holiday season.</p>
        
        <figure className="bigger">
          <img src={giftexchange} alt="students during gift exchange 2023" />
          <figcaption>Level 3, 4, and AP students at gift exchage.</figcaption>
        </figure>

      </div>

      <div className="topic">
        <h3>Onigiri Action 2023</h3>
        <p>Blair's Japanese Language Program participates in <a href="https://usa.tablefor2.org/onigiri-action" target="_blank" rel="noopener noreferrer">#Onigiri Action</a>, a six week event that happens every fall. Making onigiri provides meals for children in need through <a href="https://usa.tablefor2.org/" target="_blank" rel="noopener noreferrer">Table for Two</a>. The initiative began in Japan 16 years ago and has since spread world-wide. Each year, Blair's JLP classes cook two 15 pounds of rice to make onigiri for hunger. The event was also featured in Blair's school newsletter <a href="https://silverchips.mbhs.edu/content/blair-hosts-onigiri-making-event-in-media-center-36103/" target="_blank" rel="noopener noreferrer">Silver Chips Online</a> and on Blair's student broadcast program <a href="https://www.youtube.com/watch?v=OaLh8Pec6_I&ab_channel=BlairNetworkCommunications" target="_blank" rel="noopener noreferrer">Infoflo</a>.</p>

        <figure className="bigger">
          <img src={onigiri9} alt="students during onigiri action 2023" />
          <figcaption>Blair Principal instagraming Instructor Zoll demonstrates how to make onigiri.</figcaption>
        </figure>
        <figure className="bigger">
          <img src={onigiri5} alt="students during onigiri action 2023" />
        </figure>
        <figure className="bigger">
          <img src={onigiri11} alt="students during onigiri action 2023" />
        </figure>
        <figure className="bigger">
          <img src={onigiri1} alt="students during onigiri action 2023" />
        </figure>
        <figure className="bigger">
          <img src={onigiri2} alt="students during onigiri action 2023" />
        </figure>
        <figure className="bigger">
          <img src={onigiri4} alt="students during onigiri action 2023" />
        </figure>
        <figure className="bigger">
          <img src={onigiri7} alt="students during onigiri action 2023" />
        </figure>
        <figure className="bigger">
          <img src={onigiri8} alt="students during onigiri action 2023" />
        </figure>
      </div>

      <div className="topic">
        <h3>National Japan Bowl</h3>
        <p> Every year, students from Blair compete at the <a href="https://japanbowl.org/31st-national-japan-bowl/" target="_blank" rel="noopener noreferrer">National Japan Bowl</a>.</p>
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
        <h3>Akimatsuri Fall Festival</h3>
        <p>On November 4 2017, Blair students participated in the Japanese Fall Festival at the National Arboretum in Washington, DC. </p>

        <figure className="bigger">
          <img src={akimatsuri2} alt="students at a fall festival" />
          <figcaption>Blair students with Instructor Yoko Zoll.</figcaption>
        </figure>
        <figure className="bigger">
          <img src={akimatsuri3} alt="students at a fall festival" />
          <figcaption>Blair students at Fall Festival.</figcaption>
        </figure>
        <figure className="bigger">
          <img src={akimatsuri1} alt="students at a fall festival" />
        </figure>
        <figure className="bigger">
          <img src={akimatsuri5} alt="students at a fall festival" />
        </figure>
        <figure className="bigger">
          <img src={akimatsuri6} alt="students at a fall festival" />
        </figure>
        <figure className="bigger">
          <img src={akimatsuri7} alt="students at a fall festival" />
          <figcaption>Instructor Zoll between women dressed in traditional Kimonos.</figcaption>
        </figure>
      </div>

      <div className="topic">
        <h3>Visit to the White House</h3>
        <p> In 2015 students met former Japanese Prime Minister Shinzo Abe and former President Barack Obama at the White House.</p>
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
        <h3>Local Performances</h3>
        <p>In 2015, a Japanese dancer Shizumi performed at Blair's auditorium.</p>
        <figure className="bigger">
          <img src={japantrip3} alt="class in Japan" />
          <figcaption>On stage with Blair students.</figcaption>
        </figure>
        <figure className="bigger">
          <img src={japantrip6} alt="class in Japan" />
          <figcaption>On stage with Blair students.</figcaption>
        </figure>
      </div>

      <div className="topic">
        <h3>Trips to Japan</h3>
        <p> In 2010, 2014 and 2019 Blair students visited Japan. </p>
        <figure className="bigger">
          <img src={japantrip10} alt="class in Japan" />
          <figcaption>Kakehashi Japan Bowl 2019 group picture.</figcaption>
        </figure>
        <figure className="bigger">
          <img src={japantrip11} alt="class in Japan" />
          <figcaption>Blair students with former First Lady Mrs. Akie Abe.</figcaption>
        </figure>
        <figure className="bigger">
          <img src={japantrip12} alt="class in Japan" />
          <figcaption>Blair students with former First Lady Mrs. Akie Abe.</figcaption>
        </figure>
        <figure className="bigger">
          <img src={japantrip1} alt="class in Japan" />
          <figcaption>Traditional Japanese meal.</figcaption>
        </figure>
        <figure className="bigger">
          <img src={japantrip2} alt="class in Japan" />
          <figcaption>Buddah in Kamakura.</figcaption>
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
          <figcaption>Blair students at the entrance of Ghibli Museum in Tokyo.</figcaption>
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