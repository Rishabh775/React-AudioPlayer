import { MdEmojiPeople } from "react-icons/md";
import Box from "./Box";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import { useSongList } from "../context/SongListContext";

export default function RightBar() {
  const [open, setOpen] = useState(false);
  const { songList } = useSongList();
  return (
    <div className="hidden lg:flex">
      <div
        className={
          open
            ? "h-screen bg-black w-[310px] overflow-y-auto  py-2"
            : "h-screen bg-black overflow-y-auto py-2"
        }
      >
        <Box className="h-full text-black overflow-x-hidden bg-gradient-to-b rounded-l-xl from-purple-900 via-purple-400 to-purple-800 py-2 overflow-y-auto ">
          <div className="flex gap-x-2">
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <MdKeyboardArrowRight size={30} />
              ) : (
                <MdKeyboardArrowLeft size={30} />
              )}
            </button>

            <div className="px-4">
              <MdEmojiPeople size={30} />
            </div>
          </div>
          <div className="grid grid-flow-col gap-2 w-[400px] py-6 px-4 overflow-x-auto">
            {songList.map((song) => (
              <div key={song.music_id} className="w-20">
                <img
                  src={song.poster}
                  className="h-20 w-20 object-cover rounded-full"
                  alt={song.music_name}
                />
              </div>
            ))}
          </div>
        </Box>
      </div>
    </div>
  );
}
