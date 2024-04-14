import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className=" text-center bg-slate-900 text-white py-6 px-20">
        <div>
          <Link to={"/"}>
            <h1 className=" text-2xl font-black">Loop</h1>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
