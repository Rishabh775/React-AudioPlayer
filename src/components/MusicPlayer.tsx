import { BsThreeDotsVertical } from "react-icons/bs";
import { BiVolumeLow } from "react-icons/bi";
import { BsShuffle } from "react-icons/bs";
import { RxLoop } from "react-icons/rx";
import React, { ChangeEvent, useEffect } from "react";
import { BiChevronsDown } from "react-icons/bi";
import { FiMaximize2 } from "react-icons/fi";
import { FaPause, FaPlay } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { CgPlayListAdd } from "react-icons/cg";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useMusicPlayer } from "../context/MusicPlayerContext";
import { useSongList } from "../context/SongListContext";
import { useCommunity } from "../context/Community";

const MusicPlayer: React.FC = () => {
  const {
    selectedSong,
    isPlaying,
    currentTime,
    duration,
    setDuration,
    isFullScreen,
    togglePlayPause,
    setSelectedSong,
    handleFullScreenPlayer,
    setCurrentTime,
    audioRef,
  } = useMusicPlayer();

  const { songList } = useSongList();
  const { showCommunity, setShowCommunity } = useCommunity();

  if (!selectedSong) {
    return null;
  }

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      // Set initial duration
      const handleLoadedMetadata = () => {
        if (audio.duration) {
          setDuration(audio.duration);
        }
      };

      // Update current time during playback
      const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime);
      };

      // Add event listeners
      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
      audio.addEventListener("timeupdate", handleTimeUpdate);
      // Clean up event listeners on unmount
      return () => {
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [audioRef, setCurrentTime, setDuration]);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(event.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleNextSong = () => {
    const currentIndex = songList.findIndex(
      (song) => song.music_id === selectedSong.music_id
    );
    const nextIndex = (currentIndex + 1) % songList.length;
    setSelectedSong(songList[nextIndex]);
  };

  const handlePreviousSong = () => {
    const currentIndex = songList.findIndex(
      (song) => song.music_id === selectedSong.music_id
    );
    const prevIndex = (currentIndex - 1 + songList.length) % songList.length;
    setSelectedSong(songList[prevIndex]);
  };

  return (
    <>
      {isFullScreen ? (
        <div className="music-player absolute inset-0 w-full z-30 mx-auto">
          <div className=" bg-gray-700 bg-opacity-10 w-full backdrop-blur flex flex-col md:gap-4 gap-10 items-center justify-end left-0 md:px-10 h-screen px-4 md:py-4 py-3">
            <button
              title="minimize"
              className="absolute left-20 top-20"
              onClick={handleFullScreenPlayer}
            >
              <BiChevronsDown className="w-10 h-10 hover:translate-y-3 duration-500 ease-in-out" />
            </button>
            <div className="">
              <img
                loading="lazy"
                src={selectedSong.wide_Poster}
                className="md:w-[800px] md:h-[500px] w-[40px] h-[40px] object-cover rounded-lg"
                alt={selectedSong.music_name}
              />
              <div>
                <h3 className="md:text-xl sm:text-base text-sm text-nowrap">
                  {selectedSong.music_name}
                </h3>
                <p className="md:text-lg sm:text-sm text-xs text-nowrap text-ellipsis overflow-hidden">
                  {selectedSong.artist}
                </p>
              </div>
            </div>
            <div className=" flex items-center justify-between w-full">
              <div>{formatTime(currentTime)}</div>
              <div>{formatTime(duration)}</div>
            </div>
            <div className="relative w-full">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSliderChange}
                className="w-full h-2 bg-gray-400 bg-opacity-5 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #4a90e2 0%, #9013fe ${
                    duration ? (currentTime / duration) * 100 : 0
                  }%, #cccccc2e ${
                    duration ? (currentTime / duration) * 100 : 0
                  }%, #cccccc2e 100%)`,
                }}
              />
            </div>
            <div className=" flex items-center justify-between w-full">
              <div></div>
              <div className="flex items-center md:gap-6 gap-2">
                <div
                  className="hover:bg-gray-100 hover:bg-opacity-5 rounded-full p-2"
                  onClick={handlePreviousSong}
                >
                  <AiFillCaretLeft className="md:text-3xl text-lg" />
                </div>
                {isPlaying ? (
                  <div
                    className="hover:bg-gray-100 hover:bg-opacity-5 rounded-full p-4"
                    onClick={togglePlayPause}
                  >
                    <FaPause className="md:text-2xl text-lg" />
                  </div>
                ) : (
                  <div
                    className="hover:bg-gray-100 hover:bg-opacity-5 rounded-full p-4"
                    onClick={togglePlayPause}
                  >
                    <FaPlay className="md:text-2xl text-lg" />
                  </div>
                )}
                <div
                  className="hover:bg-gray-100 hover:bg-opacity-5 rounded-full p-2"
                  onClick={handleNextSong}
                >
                  <AiFillCaretRight className="md:text-3xl text-lg" />
                </div>
              </div>
              <div className="md:flex hidden items-center gap-4">
                <CgPlayListAdd className="text-4xl" />
                <button
                  title="community"
                  onClick={() => setShowCommunity(!showCommunity)}
                >
                  <BsPeopleFill className="text-3xl" />
                </button>
                <FiMaximize2
                  className="text-2xl"
                  onClick={handleFullScreenPlayer}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="music-player fixed md:bottom-0 bottom-12 z-40 w-full left-0">
          <div className="relative">
            <input
              type="range"
              min="0"
              max={duration | 0}
              value={currentTime}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-400/20 rounded-lg absolute top-0 z-20 appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #4a90e2 0%, #9013fe ${
                  duration ? (currentTime / duration) * 100 : 0
                }%, #cccccc2e ${
                  duration ? (currentTime / duration) * 100 : 0
                }%, #cccccc2e 100%)`,
              }}
            />
          </div>
          <div className=" bg-gray-200 bg-opacity-10 w-full backdrop-blur flex md:gap-4 gap-10 items-center justify-between left-0 md:px-10 px-4 md:py-4 py-3">
            <div className="flex gap-4 items-center md:w-[20%]">
              <img
                loading="lazy"
                src={selectedSong.poster}
                className="md:w-[60px] md:h-[60px] w-[40px] h-[40px] object-cover rounded-lg"
                alt={selectedSong.music_name}
              />
              <div>
                <h3 className="md:text-lg sm:text-base text-sm text-nowrap">
                  {selectedSong.music_name}
                </h3>
                <p className="md:text-md text-gray-500/60 capitalize sm:text-sm text-xs text-nowrap text-ellipsis overflow-hidden w-full">
                  {selectedSong.artist}
                </p>
                <div className="md:block hidden text-white sm:text-sm text-xs">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>
            </div>
            <div className="flex items-center md:gap-6 gap-2">
              <BsShuffle className="w-6 h-7" />
              <div
                className="hover:bg-gray-100 hover:bg-opacity-5 rounded-full p-2"
                onClick={handlePreviousSong}
              >
                <AiFillCaretLeft className="md:text-2xl text-lg" />
              </div>
              {isPlaying ? (
                <div
                  className="hover:bg-gray-100 hover:bg-opacity-5 rounded-full p-4"
                  onClick={togglePlayPause}
                >
                  <FaPause className="md:text-xl text-lg" />
                </div>
              ) : (
                <div
                  className="hover:bg-gray-100 hover:bg-opacity-5 rounded-full p-4"
                  onClick={togglePlayPause}
                >
                  <FaPlay className="md:text-xl text-lg" />
                </div>
              )}
              <div
                className="hover:bg-gray-100 hover:bg-opacity-5 rounded-full p-2"
                onClick={handleNextSong}
              >
                <AiFillCaretRight className="md:text-2xl text-lg" />
              </div>
              <RxLoop className="w-6 h-7" />
            </div>
            <div className="md:flex hidden items-center gap-4">
              <BiVolumeLow className="w-6 h-6" />
              <CgPlayListAdd className="text-2xl" />
              <button
                title="community"
                onClick={() => setShowCommunity(!showCommunity)}
              >
                <BsPeopleFill className="text-xl" />
              </button>
              <FiMaximize2
                className="text-xl"
                onClick={handleFullScreenPlayer}
              />
              <BsThreeDotsVertical />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MusicPlayer;
