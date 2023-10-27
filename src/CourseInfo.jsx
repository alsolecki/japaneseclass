import React from 'react'

const CourseInfo = () => {
  return (
    <div className="main-content courseinfo">
      <div className="topic">  
        <h3>The Japanese Learning Program</h3>
        <p> The goal is the help students become more knowledgeable and active in our increasingly global society. Participants will be able to interpret and exchange information related to Japan in both written and spoken forms.
        </p>
      </div>
      <div className="topic">
        <h3>Speaking Japanese</h3>
        <p>Listening and speaking skills tend to improve rapidly for new students. Pronunciation is easy. There are also thousands of recognizable words taken from other languages that can be said correctly with a few minor alterations.</p>
      </div>
      <div className="topic">
        <h3>Reading & Writing Japanese</h3>
        <p>Achievement of these skills progresses slowly, but surely. Japanese is written in a combination of Kanji (Chinese characters) and two phonetic ways of writing.</p>
        <ul>
          <li>Kanji</li>
          <li>Katakana</li>
          <li>Hiragana</li>
        </ul>
      </div>
        <div className="topic">
          <h3>Outline of Courses</h3>
          <ul>
            <li>level 1</li>
            <li>level 2</li>
            <li>level 3 honors</li>
            <li>level 4 honors</li>
            <li>AP Japanese</li>
          </ul>
      </div>
    </div>
  )
}

export default CourseInfo