import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "../pages/";
import About from "../pages/About";
import RootLayout from "../pages/Layout";
import QuickStart from "../pages/learn";
import LearnLayout from "../pages/learn/Layout";
import Two from "../pages/learn/Two";
import Tree from "../pages/learn/Tree";
import Four from "../pages/learn/Four";
import Login from "../pages/Login";
import Contribute from "../pages/Contribute";
import ProtectedRout from "../components/auth/ProtectedRout";
import ErrorRouterHandler from "../components/errors/ErrorRouterHandler";
import PageNotFound from "../components/errors/PageNotFound";

const isLoggedIn = true;

const userData: { email: string } | null = isLoggedIn
  ? {
      email: "omar@gmail.com",
    }
  : null;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<RootLayout />}
        errorElement={
          <ErrorRouterHandler statusCode={404} title="page not found" />
        }
      >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="omar" element={<h1 className="text-center">Omar</h1>} />
        {/* NOTE: THIS IS A PROTECTED ROUTE */}
        <Route
          path="contribute"
          element={
            <ProtectedRout
              isAllowed={isLoggedIn}
              redirectPath="/login"
              data={userData}
            >
              <Contribute />
            </ProtectedRout>
          }
        />
        <Route
          path="login"
          element={
            <ProtectedRout
              isAllowed={!isLoggedIn}
              redirectPath="/contribute"
              data={userData}
            >
              <Login />
            </ProtectedRout>
          }
        />
      </Route>
      <Route path="/learn" element={<LearnLayout />}>
        <Route index element={<QuickStart />} />
        <Route path="two" element={<Two />} />
        <Route path="three" element={<Tree />} />
        <Route path="four" element={<Four />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);
export default router;
