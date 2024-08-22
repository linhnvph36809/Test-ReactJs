import Header from "../../Header";
import Footer from "../../Footer";
import { Outlet } from "react-router-dom";

const LayoutClient = () => {
  return (
    <>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
export default LayoutClient;
