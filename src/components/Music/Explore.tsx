// import React, { useEffect, useState } from "react";
// import axios from "axios";
// const Explore = () => {
//   const [exploreMusic, setExploreMusic] = useState("");

//   useEffect(() => {
//     const options = {
//       method: "GET",
//       url: "https://spotify23.p.rapidapi.com/tracks/",
//       params: {
//         ids: "4WNcduiCmDNfmTEz7JvmLv",
//       },
//       headers: {
//         "X-RapidAPI-Key": "58ca491bccmshbf3982fa80d2e91p1ea0f4jsna01188d2014b",
//         "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
//       },
//     };

//     const getResponse = async () => {
//       try {
//         const response = await axios.request(options);
//         console.log(response.data);
//         setExploreMusic(response.data.tracks[0].album.artists[0].uri);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     getResponse();
//   }, []);

//   return (
//     <div>
//       <h2>{exploreMusic}</h2>
//       <audio src={exploreMusic} autoPlay></audio>
//       <p></p>
//     </div>
//   );
// };

// export default Explore;
