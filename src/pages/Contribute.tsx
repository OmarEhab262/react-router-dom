import { useLocation } from "react-router-dom";

const Contribute = () => {
  const { state } = useLocation();

  return (
    <>
      <div className="flex flex-col items-center gap-5 border-4 w-fit mx-auto border-black py-20 px-10 rounded-3xl">
        <h1>write your issue 💀</h1>
        <h1>{state.email}</h1>
        <textarea
          className="p-2 rounded-md outline-none w-[400px] h-[200px]"
          placeholder="Enter your issue"
        ></textarea>{" "}
        <button className="bg-black text-white px-3 py-1 rounded-lg w-fit mx-auto">
          Login
        </button>
      </div>
    </>
  );
};

export default Contribute;
