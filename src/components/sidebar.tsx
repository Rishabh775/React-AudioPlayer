import { MdExplore } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { FaFolder, FaMusic, FaPodcast } from "react-icons/fa";
import Box from "./Box";
import { FaHeart, FaRadio } from "react-icons/fa6";
import { SiLoop } from "react-icons/si";
import { LuListPlus } from "react-icons/lu";
import { MdPlaylistPlay } from "react-icons/md";
// import { Link } from "react-router-dom";
import LoopLogo from "./LoopLogo";
import { Link } from "react-router-dom";

interface sidebarProps {
  hidden?: string;
}

export default function Sidebar({ hidden }: sidebarProps) {
  const sideBarData = [
    {
      title: "Discover",
      subparts: [
        {
          title: "Home",
          redirect: "/",
          icon: <HiHome className="w-5 h-5" />,
        },
        {
          title: "Explore",
          redirect: "/explore",
          icon: <MdExplore className="w-5 h-5" />,
        },
        {
          title: "Music",
          redirect: "/music",
          icon: <FaMusic />,
        },
      ],
    },
    {
      title: "Discover",
      subparts: [
        {
          title: "podcasts",
          redirect: "/podcast",
          icon: <FaPodcast />,
        },
        {
          title: "Radio",
          redirect: "/radio",
          icon: <FaRadio />,
        },
        {
          title: "New Releases",
          redirect: "/new-releases",
          icon: <FaMusic />,
        },
        {
          title: "Loop Originals",
          redirect: "/loop-originals",
          icon: <SiLoop />,
        },
      ],
    },
    {
      title: "Playlists",
      subparts: [
        {
          title: "your Playlist",
          redirect: "/playlist",
          icon: <MdPlaylistPlay />,
        },
        {
          title: "Liked Songs",
          redirect: "/liked-songs",
          icon: <FaHeart />,
        },
        {
          title: "Create Playlist",
          redirect: "/create-playlist",
          icon: <LuListPlus />,
        },
        {
          title: "Local Audio",
          redirect: "/local-music",
          icon: <FaFolder />,
        },
      ],
    },
  ];

  return (
    <div className="flex h-full sticky z-30 top-0">
      <div
        className={` min-w-[270px] w-auto ${
          hidden ? hidden : "hidden bg-black p-2"
        }  md:flex max-w-[600px] h-screen flex-col gap-y-2`}
      >
        <Box className="overflow-y-auto h-full bg-gradient-to-b from-purple-800/30 to-neutral-950 sm:rounded-lg">
          <LoopLogo />
          <div className="flex flex-col gap-y-1">
            {sideBarData.map((item) => (
              <div className=" px-10 " key={item.title}>
                <div className="text-xl py-3 font-bold">{item.title}</div>
                {item.subparts.map((subItem) => (
                  <div className=" text-base " key={subItem.title}>
                    <Link
                      to={subItem.redirect}
                      className="flex  items-center cursor-pointer gap-x-4 hover:bg-gray-50 hover:bg-opacity-10 px-4 py-2 rounded-lg"
                    >
                      <div className="scale-125">{subItem.icon}</div>
                      <div className=""> {subItem.title}</div>
                    </Link>
                  </div>
                ))}
              </div>
            ))}
            <button className="bg-[#FFCA6E] text-black font-semibold w-4/6 mx-5 mt-2 py-2 rounded-md">
              Friends Playlists
            </button>
          </div>
        </Box>
      </div>
    </div>
  );
}
