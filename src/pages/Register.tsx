import { useState, FormEvent, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

interface FormData {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

interface ErrorResponse {
  message: string;
}

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      if (
        !formData.email ||
        !formData.password ||
        !formData.username ||
        !formData.confirmPassword
      ) {
        toast.error("Please fill all the fields");
        return;
      }
      // Perform sign up logic...
      await axios.post<void>(
        "https://loop-server.onrender.com/api/auth/register",
        formData
      );
      toast.success("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.response?.data) {
        toast.error(axiosError.response.data.message);
      } else {
        toast.error("An error occurred during registration.");
      }
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <Navbar />
        <div className="h-full pt-8 bg-[url('./assets/images/loginBg.jpg')] bg-cover">
          <div className="lg:max-w-3xl sm:max-w-lg  max-w-[90%] mx-auto md:py-20 py-16 md:px-20 px-4 bg-[#67656536] shadow-[0px_2px_5px_#ffffff91] filter backdrop-blur-[6px] rounded-xl">
            <header className="text-center">
              <h2 className="font-bold md:text-4xl text-3xl text-white">
                Join the Party
              </h2>
              <p className="text-gray-100">Where Music Finds you</p>
            </header>
            <form
              onSubmit={handleSignUp}
              className="flex flex-col gap-2 py-4 text-white"
            >
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="px-4 py-3 rounded-lg outline-none bg-transparent border border-slate-700"
                placeholder="Email"
              />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="px-4 py-3 rounded-lg outline-none bg-transparent border border-slate-700"
                placeholder="Username"
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="px-4 py-3 rounded-lg outline-none bg-transparent border border-slate-700"
                placeholder="Password"
              />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="px-4 py-3 rounded-lg outline-none bg-transparent border border-slate-700"
                placeholder="Confirm Password"
              />
              <div className="flex justify-between text-sm gap-16">
                <p className="flex items-center gap-2">
                  <input type="checkbox" />
                  Terms
                </p>
                <Link to={"/phone"} className="hover:text-rose-400">
                  Using phone
                </Link>
              </div>
              <div className=" flex justify-center">
                <button
                  type="submit"
                  className="bg-teal-500 px-4 mt-3 py-3 w-40 rounded-lg hover:bg-teal-600 duration-300"
                >
                  Register
                </button>
              </div>
            </form>
            <p className="text-center text-white">
              Already in the Cult ?{" "}
              <Link to="/login" className="text-rose-200 hover:text-rose-300">
                Login
              </Link>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Register;
