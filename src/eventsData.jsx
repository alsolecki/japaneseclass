import japantrip10 from "/jlp-class2017.jpg"
import japantrip11 from "/japantrip11.jpg"
import japantrip12 from "/japantrip12.jpg"

// Each entry below becomes one section on the "Beyond the Classroom" page.
//
// TO ADD A NEW EVENT:
//   1. Add an `import` line above for each new photo (path is relative to /public).
//   2. Copy one of the objects below, give it a new title/description, and
//      list its photos (caption is optional — omit it to show no caption).
// That's it — Beyond.jsx doesn't need to change.
const events = [
  {
    title: "Trips to Japan",
    description: <p>In 2010, 2014 and 2019 Blair students visited Japan.</p>,
    photos: [
      { src: japantrip10, alt: "class in Japan", caption: "Kakehashi Japan Bowl 2019 group picture." },
      { src: japantrip11, alt: "class in Japan", caption: "Blair students with former First Lady Mrs. Akie Abe." },
      { src: japantrip12, alt: "class in Japan", caption: "Blair students with former First Lady Mrs. Akie Abe." }
    ]
  }
]

export default events
