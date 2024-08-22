import { createBrowserRouter } from "react-router-dom";
import HomePages from "./pages/HomePages";

import SignIn from "./pages/SignIn";
import LayoutClient from "./components/Layouts/LayoutClient";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
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
    element: <Profile />
  }
]);

export default router;
