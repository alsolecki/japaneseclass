import sakuraPlanting from "/sakura-planting-01.jpg"
import sakuraCeremony from "/sakura-ceremony-01.jpg"
import sakuraCraft from "/sakura-craft-01.jpg"
import sakuraBloom from "/sakura-bloom-01.jpg"
import sakuraNewspaper from "/sakura-newspaper-2024-12.jpg"
import electiveFair1 from "/elective-fair-01.jpg"
import electiveFair2 from "/elective-fair-02.jpg"
import japanBowl2026_1 from "/japan-bowl-2026-01.jpg"
import japanBowl2026_2 from "/japan-bowl-2026-02.jpg"
import onigiriAction1 from "/onigiri-action-01.jpg"
import onigiriAction2 from "/onigiri-action-02.png"
import onigiriAction3 from "/onigiri-action-03.jpg"
import taikoDrumming1 from "/taiko-drumming-01.jpg"

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
    description: <p>Through ANA's Cherry Blossom Tree Planting Program, two schools in the DMV are selected each year to receive donated cherry trees. Blair High School was selected for the program in 2024.</p>,
    photos: [
      { src: sakuraPlanting, alt: "workers and a student planting a cherry tree", caption: "Planting the donated cherry tree at Blair, November 2024." },
      { src: sakuraCeremony, alt: "students and guests at the tree donation ceremony", caption: "Planting Ceremony with Blair students and staff, ANA and National Cherry Blossom Festival representatives, and members of the Montgomery County Board of Education." },
      { src: sakuraCraft, alt: "paper cherry blossom tree crafts made by students", caption: "Ten 3D printed cherry tree gifts." },
      { src: sakuraBloom, alt: "Blair students next to the cherry tree in bloom", caption: "The cherry tree in bloom in the spring of 2026." },
      { src: sakuraNewspaper, alt: "newspaper clipping covering the cherry tree donation", caption: "Coverage of the donation in the Sakura DC & Houston newspaper, December 2024." }
    ]
  },
  {
    title: "Elective Fair",
    description: null,
    photos: [
      { src: electiveFair1, alt: "students at the Japanese elective fair table" },
      { src: electiveFair2, alt: "students at the Japanese elective fair table" }
    ]
  },
  {
    title: "National Japan Bowl",
    description: null,
    photos: [
      { src: japanBowl2026_1, alt: "National Japan Bowl trophy, Level IV 5th place" },
      { src: japanBowl2026_2, alt: "Blair students at the National Japan Bowl" }
    ]
  },
  {
    title: "Onigiri Action",
    description: (
      <p>
        Blair's Japanese Language Program participates in{" "}
        <a href="https://usa.tablefor2.org/onigiri-action" target="_blank" rel="noopener noreferrer">#Onigiri Action</a>, a six week event that happens every fall. Making onigiri provides meals for children in need through{" "}
        <a href="https://usa.tablefor2.org/" target="_blank" rel="noopener noreferrer">Table for Two</a>. The initiative began in Japan and has since spread world-wide. Each year, Blair's JLP classes make onigiri for hunger.
      </p>
    ),
    photos: [
      { src: onigiriAction1, alt: "students holding plates of onigiri in front of an Onigiri Action screen" },
      { src: onigiriAction2, alt: "student holding two onigiri" },
      { src: onigiriAction3, alt: "students making onigiri at a table" }
    ]
  },
  {
    title: "Taiko Drumming",
    description: <p>Takumi Kato, known as Peaceful Forest, is a world champion taiko drummer from Japan who performs with his three children. Together, they gave a thrilling performance at Blair in May 2025.</p>,
    photos: [
      { src: taikoDrumming1, alt: "taiko drumming performance in the school lobby" }
    ]
  }
]

export default events
