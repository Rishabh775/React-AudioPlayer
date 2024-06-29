import { Link } from "react-router-dom";
import loop from "../assets/images/loop.png";

const LoopLogo = () => {
  return (
    <Link to={"/"} className="flex justify-center items-center gap-2">
      <div className="text-3xl font-bold text-center">L</div>
      <img
        loading="lazy"
        src={loop}
        alt="loop-logo"
        className=" sm:w-14 sm:h-14 h-10 w-10"
      />

      <div className="text-3xl font-bold text-center">P</div>
    </Link>
  );
};

export default LoopLogo;
