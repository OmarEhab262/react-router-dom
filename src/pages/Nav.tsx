import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="bg-white m-2 rounded-md   ">
        <ul className="flex justify-evenly">
          <li className="font-bold text-[25px] p-3 cursor-pointer hover:text-gray-700 duration-200  ">
            <NavLink to="/" className="px-4 py-1">
              Home
            </NavLink>
          </li>
          <li className="font-bold text-[25px] p-3 cursor-pointer hover:text-gray-700 duration-200">
            <NavLink to="/about" className="px-4 py-1">
              About
            </NavLink>
          </li>
          <li className="font-bold text-[25px] p-3 cursor-pointer hover:text-gray-700 duration-200 ">
            <NavLink to="/omar" className="px-4 py-1">
              Omar
            </NavLink>
          </li>
          <li className="font-bold text-[25px] p-3 cursor-pointer hover:text-gray-700 duration-200 ">
            <NavLink to="/learn" className="px-4 py-1">
              Lean
            </NavLink>
          </li>
          <li className="font-bold text-[25px] p-3 cursor-pointer hover:text-gray-700 duration-200 ">
            <NavLink to="/login" className="px-4 py-1">
              Login
            </NavLink>
          </li>
          <li className="font-bold text-[25px] p-3 cursor-pointer hover:text-gray-700 duration-200 ">
            <NavLink to="/contribute" className="px-4 py-1">
              Contribute
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
