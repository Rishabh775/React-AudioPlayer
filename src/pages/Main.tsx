// import { BsPersonCircle } from "react-icons/bs";
// import { CgCommunity } from "react-icons/cg";
// import { SiChromecast } from "react-icons/si";
// import { CgPlayListAdd } from "react-icons/cg";
// import { MdOutlineSwapCalls } from "react-icons/md";
// import { RxLoop } from "react-icons/rx";
// import { BiPlayCircle } from "react-icons/bi";
// import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
// import { AiOutlineUpload } from "react-icons/ai";
// import useAudio from "../hooks/useAudio";
// import { FaTrash } from "react-icons/fa";
import Sidebar from "../components/sidebar";
import "../App.css";

const Main = () => {
  // const {
  //   playlist,
  //   currentTrackIndex,
  //   audioRef,
  //   handleUpload,
  //   handleTrackEnd,
  //   handlePlayPause,
  //   handleDelete,
  // } = useAudio();

  return (
    <>
      <Sidebar />
      {/* <div className="w-5/6 absolute right-0">
        <div className=" bg-black  flex  text-white justify-between px-6 py-8 sm:p-8">
          <h1 className=" font-bold text-3xl sm:text-4xl">JUKEBOX</h1>
          <div>
            <BsPersonCircle size={40} />
          </div>
        </div>
        <div className="flex lg:flex-row lg:items-stretch items-center justify-between rounded-lg sm:flex-col max-sm:flex-col gap-4">
          <div className="sm:flex items-center justify-center w-[20%] hidden sm:m-0">
            <div className="flex flex-col items-center w-full h-full space-y-8 bg-gray-100 p-8">
              <h2 className="text-4xl font-bold">Community</h2>
              <div className="w-full flex flex-col hide-scroll px-2 gap-2 max-h-[200px] scroll-m-0 overflow-y-scroll overflow-x-hidden">
                {playlist.map((track, index) => (
                  <div
                    className="flex items-center gap-2 font-semibold cursor-pointer "
                    key={index}
                  >
                    <label
                      onClick={(e) => handlePlayPause(e, track.lastModified)}
                      className={`border-2 text-ellipsis text-nowrap relative flex justify-between w-full ${
                        track.isPlaying ? "text-gray-400" : "text-lg"
                      } border-gray-400 rounded-lg p-2 hover:bg-slate-100 duration-300 hover:translate-x-1  hover:scale-[1.009]`}
                    >
                      {track.name}
                      <button
                        onClick={() => handleDelete(track.lastModified)}
                        className=" hover:text-red-500 absolute top-0 right-0 bg-slate-100 p-3 hover:scale-105"
                      >
                        <FaTrash />
                      </button>
                    </label>
                  </div>
                ))}
                {playlist.length === 0 && (
                  <p className="font-bold text-center text-lg">
                    No songs available. Please add new songs.
                  </p>
                )}
              </div>
              <form className="flex border-2 rounded-lg px-2 items-center w-full">
                <AiOutlineUpload size={30} />
                <input
                  type="file"
                  name="audio"
                  onChange={handleUpload}
                  accept="audio/*"
                  className="w-full p-4 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </form>
            </div>
          </div>
          <div className="flex items-center pt-10 pb-20 justify-center max-lg:w-1/3 w-2/6 sm:m-0">
            <div className="flex flex-col items-center w-full h-full space-y-8 bg-gray-100 p-8">
              <h2 className="text-4xl font-bold">Songs</h2>
              <div className="w-full flex flex-col hide-scroll px-2 gap-2 max-h-[200px] scroll-m-0 overflow-y-scroll overflow-x-hidden">
                {playlist.map((track, index) => (
                  <div
                    className="flex items-center gap-2 font-semibold cursor-pointer "
                    key={index}
                  >
                    <label
                      onClick={(e) => handlePlayPause(e, track.lastModified)}
                      className={`border-2 text-ellipsis text-nowrap relative flex justify-between w-full ${
                        track.isPlaying ? "text-gray-400" : "text-lg"
                      } border-gray-400 rounded-lg p-2 hover:bg-slate-100 duration-300 hover:translate-x-1  hover:scale-[1.009]`}
                    >
                      {track.name}
                      <button
                        onClick={() => handleDelete(track.lastModified)}
                        className=" hover:text-red-500 absolute top-0 right-0 bg-slate-100 p-3 hover:scale-105"
                      >
                        <FaTrash />
                      </button>
                    </label>
                  </div>
                ))}
                {playlist.length === 0 && (
                  <p className="font-bold text-center text-lg">
                    No songs available. Please add new songs.
                  </p>
                )}
              </div>
              <form className="flex border-2 rounded-lg px-2 items-center w-full">
                <AiOutlineUpload size={30} />
                <input
                  type="file"
                  name="audio"
                  onChange={handleUpload}
                  accept="audio/*"
                  className="w-full p-4 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </form>
            </div>
          </div>
          <div className="sm:flex items-center justify-center w-[20%] hidden sm:m-0">
            <div className="flex flex-col items-center w-full h-full space-y-8 bg-gray-100 p-8">
              <h2 className="text-4xl font-bold">Playlist</h2>
              <div className="w-full flex flex-col hide-scroll px-2 gap-2 max-h-[200px] scroll-m-0 overflow-y-scroll overflow-x-hidden">
                {playlist.map((track, index) => (
                  <div
                    className="flex items-center  flex-wrap gap-2 font-semibold cursor-pointer "
                    key={index}
                  >
                    <label
                      onClick={(e) => handlePlayPause(e, track.lastModified)}
                      className={`border-2 text-ellipsis text-nowrap relative flex justify-between w-full ${
                        track.isPlaying ? "text-gray-400" : "text-lg"
                      } border-gray-400 rounded-lg p-2 hover:bg-slate-100 duration-300 hover:translate-x-1  hover:scale-[1.009]`}
                    >
                      {track.name}
                      <button
                        onClick={() => handleDelete(track.lastModified)}
                        className=" hover:text-red-500 absolute top-0 right-0 bg-slate-100 p-3 hover:scale-105"
                      >
                        <FaTrash />
                      </button>
                    </label>
                  </div>
                ))}
                {playlist.length === 0 && (
                  <p className="font-bold text-center text-lg">
                    No songs available. Please add new songs.
                  </p>
                )}
              </div>
              <form className="flex border-2 rounded-lg px-2 items-center w-full">
                <AiOutlineUpload size={30} />
                <input
                  type="file"
                  name="audio"
                  onChange={handleUpload}
                  accept="audio/*"
                  className="w-full p-4 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </form>
            </div>
          </div>
          <div className="flex z-10 fixed bottom-0 left-0 bg-black w-full">
            <div className=" backdrop-blur-lg  flex-col items-center justify-center text-white w-full h-full p-4">
              <div className="flex gap-4 items-center sm:flex-row flex-col justify-between pb-2">
                <div className="flex sm:flex-col flex-row gap-4">
                  <h2 className="sm:text-3xl text-2xl flex items-center">
                    Now playing:
                  </h2>
                  <p className="text-center text-sm">
                    {playlist[currentTrackIndex]?.name
                      ? playlist[currentTrackIndex].name
                      : "No song selected"}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-6 py-2">
                    <MdOutlineSwapCalls className="sm:text-3xl text-2xl" />
                    <AiFillCaretLeft className="sm:text-5xl text-4xl" />
                    <BiPlayCircle
                      onClick={() =>
                        audioRef.current?.paused
                          ? audioRef.current?.play()
                          : audioRef.current?.pause()
                      }
                      className="sm:text-5xl text-4xl"
                    />
                    <AiFillCaretRight className="sm:text-5xl text-4xl" />
                    <RxLoop className="sm:text-2xl text-2xl" />
                  </div>
                </div>
                <div className="sm:flex items-center gap-6 hidden">
                  <CgPlayListAdd className="text-4xl " />
                  <SiChromecast className="text-3xl" />
                  <CgCommunity className="text-5xl " />
                </div>
              </div>
            //    <button
            //   onClick={() => audioRef.current?.play()}
            //   className="text-white bg-blue-500 px-4 py-2 rounded-md"
            // >
            //   Play
            // </button> 
              <div className="flex items-center gap-2">
                <audio
                  className=" sm:w-[70%] hidden max-w-2xl mx-auto"
                  ref={audioRef}
                  src={playlist[currentTrackIndex]?.links}
                  onEnded={handleTrackEnd}
                  controls
                ></audio>
                <div className="sm:hidden items-center gap-6 flex">
                  <CgPlayListAdd className="text-3xl" />
                  <SiChromecast className="text-2xl" />
                  <CgCommunity className="text-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Main;
