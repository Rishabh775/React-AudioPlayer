import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useFormik } from "formik";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values: any) => {
    // Check if passwords match
    if (values.password !== values.confirmPassword) {
      console.error("Passwords do not match");
      alert("Passwords do not match");
      return; // Don't proceed with registration
    }

    try {
      // Remove confirmPassword from values before sending to backend
      const { confirmPassword, ...data } = values;

      const response = await axios.post(
        "https://loop-server.onrender.com/api/auth/register",
        data
      );
      console.log(response);
      navigate("/login"); // Redirect after successful registration
      toast.success("Successfully Registered in Loop");
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <div className=" w-full">
        <Navbar />
        <div className=" h-screen pt-8 bg-[url('./assets/images/loginBg.jpg')] bg-cover">
          <div className=" max-w-xl mx-auto py-20 px-20 bg-[#67656536] shadow-[0px_2px_5px_#ffffff91] filter backdrop-blur-[6px] rounded-xl ">
            <header className=" text-center">
              <h2 className="font-bold text-4xl text-white">Join the Party</h2>
              <p className="text-gray-100">Where Music Finds you</p>
            </header>
            <form
              onSubmit={formik.handleSubmit}
              className=" flex flex-col gap-2 items-center py-4 text-white"
            >
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="px-4 py-3 rounded-lg outline-none bg-transparent border border-slate-700"
                placeholder="username or email"
              />
              <input
                type="text"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                className="px-4 py-3 rounded-lg outline-none bg-transparent border border-slate-700"
                placeholder="username"
              />
              <input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                className="px-4 py-3 rounded-lg outline-none bg-transparent border border-slate-700"
                placeholder="password"
              />
              <input
                type="password"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                className="px-4 py-3 rounded-lg outline-none bg-transparent border border-slate-700"
                placeholder="confirm password"
              />
              <div className=" flex justify-between text-sm gap-16">
                <p>
                  <input type="checkbox" />
                  terms
                </p>
                <Link to={"/phone"} className=" hover:text-rose-400">
                  using phone
                </Link>
              </div>
              <div>
                <button
                  type="submit"
                  className=" bg-teal-500 px-4 mt-3 py-3 w-40 rounded-lg hover:bg-teal-600 duration-300"
                >
                  Register
                </button>
              </div>
            </form>
            <p className=" text-center text-white">
              Already in the Cult ?{" "}
              <Link to="/login" className=" text-rose-200 hover:text-rose-300">
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
