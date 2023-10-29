import React from 'react'

const CourseInfo = () => {
  return (
    <div className="main-content courseinfo">
      <div className="topic fact">
        <p>The goal of the Japanese Learning Program is to help students become more knowledgeable and active in our increasingly global society.</p>
      </div>
      <div className="topic">
        <h3>Speaking Japanese</h3>
        <p>Listening and speaking skills tend to improve rapidly for new students. Pronunciation is easy. There are also thousands of recognizable words taken from other languages that can be said correctly with a few minor alterations.</p>
      </div>
      <div className="topic">
        <h3>Reading & Writing Japanese</h3>
        <p>Achievement of these skills progresses slowly, but surely. Japanese is written in a combination of Kanji (Chinese characters) and two phonetic ways of writing Hiragana and Katakana.</p>
        <figure className="smaller">
          <img src="images/japaneseWritingTypes.jpeg" alt="diagram of courses" />
          <figcaption>Examples of Kanji, Hiragana and Katakana writing styles.</figcaption>
        </figure>
      </div>
      <div className="topic">
        <h3>Outline of Courses:</h3>
        <figure className="smaller">
          <img src="images/courseGraphic.jpeg" alt="diagram of courses" />
          <figcaption>Level 1, Level 2, Level 3 honors, Level 4 honors and AP.</figcaption>
        </figure>
      </div>
    </div>
  )
}

export default CourseInfo