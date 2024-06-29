import { RiSearch2Fill } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";
import { HiOutlineMusicNote } from "react-icons/hi";
import { FaMusic } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { MdPersonOutline } from "react-icons/md";
import { RiHomeSmileFill } from "react-icons/ri";
import { RiHomeSmileLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { CgMenuRight } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSetting } from "react-icons/ai";
import { MdLightMode } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { twMerge } from "tailwind-merge";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import Button from "./Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useContext } from "react";
import { useAuth } from "../context/UserContext";
import axios from "axios";
import Cookie from "js-cookie";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import LoopLogo from "./LoopLogo";
import Sidebar from "./sidebar";

interface HeaderProps {
  // children?: React.ReactNode;
  className?: string;
}
export default function Header({ className }: HeaderProps) {
  // const { userLogged, setUserLogged } = useContext(UserContext);
  const location = useLocation();
  const { userLogged, setUserLogged }: any = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const token = Cookie.get("token");
  const [activeNav, setActiveNav] = useState(location.pathname);

  const handleLogout = async (): Promise<void> => {
    try {
      await axios.get("https://loop-server.onrender.com/api/auth/logout");
      setUserLogged(false);
      Cookie.remove("token");
      toast.success("User logged out successfully");
      navigate("/");
    } catch (error) {
      // console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    // console.log(userLogged);
  }, [userLogged]);
  return (
    <>
      <div className="sm:hidden absolute bottom-0 flex justify-center w-full z-20">
        <ul className=" flex w-full h-[50px] justify-around items-center py-1 bg-black/40 backdrop-blur">
          <Link to={"/"} onClick={() => setActiveNav("/")}>
            {activeNav === "/" ? (
              <div className="flex justify-center flex-col items-center">
                <RiHomeSmileFill className="text-2xl" />
                <h3 className="text-xs font-bold">Home</h3>
              </div>
            ) : (
              <div className="flex justify-center flex-col items-center">
                <RiHomeSmileLine className="text-2xl" />
                <h3 className="text-xs">Home</h3>
              </div>
            )}
          </Link>
          <Link to={"/explore"} onClick={() => setActiveNav("/explore")}>
            {activeNav === "/explore" ? (
              <div className="flex justify-center flex-col items-center">
                <RiSearch2Fill className="text-2xl" />
                <h3 className="text-xs font-bold">Explore</h3>
              </div>
            ) : (
              <div className="flex justify-center flex-col items-center">
                <RiSearch2Line className="text-2xl" />
                <h3 className="text-xs">Explore</h3>
              </div>
            )}
          </Link>
          <Link to={"/music"} onClick={() => setActiveNav("/music")}>
            {activeNav === "/music" ? (
              <div className="flex justify-center flex-col items-center">
                <FaMusic className="text-2xl" />
                <h3 className="text-xs font-bold">Music</h3>
              </div>
            ) : (
              <div className="flex justify-center flex-col items-center">
                <HiOutlineMusicNote className="text-2xl" />
                <h3 className="text-xs">Music</h3>
              </div>
            )}
          </Link>
          <div onClick={() => setActiveNav("/profile")}>
            {activeNav === "/profile" ? (
              <div className="text-right">
                <Menu>
                  <MenuButton className="inline-flex items-center bg-gray-800/10 text-sm/6 rounded-full font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700/20 data-[open]:bg-gray-700/20 data-[focus]:outline-1 data-[focus]:outline-white">
                    <div className="flex justify-center flex-col items-center">
                      <MdPerson className="text-2xl" />
                      <h3 className="text-xs">Profile</h3>
                    </div>
                  </MenuButton>
                  <Transition
                    enter="transition ease-out duration-75"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <MenuItems
                      anchor="bottom end"
                      className="w-52 z-30 origin-top-right rounded-xl border border-white/5 bg-purple-600/30 backdrop-blur-sm p-1 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none"
                    >
                      <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                          <CgProfile className="size-4 fill-white/30" />
                          Profile
                        </button>
                      </MenuItem>
                      <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                          <AiOutlineSetting className="size-4 fill-white/80" />
                          Settings
                        </button>
                      </MenuItem>
                      <div className="my-1 h-px bg-white/5" />
                      <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                          <MdLightMode className="size-4 fill-white/80" />
                          theme
                        </button>
                      </MenuItem>
                      <MenuItem>
                        <button
                          className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                          onClick={handleLogout}
                        >
                          <HiOutlineLogout className="size-4 fill-white/30" />
                          Logout
                        </button>
                      </MenuItem>
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
            ) : (
              <div className="flex justify-center flex-col items-center">
                <MdPersonOutline className="text-2xl" />
                <h3 className="text-xs">Profile</h3>
              </div>
            )}
          </div>
        </ul>
      </div>

      {showMenu && (
        <div>
          <Sidebar hidden={"block absolute z-30 bg-black"} />
          {/* <div className="absolute top-0 z-30 bg-white text-black px-14 py-1 rounded-lg mx-6">
            Logout
          </div> */}
        </div>
      )}
      <div className={twMerge(`h-fit py-3 px-4`, className)}>
        <div className="w-full flex items-center justify-between">
          <div className="hidden lg:flex gap-x-2 w-[30%] text-black items-center relative">
            <input
              type="search"
              placeholder="Search Music"
              className=" bg-purple-900/20 border border-purple-600/0 hover:border-purple-400/20 outline-none text-gray-300 rounded-2xl px-4 py-2 w-full pl-14"
            />
            <BiSearch
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
              size={25}
            />
          </div>
          {/* <div className="hidden md:flex items-center gap-x-10 text-white text-xl font-medium">
            <Link
              to="/"
              className={` ${
                activeNav === "/"
                  ? "bg-gradient-to-r from-violet-500 to-pink-700 bg-clip-text text-transparent"
                  : " hover:text-white/60 duration-300"
              } `}
            >
              Home
            </Link>
            <Link
              to="/explore"
              className={` ${
                activeNav === "/explore"
                  ? "bg-gradient-to-r from-violet-500 to-pink-700 bg-clip-text text-transparent"
                  : "hover:text-white/60 duration-300"
              }`}
            >
              Explore
            </Link>
            <Link
              onClick={() => setActiveNav("music")}
              to="/music"
              className={` ${
                activeNav === "/music"
                  ? "bg-gradient-to-r from-violet-500 to-pink-700 bg-clip-text text-transparent"
                  : " hover:text-white/60 duration-300"
              } `}
            >
              Music
            </Link>
          </div> */}
          <div className="md:hidden">
            <LoopLogo />
          </div>

          {userLogged && token ? (
            <>
              <div className="text-right md:block hidden">
                <Menu>
                  <MenuButton className="inline-flex items-center gap-2 bg-gray-800/10 p-1 mr-6 text-sm/6 rounded-full font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700/20 data-[open]:bg-gray-700/20 data-[focus]:outline-1 data-[focus]:outline-white">
                    <img
                      loading="lazy"
                      src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Profile-Pic"
                      className="w-8 h-8 object-cover rounded-full"
                    />
                    {/* <div className="">
                      <h3>User..</h3>
                    </div> */}
                  </MenuButton>
                  <Transition
                    enter="transition ease-out duration-75"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <MenuItems
                      anchor="bottom end"
                      className="w-52 origin-top-right rounded-xl border border-white/5 bg-purple-600/30 backdrop-blur-sm p-1 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none"
                    >
                      {/* <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                          <CgProfile className="size-4 fill-white/30" />
                          Profile
                        </button>
                      </MenuItem> */}
                      <MenuItem>
                        <Link
                          to={"/settings"}
                          className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                        >
                          <AiOutlineSetting className="size-4 fill-white/80" />
                          Settings
                        </Link>
                      </MenuItem>
                      <div className="my-1 h-px bg-white/5" />
                      {/* <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                          <MdLightMode className="size-4 fill-white/80" />
                          theme
                        </button>
                      </MenuItem> */}
                      <MenuItem>
                        <button
                          className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                          onClick={handleLogout}
                        >
                          <HiOutlineLogout className="size-4 fill-white/30" />
                          Logout
                        </button>
                      </MenuItem>
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
              <div
                className="md:hidden block"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              >
                {showMenu ? (
                  <RxCross2 className="text-3xl" />
                ) : (
                  <CgMenuRight className="text-3xl delay-75" />
                )}
              </div>
            </>
          ) : (
            <div className="flex justify-between items-center gap-x-4">
              <>
                <div className="md:block hidden">
                  <Link to="/register">
                    <Button
                      onClick={() => {}}
                      className="bg-transparent text-neutral-300 font-medium"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </div>
                <div>
                  <Link to={"/login"}>
                    <Button
                      onClick={() => {}}
                      className="bg-white px-6 py-2 font-medium sm:text-base text-sm"
                    >
                      Log in
                    </Button>
                  </Link>
                </div>
              </>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
