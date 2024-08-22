import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import routers from "./routers";
import { RouterProvider } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <RouterProvider router={routers} />
    </>
  );
}

export default App;
