import { useState } from "react";
import ButtonPrimary from "../ButtonPrimary";
import { ICON_LOGO, ICON_MENU } from "../../datas";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsAactive] = useState<boolean>(false);
  return (
    <>
      <header
        className="lg:my-11 lg:mb-0 z-20 relative px-4 lg:px-0 aos-init aos-animate"
        data-aos="fade-down"
        data-aos-delay="1200"
        data-aos-duration="1000"
      >
        <div className="container flex justify-between items-center relative sm:py-12 lg:py-0">
          <div>{ICON_LOGO}</div>
          <div className="lg:flex gap-x-[32px] sm:hidden">
            <ButtonPrimary title="Profile" typeElement="button" />
            <ButtonPrimary title="Logout" typeElement="button" />
            <Link to='/sign-in'>
            <ButtonPrimary title="Sign In" typeElement="button" />
            </Link>
          </div>
          <div
            className="lg:hidden"
            onClick={() => setIsAactive((state) => !state)}
          >
            {ICON_MENU}
          </div>
          <div
            className={`lg:hidden absolute w-full ${
              isActive ? "max-h-52" : "max-h-0"
            } top-full left-0 right-0  bg-[#68c9ba] rounded-[4px]
              overflow-hidden transition-all`}
          >
            <ul className="flex flex-col px-6 py-8 gap-y-4">
              <li>
                <a
                  className="text-white font-bold active:text-[#9c69e2]"
                  href="#"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  className="text-white font-bold active:text-[#9c69e2]"
                  href="#"
                >
                  Logout
                </a>
              </li>
              <li>
                <a
                  className="text-white font-bold active:text-[#9c69e2]"
                  href="#"
                >
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
