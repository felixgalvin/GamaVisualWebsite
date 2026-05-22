import artistImg from "../assets/Tasya.jpeg";
import otnielImg from "../assets/KoOT.jpeg"; 
import bts1 from "../assets/SiaranRadioMei.jpeg";
import bts2 from "../assets/SiaranRadioMei.jpeg";
import KasihMuTakBerubah from "../assets/YTThumbnailKasihMuTakBerubah.jpg";

export interface Profile {
  name: string;
  job: string;
  bio: string;
  image: string;
}

export interface Song {
  id: string;
  title: string;
  releaseInfo: string;
  bibleVerseText: string;
  bibleVerseRef: string;
  lyrics: string;
  description: string;
  profiles: Profile[]; 
  images: {
    cover: string;
    bts1: string;
    bts2: string;
  };
}

export const songCatalog: Song[] = [
  {
    id: "kasih-mu-tak-berubah",
    title: "Kasih-Mu Tak Berubah",
    releaseInfo: "13 Februari 2026 - Tasya",
    bibleVerseText: '"TUHAN menetapkan langkah-langkah orang yang hidupnya berkenan kepada-Nya; apabila ia jatuh, tidaklah sampai tergeletak, sebab TUHAN menopang tangannya."',
    bibleVerseRef: "Mazmur 37: 23-24",
    lyrics: "Verse\nSaat ku lemah Kau angkat diriku\nSaat ku terjatuh Tuhan menolongku\n\nReff\nKasih-Mu tak berubah selamanya di hidupku\nMengalir s'panjang waktu\nYesus Kau di hidupku\n\nBridge\nDi tengah badai Kau beri damai\nDalam susahku Kau menyertaiku\nDi tengah topan Kau pegang tanganku\nS'lamanya kupercaya janji-Mu s'lalu",
    description: "Karya ini lahir dari kesadaran kami akan betapa dahsyatnya kasih Tuhan yang bekerja di dalam hidup kami. Melalui nada dan lirik ini, kami ingin mengajak Anda untuk tetap semangat dan sepenuhnya percaya pada kasih-Nya yang tak terbatas. Sesuai dengan ayat Alkitab dalam MAZMUR 37:23-24 (TB) TUHAN menetapkan langkah-langkah orang yang hidupnya berkenan kepada-Nya; apabila ia jatuh, tidaklah sampai tergeletak, sebab TUHAN menopang tangannya. Selamat mendengarkan, Tuhan Yesus memberkati.",
    
    profiles: [
      {
        name: "Tasya",
        job: "Singer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
        image: artistImg
      },
      {
        name: "Otniel",
        job: "Producer",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
        image: otnielImg 
      }
    ],
    
    images: {
      cover: KasihMuTakBerubah,
      bts1: bts1,
      bts2: bts2,
    }
  },
];