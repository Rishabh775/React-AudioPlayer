import { BiChevronLeft } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import { AiOutlineUserDelete } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";
import { IoMdCamera } from "react-icons/io";
import { MdSecurity } from "react-icons/md";
import { MdPrivacyTip } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import profile from "../assets/images/profile.jpg";

const data = [
  {
    id: 1,
    name: "Appearance",
    para: "Dark and Light Mode, Font Size",
    icon: (
      <FaMoon className="p-2 rounded-xl bg-gray-600 fill-white w-10 h-10" />
    ),
  },
  {
    id: 2,
    name: "Account Settings",
    para: "Personal information, Email",
    icon: (
      <BsFillPersonFill className="p-2 rounded-xl bg-gray-600 fill-white w-10 h-10" />
    ),
  },
  {
    id: 3,
    name: "Security",
    para: "Password, Change password",
    icon: (
      <MdSecurity className="p-2 rounded-xl bg-gray-600 fill-white w-10 h-10" />
    ),
  },
  {
    id: 4,
    name: "Privacy Policy",
    para: "Users privacy policy",
    icon: (
      <MdPrivacyTip className="p-2 rounded-xl bg-gray-600 fill-white w-10 h-10" />
    ),
  },
  {
    id: 5,
    name: "Terms and Conditions",
    para: "Users Terms and Conditions",
    icon: (
      <IoIosPaper className="p-2 rounded-xl bg-gray-600 fill-white w-10 h-10" />
    ),
  },
  {
    id: 6,
    name: "Delete Account",
    para: "Delete your Account Permanently",
    icon: (
      <AiOutlineUserDelete className="p-2 rounded-xl bg-gray-600 fill-white w-10 h-10" />
    ),
  },
];

const Settings = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-10 w-full bg-purple-950/40">
        {/* tabs */}
        <div className="col-span-4 h-screen px-20 py-10 border-r-2 border-gray-700/40">
          <Link to={"/"} className="absolute top-11 left-6">
            <BiChevronLeft className="w-8 h-8" />
          </Link>
          <h2 className="font-bold text-3xl -translate-x-4">Settings</h2>
          {data.map((item) => (
            <ul className="my-6" key={item.id}>
              <li>
                <Link to={""} className="flex justify-between items-center">
                  <div className="flex gap-4 items-center">
                    {item.icon}
                    <div>
                      <div className="font-semibold text-xl">{item.name}</div>
                      <p className="text-xs">{item.para}</p>
                    </div>
                  </div>
                  <BiChevronRight className="w-6 h-6" />
                </Link>
              </li>
            </ul>
          ))}
        </div>
        {/* modules */}
        <div className="relative col-span-8 px-20 py-6 mt-6">
          <div className="absolute top-0 right-8">
            <RxCross2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold">Account Settings</h2>
          <div className="py-10 flex gap-20 items-center">
            <div className="relative">
              <button
                title="set-profile"
                className="absolute top-[160px] left-1/2 translate-x-[-50%] translate-y-[-50%] bg-purple-500 p-2 rounded-full z-10"
              >
                <IoMdCamera />
              </button>
              <img
                className="w-40 h-40 object-cover rounded-full"
                src={profile}
                alt="profile-image"
              />
            </div>
            <div>
              <h4 className="text-3xl font-black">Amitesh James</h4>
              <p className=" text-lg">bamitesh@email.com</p>
            </div>
          </div>
          <hr className="w-max-lg mx-auto px-20 opacity-20" />
          <div className="py-6 px-4">
            <h4 className="text-2xl font-semibold">Personal Information</h4>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              id ut ullam natus quis nemo distinctio dolores. Vero, dolorem
              dolor.
            </p>
          </div>
          <form action="">
            <div className="flex gap-6">
              <div className="flex flex-col gap-4 w-1/2">
                <label htmlFor="f_name">First Name</label>
                <input
                  type="text"
                  value={"Amitesh"}
                  placeholder="Enter your First name"
                  className="bg-purple-600/50 py-2 px-2 rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-4 w-1/2">
                <label htmlFor="l_name">Last Name</label>
                <input
                  type="text"
                  value={"James"}
                  placeholder="Enter your Last name"
                  className="bg-purple-600/50 py-2 px-2 rounded-xl"
                />
              </div>
            </div>
            <div className="flex flex-col mt-6 gap-4 relative">
              <label htmlFor="email">E-mail Address</label>
              <input
                type="email"
                value={"bamitesh@email.com"}
                placeholder="email"
                className="bg-purple-600/50 py-2 px-2 rounded-xl"
              />
              <span className="absolute top-10 p-2 right-5 flex gap-1 items-center">
                <BiCheck className="bg-green-600 p-0.5 w-5 h-5 rounded-full" />
                Verified
              </span>
            </div>
            <div className="flex justify-between items-center pt-10">
              <p>Deactivate account</p>
              <button className="py-2 px-4 rounded-3xl bg-purple-500 border hover:border-transparent duration-150 hover:bg-opacity-20">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Settings;
