import React, { createContext, useState, useContext, ReactNode } from "react";
import dummyData from "../data/DummyData"; // Adjust the path as necessary

interface Song {
  music_id: number;
  poster: string;
  music_name: string;
  artist: string;
  music_file: string;
  wide_Poster?: string;
  mood?: string;
}

interface SongListContextProps {
  songList: Song[];
  setSongList: (songs: Song[]) => void;
}

const SongListContext = createContext<SongListContextProps | undefined>(
  undefined
);

export const useSongList = () => {
  const context = useContext(SongListContext);
  if (!context) {
    throw new Error("useSongList must be used within a SongListProvider");
  }
  return context;
};

export const SongListProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [songList, setSongList] = useState<Song[]>(dummyData);

  return (
    <SongListContext.Provider value={{ songList, setSongList }}>
      {children}
    </SongListContext.Provider>
  );
};
