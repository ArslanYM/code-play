import "./App.css";
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";

function App() {
  const tracks = [
    // {
    //   url: "public/1.mp3",
    //   title: "14 Every Night",
    //   tags: ["house"],
    // },
    // {
    //   url: "public/2.mp3",
    //   title: "Carbon Prevails",
    //   tags: ["dnb"],
    // },
    {
      url: "public/3.mp3",
      title: "Complication With Optimistic O.",
      tags: ["dnb"],
    },
    // {
    //   url: "public/4.mp3",
    //   title: "Eventually We Find Our Way.",
    //   tags: ["dnb"],
    // },
    {
      url: "public/5.mp3",
      title: "Hand Covers Bruise, Reprsise",
      tags: ["dnb"],
    },
    {
      url: "public/6.mp3",
      title: "In the Hall of the Mountain Ki.",
      tags: ["dnb"],
    },
    {
      url: "public/7.mp3",
      title: "Intriguing Possiblities",
      tags: ["dnb"],
    },
    // {
    //   url: "public/8.mp3",
    //   title: "It Catches Up With You",
    //   tags: ["dnb"],
    // },
    {
      url: "public/9.mp3",
      title: "On We March",
      tags: ["dnb"],
    },
    {
      url: "public/10.mp3",
      title: "Painted Sun In Abstract",
      tags: ["dnb"],
    },
    // {
    //   url: "public/11.mp3",
    //   title: "Penetration",
    //   tags: ["dnb"],
    // },
    {
      url: "public/12.mp3",
      title: "Pieces Form the Whole.",
      tags: ["dnb"],
    },
    // {
    //   url: "public/13.mp3",
    //   title: "Soft Trees Break the Fall.",
    //   tags: ["dnb"],
    // },
  ];

  return (
    <>
     <div className="wrapper">
    <div className="inner-wrapper">
      <div className="landscape"></div>
    </div>
    <div className="nrw">
        <Player showPlaylist={false} includeSearch={false} includeTags={false} trackList={tracks} />
      </div>
  </div>
      
    </>
  );
}

export default App;
