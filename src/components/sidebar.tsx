import { FaFolder, FaMusic, FaPodcast } from "react-icons/fa";
import Box from "./Box";
import loop from "../assets/images/loop.png";
import { FaHeart, FaRadio } from "react-icons/fa6";
import { SiLoop } from "react-icons/si";
import { LuListPlus } from "react-icons/lu";
import { MdPlaylistPlay } from "react-icons/md";

export default function Sidebar() {
  const sideBarData = [
    {
      title: "Discover",
      subparts: [
        {
          title: "podcasts",
          icon: <FaPodcast />,
        },
        {
          title: "Radio",
          icon: <FaRadio />,
        },
        {
          title: "New Releases",
          icon: <FaMusic />,
        },
      ],
    },
    {
      title: "Playlists",
      subparts: [
        {
          title: "Loop Originals",
          icon: <SiLoop />,
        },
        {
          title: "your Playlist",
          icon: <MdPlaylistPlay />,
        },
        {
          title: "Liked Songs",
          icon: <FaHeart />,
        },
        {
          title: "Create Playlist",
          icon: <LuListPlus />,
        },
        {
          title: "Local Audio",
          icon: <FaFolder />,
        },
      ],
    },
  ];

  return (
    <div className="flex h-full   ">
      <div className=" min-w-[270px] hidden w-auto md:flex max-w-[600px]  h-screen flex-col  gap-y-2 bg-black p-2">
        <Box className="overflow-y-auto h-full">
          <div className="flex justify-center items-center gap-2">
            <div className="text-3xl py-8 font-bold text-center">L</div>
            <img src={loop} alt="loop-logo" className=" w-14" />

            <div className="text-3xl py-8 font-bold text-center">P</div>
          </div>
          <div className="flex flex-col gap-y-2">
            {sideBarData.map((item) => (
              <div className="py-12 px-10 " key={item.title}>
                <div className="text-xl py-3 font-bold">{item.title}</div>

                {item.subparts.map((subItem) => (
                  <div className="py-2 text-base " key={subItem.title}>
                    <div className="flex  items-center cursor-pointer gap-x-4">
                      <div className="scale-125">{subItem.icon}</div>
                      <div className=""> {subItem.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
            <button className="bg-[#FFCA6E] text-black font-semibold w-4/6 mx-5  py-2 rounded-md">
              Friends Playlists
            </button>
          </div>
        </Box>
      </div>
    </div>
  );
}
