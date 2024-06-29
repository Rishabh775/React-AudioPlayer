import { useEffect, useRef, useState } from "react";
import { AudioFile } from "../types/files";

export default function useAudio() {
  const [playlist, setPlaylist] = useState(() => {
    const saved = localStorage.getItem("playlist");
    const initialValue: AudioFile[] = JSON.parse(saved || "[]");
    return initialValue;
  });
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    localStorage.setItem("playlist", JSON.stringify(playlist));
  }, [playlist]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
      setPlaylist((prev) =>
        prev.map((track, index) =>
          index === currentTrackIndex
            ? { ...track, isPlaying: true }
            : { ...track, isPlaying: false }
        )
      );
    }
  }, [currentTrackIndex]);

  const handleUpload = (file: File, songDetails: any) => {
    const url = URL.createObjectURL(file);
    setPlaylist((prev) => [
      ...prev,
      {
        name: file.name,
        lastModified: file.lastModified,
        size: file.size,
        isPlaying: false,
        links: url,
        ...songDetails, // Add song details to the playlist item
      },
    ]);
  };

  const handleDelete = (lastModified: number) => {
    setPlaylist((prev) =>
      prev.filter((track) => track.lastModified !== lastModified)
    );
  };

  const handleTrackEnd = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === playlist.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePlayPause = (e: React.MouseEvent, lastModified: number) => {
    e.preventDefault();
    const newPlaylist = playlist.map((track) => {
      if (track.lastModified === lastModified) {
        return { ...track, isPlaying: !track.isPlaying };
      }
      return { ...track, isPlaying: false };
    });
    setPlaylist(newPlaylist);
    const newTrackIndex = newPlaylist.findIndex(
      (track) => track.lastModified === lastModified
    );
    setCurrentTrackIndex(newTrackIndex);
  };

  return {
    playlist,
    currentTrackIndex,
    audioRef,
    handleUpload,
    handleTrackEnd,
    handlePlayPause,
    handleDelete,
  };
}
