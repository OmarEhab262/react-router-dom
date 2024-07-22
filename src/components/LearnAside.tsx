import { NavLink } from "react-router-dom";

const LearnAside = () => {
  return (
    <>
      <aside className=" ">
        <nav className="bg-white m-2 rounded-md  w-[300px] ">
          <ul className="flex justify-evenly flex-col">
            <li className="font-bold text-[25px] p-3 cursor-pointer hover:text-gray-700 duration-200  ">
              <NavLink to="/learn" end className="px-4 py-1">
                One
              </NavLink>
            </li>
            <li className="font-bold text-[25px] p-3 cursor-pointer hover:text-gray-700 duration-200">
              <NavLink to="/learn/two" className="px-4 py-1">
                Two
              </NavLink>
            </li>
            <li className="font-bold text-[25px] p-3 cursor-pointer hover:text-gray-700 duration-200 ">
              <NavLink to="/learn/three" className="px-4 py-1">
                Three
              </NavLink>
            </li>
            <li className="font-bold text-[25px] p-3 cursor-pointer hover:text-gray-700 duration-200 ">
              <NavLink to="/learn/four" className="px-4 py-1">
                Four
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default LearnAside;
