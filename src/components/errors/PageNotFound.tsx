import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoToLastPage = () => {
    navigate(-1); // Navigate to the last page
  };
  return (
    <div className="inset-0 fixed flex flex-col justify-center items-center">
      <h1 className="text-[50px]">PAGE NOT FOUND MFKER</h1>

      <div className="flex gap-5">
        <button onClick={handleGoToLastPage} className="text-[50px]">
          ⬅️
        </button>
        <h1 className="text-[50px]">GO BACK</h1>
      </div>
    </div>
  );
};

export default PageNotFound;
