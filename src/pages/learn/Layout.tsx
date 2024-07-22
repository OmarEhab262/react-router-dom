import { Outlet } from "react-router-dom";
import Nav from "../Nav";
import LearnAside from "../../components/LearnAside";

const LearnLayout = () => {
  return (
    <>
      <Nav />
      <div className="grid grid-cols-4">
        <div className=" h-[87vh] rounded-md m-2 bg-white fixed">
          <LearnAside />
        </div>
        <div className="col-start-2 col-span-3 ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default LearnLayout;
