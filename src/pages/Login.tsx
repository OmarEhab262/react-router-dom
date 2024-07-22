import { useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  console.log("location: ", location);
  return (
    <>
      <h1 className="text-center my-5">Login to Contribute</h1>
      <form className="space-y-3 max-w-sm mx-auto flex flex-col border-4 border-black p-5 py-10 rounded-lg">
        <input
          type="text"
          placeholder="Username"
          name=""
          id=""
          className="p-2 rounded-md outline-none    "
        />
        <input
          type="password"
          className="p-2 rounded-md outline-none    "
          placeholder="Password"
          name=""
          id=""
        />
        <button className="bg-black text-white px-3 py-1 rounded-lg w-fit mx-auto">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
