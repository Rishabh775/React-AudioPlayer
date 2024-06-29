import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import Sidebar from "../components/sidebar";
import original from "../assets/images/loop-original-top.png";
import playlistIcon from "../assets/images/playlist-icon.png";
import Modal from "../components/Modal";
import loopOriginal from "../assets/images/loop-original.webp";
import { GrClose } from "react-icons/gr";
import toast from "react-hot-toast";
import MobileHeader from "../components/MobileHeader";

interface Song {
  songName: string;
  artistName: string;
  genre: string;
  tags: string;
  posterImage: File | null;
  coverImage: File | null;
  songFile: File | null;
}

const LoopOriginals: React.FC = () => {
  const [isDetailModal, setIsDetailModal] = useState<boolean>(false);
  const [song, setSong] = useState<Song>({
    songName: "",
    artistName: "",
    genre: "",
    tags: "",
    posterImage: null,
    coverImage: null,
    songFile: null,
  });

  const open = () => {
    setIsDetailModal(true);
  };

  const close = () => {
    setIsDetailModal(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSong((prevSong) => ({
      ...prevSong,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setSong((prevSong) => ({
        ...prevSong,
        [name]: files[0],
      }));
    }
  };

  const handleSongSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("songName", song.songName);
      formData.append("artistName", song.artistName);
      formData.append("genre", song.genre);
      formData.append("tags", song.tags);
      if (song.posterImage) formData.append("posterImage", song.posterImage);
      if (song.coverImage) formData.append("coverImage", song.coverImage);
      if (song.songFile) formData.append("songFile", song.songFile);

      await axios.post(
        "https://loop-server.onrender.com/api/songs/new",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Successfully created a new song");
      close();
    } catch (error) {
      console.error("Error creating song:", error);
      toast.error("Error creating song");
    }
  };

  return (
    <>
      <Sidebar />
      <Modal
        isOpen={isDetailModal}
        close={close}
        src={loopOriginal}
        iconStyle={"w-20 h-16"}
        title={"Please Add your song Details"}
      >
        <form
          onSubmit={handleSongSubmit}
          method="post"
          encType="multipart/form-data"
        >
          <div className="flex justify-between items-center w-full pr-2 mt-2">
            <div className="flex flex-col gap-2 w-1/2 mr-2">
              <label htmlFor="songName">Song Name</label>
              <input
                type="text"
                name="songName"
                value={song.songName}
                onChange={handleChange}
                className="px-4 py-1 bg-transparent border rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <label htmlFor="artistName">Artist Name</label>
              <input
                type="text"
                name="artistName"
                value={song.artistName}
                onChange={handleChange}
                className="px-4 py-1 bg-transparent border rounded-lg"
              />
            </div>
          </div>
          <div className="flex justify-between items-center w-full pr-2 mt-2">
            <div className="flex flex-col gap-2 w-1/2 mr-2">
              <label htmlFor="genre">Genre</label>
              <input
                type="text"
                name="genre"
                value={song.genre}
                onChange={handleChange}
                className="px-4 py-1 bg-transparent border rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <label htmlFor="tags">Tags</label>
              <input
                type="text"
                name="tags"
                value={song.tags}
                onChange={handleChange}
                className="px-4 py-1 bg-transparent border rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex justify-between items-center">
              <label htmlFor="posterImage">Poster Image</label>
              <input
                type="file"
                name="posterImage"
                onChange={handleFileChange}
                className="hidden"
              />
              <button
                onClick={() =>
                  document.getElementsByName("posterImage")[0].click()
                }
                className="bg-white/10 hover:bg-transparent border border-transparent hover:border-white/10 duration-200 backdrop-blur-sm px-4 py-1 rounded-lg text-sm"
              >
                Add
              </button>
            </div>
            {/* Display selected poster image */}
            {song.posterImage && (
              <div className="flex justify-between items-center bg-white/5 px-2 py-1 rounded-lg">
                <em className="text-ellipsis">{song.posterImage.name}</em>
                <GrClose className="hover:text-purple-500" />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex justify-between items-center">
              <label htmlFor="coverImage">Cover Image</label>
              <input
                type="file"
                name="coverImage"
                onChange={handleFileChange}
                className="hidden"
              />
              <button
                onClick={() =>
                  document.getElementsByName("coverImage")[0].click()
                }
                className="bg-white/10 hover:bg-transparent border border-transparent hover:border-white/10 duration-200 backdrop-blur-sm px-4 py-1 rounded-lg text-sm"
              >
                Add
              </button>
            </div>
            {/* Display selected cover image */}
            {song.coverImage && (
              <div className="flex justify-between items-center bg-white/5 px-2 py-1 rounded-lg">
                <em className="text-ellipsis">{song.coverImage.name}</em>
                <GrClose className="hover:text-purple-500" />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex justify-between items-center">
              <label htmlFor="songFile">Song</label>
              <input
                type="file"
                name="songFile"
                onChange={handleFileChange}
                className="hidden"
              />
              <button
                onClick={() =>
                  document.getElementsByName("songFile")[0].click()
                }
                className="bg-white/10 hover:bg-transparent border border-transparent hover:border-white/10 duration-200 backdrop-blur-sm px-4 py-1 rounded-lg text-sm"
              >
                Add
              </button>
            </div>
            {/* Display selected song file */}
            {song.songFile && (
              <div className="flex justify-between items-center bg-white/5 px-2 py-1 rounded-lg">
                <em className="text-ellipsis">{song.songFile.name}</em>
                <GrClose className="hover:text-purple-500" />
              </div>
            )}
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-purple-500/20 border border-transparent hover:border-purple-500/20 hover:bg-purple-500/10 duration-300 px-10 py-2 rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
      <div className=" bg-gradient-to-b from-purple-600/20 to-zinc-900 w-full mr-2 my-2">
        <MobileHeader />
        <div className=" bg-white/10 rounded-lg sm:px-10 px-6 py-3 backdrop-blur m-4 flex justify-between sm:flex-row flex-col gap-4 items-center">
          <div>
            <h2 className=" font-bold text-3xl">Time To be Original</h2>
            <p className=" text-gray-50/40 mt-3 text-xl">
              Upload your original Art here
            </p>
          </div>
          <div>
            <img loading="lazy" src={original} alt="" className=" w-52" />
          </div>
        </div>
        <div className="flex justify-between flex-wrap px-4 py-2 items-center">
          <h4 className=" sm:text-5xl text-4xl">Loop Originals</h4>
          <button
            className="bg-white text-black px-4 py-2 rounded-lg sm:text-base text-xs"
            onClick={open}
          >
            Add new Song
          </button>
        </div>
        <div className=" flex flex-start overflow-x-auto">
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

export default LoopOriginals;
