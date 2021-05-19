import { v4 as uuidv4 } from "uuid";

const music = () => {
  return [
    {
      name: "Sugarless",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
      artist: "The Field Tapes, Ezzy, Wowflower",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11247",
      color: ["#DBE8DF", "#24253A"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Canary Forest",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#41DACC", "#FAB670"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Can't Find The Words",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/24d75baebd16d287703d481b4cc77f6c0b5159c7-1024x1024.jpg",
      artist: "Ward Wills, Middle School",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8718",
      color: ["#0B4376", "#E37E80"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Canção",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/05/260a909fca701bbb7593f5f8f9cff9508cca2856-1024x1024.jpg",
      artist: "The BREED",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7961",
      color: ["#FADED0", "#342276"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Mirage",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-1024x1024.jpg",
      artist: "Nymano, j'san",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10136",
      color: ["#1C1C52", "#FDF4F0"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Les Mouvements d'Hiver",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
      artist: "L'Indécis, sadtoi",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10351",
      color: ["#BBA3C5", "#3D367A"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Ocean View",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-1024x1024.jpg",
      artist: "G Mills, Kyle McEvoy, Luke Otwell",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10320",
      color: ["#1C1C52", "#FDF4F0"],
      id: uuidv4(),
      active: false,
    },
  ];
};

export default music;
