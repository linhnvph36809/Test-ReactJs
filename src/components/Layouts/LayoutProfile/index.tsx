import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ICON_LOGO, ICON_MENU } from "../../../datas";
import useAuth from "../../../hooks/useAuth";

const LayoutProfile = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { logout } = useAuth();

  return (
    <>
      <div className="md:flex sm:py-5 sm:px-3 xl:p-0">
        <div
          className={`fixed top-0 left-0 overflow-hidden bottom-0 transtion-all duration-200 ease-linear ${
            isActive ? "sm:w-[150px] md:w-[200px]" : "w-0"
          } xl:w-[320px] bg-[#D9D9D9] py-6 z-[100]`}
        >
          <Link to={"/"}>
            <div className="flex justify-center mb-6">{ICON_LOGO}</div>
          </Link>
          <div>
            <ul className="px-6">
              <Link to="">
                <a href="" className="block py-2">
                  Posts
                </a>
              </Link>

              <li>
                <a href="#" className="block py-2" onClick={logout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="xl:hidden mt-3 sm:mb-5 mr-5"
          onClick={() => setIsActive((state) => !state)}
        >
          {ICON_MENU}
        </div>
        <main className="flex-1 xl:ml-[300px] xl:p-[120px]">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default LayoutProfile;
