import { Navigate, useRoutes } from "react-router-dom";
import HomePages from "./pages/HomePages";

import SignIn from "./pages/SignIn";
import LayoutClient from "./components/Layouts/LayoutClient";
import Profile from "./pages/Profile";
import LayoutProfile from "./components/Layouts/LayoutProfile";
import AddPost from "./pages/Profile/AddPost";
import UpdatePost from "./pages/Profile/UpdatePost";

const Router = () => {
  const token = localStorage.getItem("token");
  
  const router = useRoutes([
    {
      path: "",
      element: <LayoutClient />,
      children: [
        {
          path: "",
          element: <HomePages />,
        },
      ],
    },
    {
      path: "sign-in",
      element: <SignIn />,
    },
    {
      path: "profile",
      element: token ? <LayoutProfile /> : <Navigate to="/sign-in" />,
      children: [
        {
          path: "",
          element: <Profile />,
        },
        {
          path: "add",
          element: <AddPost />,
        },
        {
          path: "edit/:id",
          element: <UpdatePost />,
        },
      ],
    },
  ]);

  return router;
};

export default Router;
