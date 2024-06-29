import { AiFillDelete } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { BsPauseFill } from "react-icons/bs";
import { CgSoftwareUpload } from "react-icons/cg";
import { BsFillFileEarmarkMusicFill } from "react-icons/bs";
import Sidebar from "../components/sidebar";
import local from "../assets/images/local-indicate.png";
import { useRef, useState } from "react";
import { GrClose } from "react-icons/gr";
import MobileHeader from "../components/MobileHeader";
import useAudio from "../hooks/useAudio";
// import MusicPlayer from "../components/MusicPlayer";

const Offline = () => {
  const posterInputRef = useRef<HTMLInputElement | null>(null);
  const {
    playlist,
    // audioRef,
    // handleTrackEnd,
    handlePlayPause,
    handleDelete,
    handleUpload,
  } = useAudio();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploadActive, setIsUploadActive] = useState(false);
  const [songDetails, setSongDetails] = useState({
    title: "",
    artist: "",
    genre: "",
    tags: "",
    poster: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSongDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleUploadClick = () => {
    if (selectedFile) {
      handleUpload(selectedFile, songDetails); // Pass selectedFile and songDetails to handleUpload
      setSelectedFile(null);
      setSongDetails({
        title: "",
        artist: "",
        genre: "",
        tags: "",
        poster: "",
      });
    }
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("playlist");
    window.location.reload(); // This will reload the page and clear the state
  };

  const handlePosterClick = () => {
    if (posterInputRef.current) {
      posterInputRef.current.click();
    }
  };

  const handlePosterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const posterUrl = URL.createObjectURL(file);
      setSongDetails((prev) => ({ ...prev, poster: posterUrl }));
    }
  };

  return (
    <>
      <Sidebar />
      <div className="bg-gradient-to-b from-purple-600/20 to-zinc-900 w-full mr-2 my-2 rounded-lg max-h-[97vh] overflow-y-scroll">
        <MobileHeader />
        <div className="bg-white/10 rounded-lg sm:px-10 px-6 py-3 backdrop-blur m-4 flex justify-between sm:flex-row flex-col gap-4 items-center">
          <div>
            <h2 className="font-bold text-3xl">Enjoy your local music</h2>
            <p className="text-gray-50/40 mt-3 text-xl">Your Local on demand</p>
            {!isUploadActive && (
              <button
                className="bg-purple-600 text-white py-2 mt-4 px-20 rounded-lg"
                onClick={() => setIsUploadActive(true)}
              >
                Upload
              </button>
            )}
          </div>
          <div>
            <img loading="lazy" src={local} alt="Local" className="w-52" />
          </div>
        </div>
        <div
          className={`bg-white/10 ${
            isUploadActive
              ? "opacity-100 translate-y-0 relative py-3 m-4 duration-500 ease-linear"
              : "opacity-0 -translate-y-20 h-0 py-0 duration-500 ease-linear"
          } rounded-lg px-10 backdrop-blur`}
        >
          <div className="flex justify-between sm:flex-row flex-col gap-4">
            <div className="sm:w-1/2 w-full">
              <h2 className="text-2xl font-black">
                Add Your Music Details Here
              </h2>
              <div className="py-4">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2 w-1/2 mr-2">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      name="title"
                      placeholder="Enter song title"
                      value={songDetails.title}
                      onChange={handleInputChange}
                      className="px-4 py-1 bg-white/5 rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-1/2 mr-2">
                    <label htmlFor="artist">Artists</label>
                    <input
                      type="text"
                      name="artist"
                      placeholder="Enter artist name"
                      value={songDetails.artist}
                      onChange={handleInputChange}
                      className="px-4 py-1 bg-white/5 rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-2">
                  <div className="flex flex-col gap-2 w-1/2 mr-2">
                    <label htmlFor="genre">Genre</label>
                    <input
                      type="text"
                      name="genre"
                      placeholder="Enter song genre"
                      value={songDetails.genre}
                      onChange={handleInputChange}
                      className="px-4 py-1 bg-white/5 rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-1/2 mr-2">
                    <label htmlFor="tags">Tags</label>
                    <input
                      type="text"
                      name="tags"
                      placeholder="Enter song tags"
                      value={songDetails.tags}
                      onChange={handleInputChange}
                      className="px-4 py-1 rounded-lg bg-white/5"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 mr-2 mt-2">
                  <label htmlFor="poster">Poster Image</label>
                  <div className="flex items-center gap-2">
                    <CgSoftwareUpload
                      size={30}
                      className="cursor-pointer"
                      onClick={handlePosterClick}
                    />
                    {songDetails.poster && (
                      <div className="flex justify-between w-full items-center bg-white/5 px-2 py-1 rounded-lg">
                        <em className="text-ellipsis">{songDetails.poster}</em>
                        <GrClose
                          className="hover:text-purple-500 cursor-pointer"
                          onClick={() =>
                            setSongDetails((prev) => ({ ...prev, poster: "" }))
                          }
                        />
                      </div>
                    )}
                  </div>
                  <input
                    ref={posterInputRef}
                    type="file"
                    accept="image/mp4"
                    className="hidden"
                    placeholder="poster..."
                    onChange={handlePosterChange}
                  />
                </div>
              </div>
            </div>
            <div className="sm:w-1/2 w-full">
              <h2 className="text-2xl font-black text-center">
                Add or Drop Your Music Here
              </h2>
              <div className="flex relative justify-center items-center h-[200px] mx-auto my-4 max-w-xl border rounded-lg border-dashed px-4">
                <label htmlFor="music"></label>
                <input
                  type="file"
                  name="music"
                  placeholder="music"
                  onChange={handleFileChange}
                  className="absolute opacity-0 inset-0 max-w-xl"
                />
                <BsFillFileEarmarkMusicFill className="text-6xl fill-purple-400/40" />
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <div
              onClick={() => setIsUploadActive(false)}
              className="bg-slate-700/40 text-white py-2 px-20 rounded-lg cursor-pointer"
            >
              Cancel
            </div>
            <div
              onClick={handleUploadClick}
              className="bg-purple-600 text-white py-2 px-20 rounded-lg cursor-pointer"
            >
              Add Music
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between w-full px-6">
          <h4 className="text-2xl">Local Music</h4>
          <button
            onClick={clearLocalStorage}
            className="bg-red-500 px-2 text-sm py-1 rounded-lg"
          >
            Clear Music List
          </button>
        </div>
        {playlist.length <= 0 ? (
          <div className="bg-white/10 rounded-lg px-10 py-3 backdrop-blur m-4">
            No Local Music Available
          </div>
        ) : (
          <ul className="bg-white/10 rounded-lg px-4 py-3 backdrop-blur m-4 mb-2">
            {playlist.map((song, index) => (
              <li
                className="py-4 mb-2 bg-black/10 px-4 flex justify-between items-center w-full"
                key={index}
              >
                <div className="flex gap-4 items-center">
                  {song.poster && (
                    <img
                      src={song.poster}
                      alt="Poster"
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  )}
                  <div className="">
                    <p className=" bg-slate-300/10 px-4 w-fit rounded-xl text-xs">
                      {song.tags}
                    </p>
                    <div className="flex">
                      <h3 className="text-2xl capitalize">{song.title}</h3>
                    </div>
                    <div className="flex gap-4 text-slate-200/30">
                      <p>{song.artist}</p>
                      <p>{song.genre}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <button
                    onClick={(e) => handlePlayPause(e, song.lastModified)}
                  >
                    {song.isPlaying ? (
                      <BsPauseFill size={30} />
                    ) : (
                      <BsFillPlayFill size={30} />
                    )}
                  </button>
                  <button
                    title="delete"
                    onClick={() => handleDelete(song.lastModified)}
                  >
                    <AiFillDelete size={23} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* <MusicPlayer
        selectedSong={selectedSong}
        onSongEnd={handleSongEnd}
        onPlayNext={playNextSong}
        onPlayPrevious={playPreviousSong}
      /> */}
    </>
  );
};

export default Offline;
