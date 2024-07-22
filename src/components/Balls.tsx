import { useState } from "react";

const Balls = () => {
  const [up, setUp] = useState(0);
  const [right, setRight] = useState(0);
  return (
    <>
      {" "}
      <div className=" flex items-center flex-col">
        <button
          onClick={() => setUp(up - 10)}
          className={`m-2 bg-black px-2 text-white text-[25px] rounded-md `}
        >
          up
        </button>
        <div className="flex">
          <button
            onClick={() => setRight(right + 10)}
            className="m-2 bg-black px-2 text-white text-[25px] rounded-md"
          >
            right
          </button>
          <button
            onClick={() => setUp(up + 10)}
            className={`m-2 bg-black px-2 text-white text-[25px] rounded-md `}
          >
            down
          </button>
          <button
            onClick={() => setRight(right - 10)}
            className="m-2 bg-black px-2 text-white text-[25px] rounded-md"
          >
            left
          </button>
        </div>
      </div>
      <div
        style={{
          marginTop: `${up}px`,
          marginLeft: `${right}px`,
          transitionDuration: "100ms",
        }}
        className="w-10 h-10 bg-pink-600 rounded-full absolute   -z-10"
      ></div>
    </>
  );
};

export default Balls;
