import artistImg from "../assets/Tasya.jpeg";
import bts1 from "../assets/SiaranRadioMei.jpeg";
import bts2 from "../assets/SiaranRadioMei.jpeg";
import KasihMuTakBerubah from "../assets/YTThumbnailKasihMuTakBerubah.jpg";

export interface Song {
  id: string;
  title: string;
  releaseInfo: string;
  bibleVerseText: string;
  bibleVerseRef: string;
  lyrics: string;
  description: string;
  artistName: string;
  artistBio: string;
  images: {
    cover: string;
    bts1: string;
    bts2: string;
    artist: string;
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
    artistName: "TASYA",
    artistBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    images: {
      cover: KasihMuTakBerubah,
      bts1: bts1,
      bts2: bts2,
      artist: artistImg,
    }
  },
];