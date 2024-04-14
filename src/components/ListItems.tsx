import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import dummyData from "../data/DummyData";
// import loop from "../assets/images/loop.png";

interface Song {
  music_id: number;
  music_file: string;
  poster: string;
  artist: string;
  music_name: string;
}

interface CurrentSong extends Song {}

export default function ListItems() {
  const [currentSong, setCurrentSong] = useState<CurrentSong>({
    music_id: 0,
    music_file: "",
    poster: "",
    artist: "",
    music_name: "",
  });

  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const playNextSong = () => {
    const currentIndex = dummyData.findIndex(
      (song) => song.music_file === currentSong.music_file
    );
    if (currentIndex !== -1 && currentIndex < dummyData.length - 1) {
      const nextSong = dummyData[currentIndex + 1];
      setCurrentSong(nextSong);
      setIsPlaying(true); // Auto-play the next song
    }
  };

  const handleSongClick = (song: Song) => {
    console.log(`Now playing: ${song.music_file}`);
    setCurrentSong(song);
    setIsPlaying(true); // Auto-play the song when clicked
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleForward = () => {
    playNextSong();
  };

  const handleBackward = () => {
    const currentIndex = dummyData.findIndex(
      (song) => song.music_file === currentSong.music_file
    );
    if (currentIndex !== -1 && currentIndex > 0) {
      const prevSong = dummyData[currentIndex - 1];
      setCurrentSong(prevSong);
      setIsPlaying(true); // Auto-play the previous song
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      if (audio) {
        setCurrentTime(audio.currentTime);
      }
    };

    const handleDurationChange = () => {
      if (audio) {
        setDuration(audio.duration);
      }
    };

    const handleEnded = () => {
      playNextSong();
    };

    if (audio) {
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("durationchange", handleDurationChange);
      audio.addEventListener("ended", handleEnded);

      return () => {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("durationchange", handleDurationChange);
        audio.removeEventListener("ended", handleEnded);
      };
    }
  }, [currentSong]);
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <div className="audio-player bg-[#ffffff69] backdrop-blur text-black rounded-lg absolute left-0 right-0 bottom-0 z-20">
        <div className="audio-controls">
          <div className="progress-bar h-2 bg-gray-800 rounded-2xl relative overflow-hidden">
            <div
              className="progress absolute h-full left-0 top-0 bg-gradient-to-r from-blue-500 to-purple-500"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            ></div>
          </div>
          <div className=" flex gap-6 justify-between items-center py-4 px-10">
            <div>{currentSong.music_name}</div>
            <div className=" flex gap-6 justify-center py-4">
              <button className="control-btn" onClick={handleBackward}>
                <FaBackward />
              </button>
              <button className="control-btn" onClick={togglePlay}>
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button className="control-btn" onClick={handleForward}>
                <FaForward />
              </button>
            </div>
            <div className="time">
              <span className="current-time">{formatTime(currentTime)}</span> /{" "}
              <span className="duration">{formatTime(duration)}</span>
            </div>
          </div>
        </div>
        <audio src={currentSong.music_file} ref={audioRef}></audio>
      </div>

      <div className="mt-2 flex lg:flex-row lg:items-stretch items-center justify-between rounded-lg sm:flex-col max-sm:flex-col gap-4">
        <div className=" flex flex-wrap gap-2 justify-start text-white bg-transparent">
          {dummyData.map((song) => (
            <div
              className={`py-2 px-4 rounded-lg cursor-pointer border border-transparent hover:border-gray-50 duration-300 bg-gray-800 hover:bg-[#291f7268] backdrop-blur-[2px]
                  hover:backdrop-blur-[2px] bg-[#aeaeae2f]"
              }`}
              key={song.music_id}
              onClick={() => handleSongClick(song)}
            >
              <img
                src={song.poster}
                className=" object-cover h-[380px] w-[270px] rounded-xl shadow-lg"
                alt=""
              />
              <p className="w-56 text-ellipsis font-bold text-xl mt-2 text-white whitespace-nowrap overflow-hidden">
                {song.music_name}
              </p>
              <p className="w-32 text-slate-500 text-ellipsis whitespace-nowrap overflow-hidden">
                {song.artist}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
