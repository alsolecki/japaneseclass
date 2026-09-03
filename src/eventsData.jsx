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
    description: <p>In 2024, Montgomery Blair High School was selected to participate in ANA’s cherry tree donation program, which recognizes two schools in the Washington, D.C. area each year. The project brought together students, school staff, community leaders, and representatives of ANA and the National Cherry Blossom Festival to celebrate Japanese culture and friendship.</p>,
    photos: [
      { src: sakuraPlanting, alt: "workers and a student planting a cherry tree", caption: "Planting donated trees on the Blair campus in November 2024." },
      { src: sakuraCeremony, alt: "students and guests at the tree donation ceremony", caption: "At Blair’s Cherry Tree Planting Ceremony in November 2024, four members of the Montgomery County Board of Education, including the Board President, joined students, staff, representatives of ANA and the National Cherry Blossom Festival, and the district’s World Languages Supervisor to celebrate the tree donation." },
      { src: sakuraCraft, alt: "paper cherry blossom tree crafts made by students", caption: "Ten 3D-printed cherry blossom trees were created as commemorative gifts for special guests at the ceremony." },
      { src: sakuraBloom, alt: "Blair students next to the cherry tree in bloom", caption: "Blair students gather beside the donated cherry tree in bloom in spring 2026." },
      { src: sakuraNewspaper, alt: "newspaper clipping covering the cherry tree donation", caption: "The Cherry Tree Planting Ceremony was featured on the front page of the December 2024 issue of Sakura Newspaper, the only Japanese-language newspaper serving the DC area." }
    ]
  },
  {
    title: "Blair Elective Fair, October 2025",
    description: null,
    photos: [
      { src: electiveFair1, alt: "students at the Japanese elective fair table" },
      { src: electiveFair2, alt: "students at the Japanese elective fair table" }
    ]
  },
  {
    title: "National Japan Bowl",
    description: (
      <p>
        Blair students participate annually in the{" "}
        <a href="https://japanbowl.org/" target="_blank" rel="noopener noreferrer">National Japan Bowl</a>, a nationwide academic competition that tests students’ knowledge of Japanese language and culture.
      </p>
    ),
    photos: [
      { src: japanBowl2026_1, alt: "National Japan Bowl trophy, Level IV 5th place", caption: "In 2025, Blair’s Level 4 team placed 5th among 20 teams, tying the school’s best-ever result for the third time." },
      { src: japanBowl2026_2, alt: "Blair students at the National Japan Bowl", caption: "Blair students and Zoll sensei at the 34th National Japan Bowl in 2026." }
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
    description: <p>Takumi Kato, known as <a href="https://peacefulforest.org/" target="_blank" rel="noopener noreferrer">Peaceful Forest</a>, is a world champion taiko drummer from Japan who performs with his three children. Together, they gave a thrilling performance at Blair in May 2025.</p>,
    photos: [
      { src: taikoDrumming1, alt: "taiko drumming performance in the school lobby" }
    ]
  }
]

export default events
