import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Router from "./routers";
import ContextGlobal from "./context/LoadingContext";

function App() {
  useEffect(() => {
    AOS.init({
      initClassName: "aos-init",
      duration: 1200,
    });
  }, []);

  return (
    <>
      <ContextGlobal>
        <Router />
      </ContextGlobal>
    </>
  );
}

export default App;
