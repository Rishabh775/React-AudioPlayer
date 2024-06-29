import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useAuth } from "../context/UserContext";

interface LoginFormData {
  identifier: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const { setUserLogged }: any = useAuth();
  const [formData, setFormData] = useState<LoginFormData>({
    identifier: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false); // State to track loading state

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when login button is clicked
    try {
      if (!formData.identifier || !formData.password) {
        toast.error("Please enter your username and password to login.");
        setLoading(false); // Reset loading state
        return;
      }

      const response = await axios.post(
        "https://loop-server.onrender.com/api/auth/login",
        formData
      );
      const { token } = response.data;
      Cookies.set("token", token, { expires: 30, secure: true });
      setUserLogged(true);
      toast.success("Logged in successfully!");
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed! Please try again.");
    }
    setLoading(false); // Reset loading state after login attempt
  };

  return (
    <>
      <div className="w-full h-screen">
        <Navbar />
        <div className="h-full md:py-24 py-8 bg-[url('./assets/images/loginBg.jpg')] bg-cover">
          <div className="md:max-w-2xl sm:max-w-xl max-w-[90%] mx-auto md:py-20 py-16 md:px-20 sm:px-10 px-6 bg-[#67656536] shadow-[0px_2px_5px_#ffffff91] filter backdrop-blur-[6px] rounded-xl">
            <header className="text-center">
              <h2 className="font-bold lg:text-4xl text-2xl text-white">
                Welcome Back
              </h2>
              <p className="text-gray-100">your favorite spot</p>
            </header>
            <form
              onSubmit={handleLogin}
              className="flex flex-col gap-2 py-4 text-white"
            >
              <input
                value={formData.identifier}
                onChange={handleInputChange}
                type="text"
                name="identifier"
                className="px-4 py-3 rounded-lg outline-none bg-transparent border border-slate-700"
                placeholder="username or email"
              />
              <input
                value={formData.password}
                onChange={handleInputChange}
                type="password"
                name="password"
                className="px-4 py-3 rounded-lg outline-none bg-transparent border border-slate-700"
                placeholder="password"
              />
              <div className="flex justify-between text-sm gap-4">
                <p>
                  <input type="checkbox" />
                  Remember
                </p>
                <Link to={"/forgot-password"} className="hover:text-rose-400">
                  Forgot password?
                </Link>
              </div>
              <div className=" flex justify-center">
                <button
                  type="submit"
                  className={`bg-teal-500 px-4 mt-3 py-3 w-40 rounded-lg hover:bg-teal-600 duration-300 ${
                    loading ? "opacity-50 cursor-not-allowed" : "" // Disable button and show loading state if loading is true
                  }`}
                  disabled={loading} // Disable button if loading is true
                >
                  {loading ? "Loading..." : "Log in"}{" "}
                  {/* Show loading text when loading, else show "Log in" */}
                </button>
              </div>
            </form>
            <p className="text-center text-white">
              Didn&apos;t Join The Cult ?{" "}
              <Link
                to="/register"
                className="text-rose-200 hover:text-rose-300"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
