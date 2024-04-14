import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      identifier: "", // Change 'email' to 'identifier' to support both email and username
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "https://loop-server.onrender.com/api/auth/login",
          values // Send the entire 'values' object containing 'identifier' and 'password'
        );

        if (response.status === 200) {
          console.log("Login successful!");
          toast.success("Successfully Logged In Bro");
          navigate("/"); // Redirect after successful login
        } else {
          console.error("Login failed. Status:", response.status);
          // Handle other status codes if needed
        }
      } catch (error) {
        console.error("Login failed:", error);
        // Handle error, e.g., show error message to the user
      }
    },
  });

  return (
    <>
      <div className="w-full">
        <Navbar />
        <div className="h-screen pt-20 bg-[url('./assets/images/loginBg.jpg')] bg-cover">
          <div className="max-w-xl mx-auto py-20 px-20 bg-[#67656536] shadow-[0px_2px_5px_#ffffff91] filter backdrop-blur-[6px] rounded-xl">
            <header className="text-center">
              <h2 className="font-bold text-4xl text-white">Welcome Back</h2>
              <p className="text-gray-100">your favorite spot</p>
            </header>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-2 items-center py-4 text-white"
            >
              <input
                value={formik.values.identifier} // Use 'identifier' for both email and username
                onChange={formik.handleChange}
                type="text"
                name="identifier"
                className="px-4 py-3 rounded-lg outline-none bg-transparent border border-slate-700"
                placeholder="username or email"
              />
              <input
                value={formik.values.password}
                onChange={formik.handleChange}
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
              <div>
                <button
                  type="submit"
                  className="bg-teal-500 px-4 mt-3 py-3 w-40 rounded-lg hover:bg-teal-600 duration-300"
                >
                  Log in
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
