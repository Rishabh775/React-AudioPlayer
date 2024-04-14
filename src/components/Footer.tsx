import { RiFacebookCircleLine } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-800">
        <footer className=" flex justify-between  items-center  text-white max-w-7xl mx-auto h-10">
          <h4 className=" text-md font-semibold">Loop &copy;2024</h4>
          <div className=" flex gap-2 items-center">
            <BsInstagram />
            <AiFillGithub size={20} />
            <RiFacebookCircleLine size={20} />
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
