import tasyaImg from "../assets/Tasya.jpeg";
import otnielImg from "../assets/KoOT.jpeg";
import felixImg from "../assets/Felix.jpeg"; 
import bts1 from "../assets/behind.jpg";
import bts2 from "../assets/behind.jpg"; 
import q2 from "../assets/2.png";
import q3 from "../assets/3.png";
import q4 from "../assets/4.png";
import q5 from "../assets/5.png";
import q6 from "../assets/6.png";
import q7 from "../assets/7.png";
import q8 from "../assets/8.png";
import q9 from "../assets/9.png";
import q10 from "../assets/10.png";
import q11 from "../assets/11.png";
import q12 from "../assets/12.png";
import q13 from "../assets/13.png";
import q14 from "../assets/14.png";
import q15 from "../assets/15.png";
import q16 from "../assets/16.png";
import q17 from "../assets/17.png";
import q18 from "../assets/18.png";
import q19 from "../assets/19.png";
import q20 from "../assets/20.png";
import q21 from "../assets/21.png";
import q22 from "../assets/22.png";
import q23 from "../assets/23.png";
import q24 from "../assets/24.png";
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
  albumPhotos?: string[];
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
        bio: 'Lagu "Kasih-Mu Tak Berubah" adalah curahan suara iman yang percaya bahwa kasih Tuhan selalu ada dan nyata dalam hidup kita, walaupun saat keadaan kita sulit bahkan tidak tau harus berbuat apa, tetapi kasih Tuhan selalu beserta dengan kita.',
        image: tasyaImg
      },
      {
        name: "Otniel",
        job: "Producer",
        bio: 'Hidup memang tidak selalu mudah. Ada banyak cobaan, air mata, dan pergumulan yang harus dilewati. Tetapi sebagai orang percaya, kita yakin bahwa Tuhan tidak pernah meninggalkan anak-anak-Nya. Saat kita lemah, Tuhan menguatkan. Saat kita hampir jatuh, Tuhan menopang. Kasih-Nya tidak berubah oleh keadaan dan tetap setia sampai selama-lamanya. Tetaplah percaya, karena setiap badai pasti berlalu, dan Tuhan selalu punya rencana yang indah pada waktunya.',
        image: otnielImg 
      }
    ],
    
    images: {
      cover: KasihMuTakBerubah,
      bts1: bts1,
      bts2: bts2,
    }
  }, 
  {
    id: "satu-dalam-doa",
    title: "Satu Dalam Doa",
    releaseInfo: "17 Agustus 2026 - Tasya & Felix",
    bibleVerseText: 'Karya ini lahir sebagai ungkapan syukur sekaligus pengingat bahwa di tengah keberagaman suku, ras, budaya, dan latar belakang, kita tetap dipersatukan oleh kasih Tuhan. Melalui lagu "Satu dalam Doa", kami ingin mengajak setiap pendengar untuk terus menjunjung tinggi persaudaraan, saling mengasihi tanpa memandang perbedaan, serta percaya bahwa keberagaman adalah anugerah yang menjadi kekuatan bagi bangsa Indonesia. Bertepatan dengan peringatan Hari Ulang Tahun Kemerdekaan Republik Indonesia ke-81 pada 17 Agustus 2026, kiranya lagu ini dapat menjadi pengingat untuk kembali membangun persatuan, menghadirkan damai melalui doa, dan memohon agar Tuhan terus melawat serta memberkati Indonesia. Seperti yang tertulis dalam Kolose 3:14 (TB) \n"Dan di atas semuanya itu: kenakanlah kasih, sebagai pengikat yang mempersatukan dan menyempurnakan." \nSelamat mendengarkan, Tuhan Yesus memberkati.',
    bibleVerseRef: "Kolose 3:14",
    lyrics: "(Verse 1)\nDi bawah langit yang sama kita berpijak\nDari ufuk timur hingga ke barat\nKulit kita berbeda, tutur kata tak serupa\nNamun satu detak jantung untuk Indonesia\n\n(Pre-Chorus)\n(Sunda): \nHiji rasa, dina haté anu suci \n*Satu rasa, di dalam hati yang suci*\n(Batak): \nSada ma hita, rap marlas ni roha\n*Satu lah kita, bersama bersukacita*\n(Jawa): \nMbangun paseduluran ingkang nyawiji\n*Membangun persaudaraan yang menyatu*\n\n(Chorus)\nWalau berbeda suku dan budaya\nKita adalah satu, Bhinneka Tunggal Ika\nTuhan, jamah tanah air kami\nJadikan Indonesia luar biasa\nDi dalam tangan-Mu, kami bersatu\n\n(Verse 2)\n(NTT/Kupang): \nKatong pung kawan, katong pung sodara\n*Teman kita, saudara kita*\n(Pontianak): \nBudak melayu, dayak, Tionghoa (Tyonghwa), semue bise kumpul mace\nTak ada sekat yang mampu memisahkan\nSatu darah, satu bangsa, satu tujuan\n*Anak Melayu, Dayak, Tionghoa, semua bisa berkumpul jadi satu*\n\nBack to (Chorus) \n\n(Bridge)\nCurahkan berkat-Mu Tuhan\nAtas pulau-pulau kami\nBiar kemuliaan-Mu nyata di negeri ini\nIndonesia... Jaya!\n\n(Outro)\nTuhan memberkati \nTuhan memberkati\nTuhan memberkati\nNusantara (3x)",
    description: '',
    
    profiles: [
      {
        name: "Tasya",
        job: "Singer",
        bio: 'Lagu Satu Dalam Doa mengingatkan bahwa kita adalah makhluk sosial yang dimana kita membutuhkan orang lain dalam hidup kita meskipun mereka berbeda suku, ras, dan agamanya. Bukan hanya makhluk sosial tetapi kita juga harus mengasihi satu dengan yang lain tanpa pandang bulu, sama seperti Tuhan yang sudah terlebih dahulu mengasihi kita tanpa memandang siapa diri kita. Karena itu marilah kita menjunjung tinggi tali persaudaraan yang erat agar kita tetap bersatu meskipun kita memiliki latar belakang yang berbeda-beda.',
        image: tasyaImg
      },
      {
        name: "Felix",
        job: "Singer",
        bio: 'Lagu Satu Dalam Doa menjadi lagu yang kembali mengingatkan saya akan persatuan dan harapan dari Bhineka Tunggal Ika. Perbedaan merupakan kekuatan kita Indonesia, bukan kelemahan. Perjuangan yang telah diupayakan pada masa lalu jangan kita sia-siakan, marilah kita perjuangkan. Semangat Indonesia! Tuhan Yesus beserta dengan kita!',
        image: felixImg
      },
      {
        name: "Otniel",
        job: "Producer",
        bio: 'Hidup memang tidak selalu mudah. Ada banyak cobaan, air mata, dan pergumulan yang harus dilewati. Tetapi sebagai orang percaya, kita yakin bahwa Tuhan tidak pernah meninggalkan anak-anak-Nya. Saat kita lemah, Tuhan menguatkan. Saat kita hampir jatuh, Tuhan menopang. Kasih-Nya tidak berubah oleh keadaan dan tetap setia sampai selama-lamanya. Tetaplah percaya, karena setiap badai pasti berlalu, dan Tuhan selalu punya rencana yang indah pada waktunya.',
        image: otnielImg 
      }
    ],
    albumPhotos: [q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24],
    
    images: {
      cover: KasihMuTakBerubah,
      bts1: bts1,
      bts2: bts2,
    }
  },
  // Template
  // {
  //   id: "satu-dalam-doa",
  //   title: "",
  //   releaseInfo: "",
  //   bibleVerseText: '',
  //   bibleVerseRef: "",
  //   lyrics: '',
  //   description: '',
    
  //   profiles: [
  //     {
  //       name: "",
  //       job: "",
  //       bio: '',
  //       image: 
  //     },
  //     {
  //       name: "Otniel",
  //       job: "Producer",
  //       bio: 'Hidup memang tidak selalu mudah. Ada banyak cobaan, air mata, dan pergumulan yang harus dilewati. Tetapi sebagai orang percaya, kita yakin bahwa Tuhan tidak pernah meninggalkan anak-anak-Nya. Saat kita lemah, Tuhan menguatkan. Saat kita hampir jatuh, Tuhan menopang. Kasih-Nya tidak berubah oleh keadaan dan tetap setia sampai selama-lamanya. Tetaplah percaya, karena setiap badai pasti berlalu, dan Tuhan selalu punya rencana yang indah pada waktunya.',
  //       image: otnielImg 
  //     }
  //   ],
    
  //   images: {
  //     cover: KasihMuTakBerubah,
  //     bts1: bts1,
  //     bts2: bts2,
  //   }
  // },
];