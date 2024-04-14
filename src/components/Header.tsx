import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

import { Link } from "react-router-dom";

export default function Header({ children, className }: HeaderProps) {
  return (
    <div className={twMerge(`h-fit  p-6`, className)}>
      <div
        className="
        w-full mb-4 flex items-center justify-between"
      >
        <div className="hidden lg:flex gap-x-2 w-[30%] text-black items-center relative">
          <input
            type="search"
            placeholder="        Search Music"
            className="bg-white rounded-2xl p-4 w-full pl-12"
          />
          <BiSearch
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black"
            size={25}
          />
        </div>
        <div className="hidden md:flex items-center gap-x-10 text-white text-xl font-medium">
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/" className="">
            Explore
          </Link>
          <Link to="/" className="">
            Music
          </Link>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white justify-center items-center hover:opacity-75 transition">
            <HiHome className="text-black" size={25} />
          </button>
          <button className="rounded-full p-2 bg-white justify-center items-center hover:opacity-75 transition">
            <BiSearch className=" text-black" size={25} />
          </button>
        </div>

        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
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
                  className="bg-white px-6 py-2 font-medium"
                >
                  Log in
                </Button>
              </Link>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
}
