import sakuraPlanting from "/sakura-planting-01.jpg"
import sakuraCeremony from "/sakura-ceremony-01.jpg"
import sakuraCraft from "/sakura-craft-01.jpg"
import sakuraBloom from "/sakura-bloom-01.jpg"
import sakuraNewspaper from "/sakura-newspaper-2024-12.jpg"
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
    title: "Sakura Cherry Trees",
    description: <p>Donated by ANA, which selects two schools in the DMV each year, and Blair was selected for the year 2024.</p>,
    photos: [
      { src: sakuraPlanting, alt: "workers and a student planting a cherry tree", caption: "Planting the donated cherry tree at Blair, November 2024." },
      { src: sakuraCeremony, alt: "students and guests at the tree donation ceremony", caption: "Blair students and staff with ANA and National Cherry Blossom Festival representatives at the planting ceremony." },
      { src: sakuraCraft, alt: "paper cherry blossom tree crafts made by students", caption: "Paper cherry blossom trees made by students for the celebration." },
      { src: sakuraBloom, alt: "Blair students next to the cherry tree in bloom", caption: "The cherry tree in bloom the following spring." },
      { src: sakuraNewspaper, alt: "newspaper clipping covering the cherry tree donation", caption: "Coverage of the donation in the Sakura DC & Houston newspaper, December 2024." }
    ]
  },
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
