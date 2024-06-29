import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

interface Song {
  music_id: number;
  poster: string;
  music_name: string;
  artist: string;
  music_file: string;
  wide_Poster?: string;
  mood?: string;
}

interface MusicPlayerContextProps {
  selectedSong: Song | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  setDuration: (duration: number) => void;
  audioRef: React.RefObject<HTMLAudioElement>;
  isFullScreen: boolean;
  setSelectedSong: (song: Song | null) => void;
  togglePlayPause: () => void;
  playNextSong: () => void;
  playPreviousSong: () => void;
  handleSongEnd: () => void;
  handleFullScreenPlayer: () => void;
  setCurrentTime: (time: number) => void;
}

const MusicPlayerContext = createContext<MusicPlayerContextProps | undefined>(
  undefined
);

export const useMusicPlayer = () => {
  const context = useContext(MusicPlayerContext);

  if (!context) {
    throw new Error("useMusicPlayer must be used within a MusicPlayerProvider");
  }
  return context;
};

export const MusicPlayerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // const formatTime = (timeInSeconds: number) => {
  //   const minutes = Math.floor(timeInSeconds / 60);
  //   const seconds = Math.floor(timeInSeconds % 60);
  //   return (
  //     minutes.toString().padStart(2, "0") +
  //     ":" +
  //     seconds.toString().padStart(2, "0")
  //   );
  // };

  const togglePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const handleFullScreenPlayer = () => {
    setIsFullScreen((prevIsFullScreen) => !prevIsFullScreen);
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying, selectedSong]);

  useEffect(() => {
    // Start playing the audio when a new song is selected
    setIsPlaying(true);
    setCurrentTime(0); // Reset currentTime when a new song is selected
  }, [selectedSong]);

  useEffect(() => {
    if (audioRef.current) {
      const updateCurrentTime = () => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime);
        }
      };

      let intervalId: NodeJS.Timeout | null = null;
      if (isPlaying) {
        intervalId = setInterval(updateCurrentTime, 1000); // Update every second
      }

      // Cleanup on unmount or when playback stops
      return () => {
        if (intervalId) {
          clearInterval(intervalId);
        }
      };
    }
  }, [isPlaying]);

  // Set duration when a new song is selected or audio metadata is loaded
  useEffect(() => {
    const handleMetadataLoaded = () => {
      if (audioRef.current) {
        setDuration(audioRef.current.duration);
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("loadedmetadata", handleMetadataLoaded);

      return () => {
        // Cleanup on unmount
        if (audioRef.current) {
          audioRef.current.removeEventListener(
            "loadedmetadata",
            handleMetadataLoaded
          );
        }
      };
    }
  }, [selectedSong]);

  const playNextSong = () => {
    // Logic to play next song
  };

  const playPreviousSong = () => {
    // Logic to play previous song
  };

  const handleSongEnd = () => {
    playNextSong();
  };

  return (
    <MusicPlayerContext.Provider
      value={{
        selectedSong,
        isPlaying,
        currentTime,
        duration,
        setDuration,
        audioRef,
        isFullScreen,
        setSelectedSong,
        togglePlayPause,
        playNextSong,
        playPreviousSong,
        handleSongEnd,
        handleFullScreenPlayer,
        setCurrentTime,
      }}
    >
      {children}
      {selectedSong && (
        <audio
          src={selectedSong.music_file}
          ref={audioRef}
          onEnded={handleSongEnd}
        ></audio>
      )}
    </MusicPlayerContext.Provider>
  );
};
