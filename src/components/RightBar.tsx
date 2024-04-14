import { BsMusicNoteList } from "react-icons/bs";
import Box from "./Box";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

export default function RightBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="hidden lg:flex">
      <div
        className={
          open
            ? "h-screen bg-black w-[300px] px-2 overflow-y-auto  py-2"
            : "h-screen bg-black px-2 overflow-y-auto py-2"
        }
      >
        <Box className="h-full text-black bg-[#FFCA6E] py-2 overflow-y-auto ">
          <div className="flex gap-x-2">
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <MdKeyboardArrowRight size={30} />
              ) : (
                <MdKeyboardArrowLeft size={30} />
              )}
            </button>

            <div className="px-4">
              <BsMusicNoteList size={30} />
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}
