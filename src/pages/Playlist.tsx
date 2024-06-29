import Sidebar from "../components/sidebar";
import playlist from "../assets/images/playlist.png";
import playlistIcon from "../assets/images/playlist-icon.png";
import MobileHeader from "../components/MobileHeader";

const Playlist = () => {
  return (
    <>
      <Sidebar />
      <div className=" bg-gradient-to-b from-purple-600/20 to-zinc-900 w-full mr-2 my-2">
        <MobileHeader />
        <div className=" bg-white/10 rounded-lg sm:px-10 px-6 py-3 backdrop-blur m-4 flex justify-between sm:flex-row flex-col gap-4 items-center">
          <div>
            <h2 className=" font-bold text-3xl">Enjoy your Playlist</h2>
            <p className=" text-gray-50/40 mt-3 text-xl">
              Best Playlist listed here
            </p>
          </div>
          <div>
            <img loading="lazy" src={playlist} alt="" className=" w-52" />
          </div>
        </div>
        <h4 className=" px-4 py-3 text-5xl">Playlists</h4>
        <div className=" flex flex-start overflow-x-scroll">
          <div className=" bg-white/10 rounded-lg px-10 py-3 backdrop-blur m-4 text-center">
            <img loading="lazy" src={playlistIcon} alt="" className=" w-52" />
            Playlists
          </div>
          <div className=" bg-white/10 rounded-lg px-10 py-3 backdrop-blur m-4 text-center">
            <img loading="lazy" src={playlistIcon} alt="" className=" w-52" />
            Playlists
          </div>
          <div className=" bg-white/10 rounded-lg px-10 py-3 backdrop-blur m-4 text-center">
            <img loading="lazy" src={playlistIcon} alt="" className=" w-52" />
            Playlists
          </div>
        </div>
      </div>
    </>
  );
};

export default Playlist;
