import { Link } from "react-router-dom";
import character from "../assets/images/error_character.webp";

const Error = () => {
  return (
    <div className=" h-full w-full">
      <div className="bg-[url('./assets/images/error-bg.jpg')] h-screen bg-cover bg-no-repeat bg-center">
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <div>
              <div className=" max-w-xl rounded-xl bg-gradient-to-b from-purple/10 to-white/5 p-6 backdrop-blur-[4px] border border-purple-400/20 shadow-xl">
                <div className=" flex justify-center items-center">
                  <span className=" text-[7rem] font-black">4</span>
                  <img
                    loading="lazy"
                    src={character}
                    className=" w-[160px]"
                    alt=""
                  />
                  <span className=" text-[7rem] font-black">4</span>
                </div>
                <h3 className=" text-6xl flex items-center justify-center text-center font-medium text-white">
                  {/* <img loading="lazy" src={warning} className=" w-48" alt="" /> */}
                  Oops!
                </h3>
                <p className="mt-2 text-2xl text-white/70 text-center">
                  404 Error! Sorry, something went wrong. <br /> Please try
                  again later.
                </p>
                <div className="mt-4">
                  <Link
                    to={"/"}
                    className="flex justify-center w-[200px] shadow-lg mx-auto items-center gap-2 rounded-md bg-purple-700/30 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-black/20 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                  >
                    Go Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
