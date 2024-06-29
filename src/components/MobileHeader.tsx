import { useState } from "react";
import Sidebar from "./sidebar";
import LoopLogo from "./LoopLogo";
import { RxCross2 } from "react-icons/rx";
import { CgMenuRight } from "react-icons/cg";

const MobileHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <div className="md:hidden flex justify-between px-6 py-3">
        {showMenu && (
          <div>
            <Sidebar hidden={"block absolute left-0 z-30 bg-black"} />
            <div className="absolute bottom-6 z-30 bg-white text-black px-14 py-1 rounded-lg mx-6">
              Logout
            </div>
          </div>
        )}
        <LoopLogo />
        <div
          className="md:hidden block"
          onClick={() => {
            setShowMenu(!showMenu);
            console.log("first click");
          }}
        >
          {showMenu ? (
            <RxCross2 className="text-3xl" />
          ) : (
            <CgMenuRight className="text-3xl delay-75" />
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
