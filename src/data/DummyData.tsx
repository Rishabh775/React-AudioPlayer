// import { AudioFile } from "../types/files";
import music from "../assets/songs/Tu Ne Jo Na Kaha.mp3";
import music2 from "../assets/songs/Hai Dil Ye Mera.mp3";
import music3 from "../assets/songs/Phir Suna.mp3";
import music4 from "../assets/songs/Maari Thara Local.mp3";
import music5 from "../assets/songs/Binte Dil.mp3";
import music6 from "../assets/songs/Ek Dil Ek Jaan.mp3";
import music7 from "../assets/songs/Dekh Lena.mp3";
import music8 from "../assets/songs/Heeriye.mp3";
import music9 from "../assets/songs/Aaj Phir.mp3";
import music10 from "../assets/songs/Aaja We Mahiya.mp3";
import music11 from "../assets/songs/Jo Tum Na Ho.mp3";
import music12 from "../assets/songs/Satranga.mp3";
import music13 from "../assets/songs/Deva Deva.m4a";
import music14 from "../assets/songs/Afreen Afreen.mp3";

const dummyData = [
  {
    singer: "Mohit Chouhan",
    artist: "Mohit Chouhan",
    poster:
      "https://th.bing.com/th/id/R.a418179f97e15b5632b10aa9b263e931?rik=1mMIzfBcUljVYw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-CRcI8h0Js3I%2fTyEsOgwEZdI%2fAAAAAAAABUQ%2flS0vnHI2QVM%2fs1600%2fnewyork1.jpg&ehk=JIt1RZT05NZOJ7GsudbjUjrOR1D52WHxnbnvaF40gZ0%3d&risl=&pid=ImgRaw&r=0",
    music_name: "Tune Jo Na Kaha",
    music_file: music,
    music_id: 1,
  },
  {
    singer: "Arijit Singh",
    artist: "Arijit Singh",
    poster:
      "https://th.bing.com/th/id/OIP.G7XwyIiDo6bklbN-A0LIvAHaKm?rs=1&pid=ImgDetMain",
    music_name: "Hain Dil Ye Mera",
    music_file: music2,
    music_id: 2,
  },
  {
    singer: "Gajendra Verma",
    artist: "Gajendra  Verma",
    poster:
      "https://th.bing.com/th/id/OIP.OCwH1QN8xNn_sTcy-q-FIAHaEK?rs=1&pid=ImgDetMain",
    music_name: "Phir Suna",
    music_file: music3,
    music_id: 3,
  },
  {
    singer: "Singer",
    artist: "Dhanush",
    poster:
      "https://d2j1wkp1bavyfs.cloudfront.net/image-assets/493178/tThalcNdwf4RLwMis5RMXebtQzI.jpg?d=360x540&q=60",
    music_name: "Thara",
    music_file: music4,
    music_id: 4,
  },
  {
    singer: "Arijit Singh",
    artist: "Arijit Singh, Ranveer Singh",
    poster:
      "https://th.bing.com/th/id/OIP.Wa5bHKaWQAo2l2PL7MyMPQAAAA?rs=1&pid=ImgDetMain",
    music_name: "Binte Dil",
    music_file: music5,
    music_id: 5,
  },
  {
    singer: "Arijit Singh",
    artist: "Arijit Singh, Shahid kapoor",
    poster:
      "https://4.bp.blogspot.com/-Ty7d27CSsBk/WciWHZrQRPI/AAAAAAAA2XY/kyWPdGg6AvEgZHKEG_Aw5uAsdYneOD6BwCLcBGAs/s1600/padmavati-movie-poster-3.jpg",
    music_name: "Ek Dil Ek Jaan",
    music_file: music6,
    music_id: 6,
  },
  {
    singer: "Arijit Singh",
    artist: "Arijit Singh",
    poster:
      "https://stat4.bollywoodhungama.in/wp-content/uploads/2016/11/Tum-Bin-2-9.jpg",
    music_name: "Dekh Lena",
    music_file: music7,
    music_id: 7,
  },
  {
    singer: "Arijit Singh",
    artist: "Arijit Singh",
    poster:
      "https://files.prokerala.com/news/photos/imgs/800/jasleen-royal-calls-heeriye-her-passion-project-crafted-it-from-scratch-1618212.jpg",
    music_name: "Heeriye",
    music_file: music8,
    music_id: 8,
  },
  {
    singer: "Arijit Singh",
    artist: "Arijit Singh",
    poster:
      "https://www.filmibeat.com/ph-big/2014/06/surveen-chawla-amp;-jay-bhanushali-trailer-launch-of-hate-story-2_140203200290.jpg",
    music_name: "Aaj Phir",
    music_file: music9,
    music_id: 9,
  },
  {
    singer: "Imran Khan",
    artist: "Imran Khan",
    poster:
      "https://th.bing.com/th/id/OIP.tTvjTH2K_tjavvkbNbrTuAAAAA?rs=1&pid=ImgDetMain",
    music_name: "Aaja We Mahiya",
    music_file: music10,
    music_id: 10,
  },
  {
    singer: "Arijit Singh",
    artist: "Arijit Singh",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjNhYzc0YmItOGZjOS00NWJlLWE3ZTEtNGI3MzAxNGYwZWExXkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_.jpg",
    music_name: "Jo Tum Na Ho",
    music_file: music11,
    music_id: 11,
  },
  {
    singer: "Arijit Singh",
    artist: "Arijit Singh",
    poster:
      "https://thedainikbharat.com/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-27-at-15.02.31_cfdcae26-scaled.jpg",
    music_name: "Satranga",
    music_file: music12,
    music_id: 12,
  },
  {
    singer: "Arijit Singh",
    artist: "Arijit Singh",
    poster:
      "https://th.bing.com/th/id/OIP.Ogat48DhUw4kBYjWE0kY5gHaJQ?rs=1&pid=ImgDetMain",
    music_name: "Deva Deva",
    music_file: music13,
    music_id: 13,
  },
  {
    singer: "rahat fateh ali khan",
    artist: "rahat fateh ali khan",
    poster:
      "https://th.bing.com/th/id/R.21fc2016be74b384c9c41ac59d09e252?rik=E3BkkQc3TR1nzQ&riu=http%3a%2f%2fvmag.pk%2fwp-content%2fuploads%2f2014%2f08%2fCoke-Studio-Cover-Vmag.jpg&ehk=REgry86FnXNHDHua76qRzT4Tf09Ab7KJ00kgNUS4lvw%3d&risl=&pid=ImgRaw&r=0",
    music_name: "Afreen Afreen",
    music_file: music14,
    music_id: 14,
  },
];

export default dummyData;
