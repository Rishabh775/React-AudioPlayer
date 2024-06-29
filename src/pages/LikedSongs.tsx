import Sidebar from "../components/sidebar";
import likedChar from "../assets/images/liked-char.png";
import playlistIcon from "../assets/images/playlist-icon.png";
import MobileHeader from "../components/MobileHeader";

const LikedSongs = () => {
  return (
    <>
      <Sidebar />
      <div className=" bg-gradient-to-b from-purple-600/20 to-zinc-900 w-full mr-2 my-2">
        <MobileHeader />
        <div className=" bg-white/10 rounded-lg sm:px-10 px-6 py-3 backdrop-blur m-4 flex justify-between sm:flex-row flex-col gap-4 items-center">
          <div>
            <h2 className=" font-bold text-3xl">Recently Liked Songs</h2>
            <p className=" text-gray-50/40 mt-3 text-xl">
              All your Liked Songs Listed
            </p>
          </div>
          <div>
            <img loading="lazy" src={likedChar} alt="" className=" w-52" />
          </div>
        </div>
        <h4 className=" px-4 py-3 text-5xl">Liked Songs</h4>
        <div className=" flex flex-start overflow-x-scroll">
          <div className=" bg-white/10 rounded-lg px-10 py-3 backdrop-blur m-4 text-center">
            <img loading="lazy" src={playlistIcon} alt="" className=" w-52" />
            Liked Song
          </div>
          <div className=" bg-white/10 rounded-lg px-10 py-3 backdrop-blur m-4 text-center">
            <img loading="lazy" src={playlistIcon} alt="" className=" w-52" />
            Liked Song
          </div>
          <div className=" bg-white/10 rounded-lg px-10 py-3 backdrop-blur m-4 text-center">
            <img loading="lazy" src={playlistIcon} alt="" className=" w-52" />
            Liked Song
          </div>
        </div>
      </div>
    </>
  );
};

export default LikedSongs;
