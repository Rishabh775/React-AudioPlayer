import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Forgot = () => {
  return (
    <>
      <Navbar />
      <div className=" h-screen pt-20 bg-[url('./assets/images/loginBg.jpg')] bg-cover">
        <div className=" max-w-xl mx-auto py-20 px-20 bg-[#67656536] shadow-[0px_2px_5px_#ffffff91] filter backdrop-blur-[6px] rounded-xl ">
          <header className=" text-center">
            <h2 className="font-bold text-4xl text-white">Reset Password</h2>
            <p className="text-gray-100">Your mind is lost</p>
          </header>
          <form
            action=""
            className=" flex flex-col gap-2 items-center py-4 text-white"
          >
            <input
              type="password"
              className="px-4 py-3 rounded-lg outline-none bg-transparent border border-slate-700"
              placeholder="old password"
            />
            <input
              type="password"
              className="px-4 py-3 rounded-lg outline-none bg-transparent border border-slate-700"
              placeholder="new password"
            />
            <div>
              <button className=" bg-teal-500 px-4 mt-3 py-3 w-40 rounded-lg hover:bg-teal-600 duration-300">
                Reset Now
              </button>
            </div>
          </form>
          <p className=" text-center text-white">
            Do you still remember ?{" "}
            <Link to="/login" className=" text-rose-200 hover:text-rose-300">
              Login
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Forgot;
