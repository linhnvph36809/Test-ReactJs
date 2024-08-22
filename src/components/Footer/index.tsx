import { ICON_LOGO } from "../../datas";

const Footer = () => {
  return (
    <>
      <footer
        data-aos="fade-up"
        className="md:py-[120px] sm:py-20 border-t-2 border-[#e5e7eb] aos-init aos-animate"
      >
        <div className="container">
          <div className="flex xl:items-start sm:items-center sm:flex-col xl:flex-row">
            <div className="sm:w-1/2 xl:w-[45%] sm:flex sm:justify-center xl:block">
              <div>
                <div className="flex items-center sm:gap-x-5 xl:gap-x-[20px] font-bold text-xl title-color pb-[68px]">
                  {ICON_LOGO}
                  <p>DataWarehouse</p>
                </div>
                <p className="max-w-[260px] mb-5 text-base font-medium title-color sm:text-center xl:text-start">
                  Warehouse Society, 234 Bahagia Ave Street PRBW 29281
                </p>
                <p className="font-light italic title-color sm:text-center xl:text-start">
                  info@warehouse.project{" "}
                </p>
                <p className="font-light italic title-color sm:text-center xl:text-start">
                  {" "}
                  1-232-3434 (Main)
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-y-14 xl:flex-row justify-between sm:mt-12 xl:mt-0">
              <div>
                <div className="font-extrabold title-color mb-8 sm:text-center xl:text-start">
                  About
                </div>
                <ul className="flex flex-col gap-y-4">
                  <li className="sm:text-center xl:text-start">
                    <a className="title-color" href="#">
                      Profile
                    </a>
                  </li>
                  <li className="sm:text-center xl:text-start">
                    <a className="title-color" href="#">
                      Features
                    </a>
                  </li>
                  <li className="sm:text-center xl:text-start">
                    <a className="title-color" href="#">
                      Careers
                    </a>
                  </li>
                  <li className="sm:text-center xl:text-start">
                    <a className="title-color" href="#">
                      DW News
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <div className="font-extrabold title-color mb-8 sm:text-center xl:text-start">
                  Help
                </div>
                <ul className="flex flex-col gap-y-4">
                  <li className="sm:text-center xl:text-start">
                    <a className="title-color" href="#">
                      Support
                    </a>
                  </li>
                  <li className="sm:text-center xl:text-start">
                    <a className="title-color" href="#">
                      Sign Up
                    </a>
                  </li>
                  <li className="sm:text-center xl:text-start">
                    <a className="title-color" href="#">
                      Guide
                    </a>
                  </li>
                  <li className="sm:text-center xl:text-start">
                    <a className="title-color" href="#">
                      Reports
                    </a>
                  </li>
                  <li className="sm:text-center xl:text-start">
                    <a className="title-color" href="#">
                      Q &amp; A
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <div className="font-extrabold title-color mb-8 sm:text-center xl:text-start">
                  Social Media
                </div>
                <ul className="flex gap-y-4 gap-x-4 justify-center">
                  <li
                    className="w-12 h-12 bg-[#2123531a] flex justify-center 
                    items-center rounded-full cursor-pointer hover:bg-[#f063b8] transition-all"
                  >
                    <a className="text-white text-xl hover:text-white" href="#">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                      </svg>
                    </a>
                  </li>
                  <li
                    className="w-12 h-12 bg-[#2123531a] flex justify-center 
                    items-center rounded-full cursor-pointer hover:bg-[#f063b8] transition-all"
                  >
                    <a className="text-white text-xl hover:text-white" href="#">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </a>
                  </li>
                  <li
                    className="w-12 h-12 bg-[#2123531a] flex justify-center 
                    items-center rounded-full cursor-pointer hover:bg-[#f063b8] transition-all"
                  >
                    <a className="text-white text-xl hover:text-white" href="#">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 496 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section className="aos-init aos-animate" data-aos="fade-up">
          <div className="container">
            <div className="flex sm:flex-col md:flex-col-reverse xl:flex-row sm:justify-center sm:items-center sm:gap-6 xl:gap-0 xl:justify-between sm:mt-12 xl:mt-[93px]">
              <div className="text-sm font-light max-w-[360px] sm:text-center xl:text-start">
                © Datawarehouse™, 2020. All rights reserved. Company
                Registration Number: 21479524.
              </div>
              <div className="-order-1 md:order-1">
                <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#9c69e233] cursor-pointer group">
                  <div className="text-3xl text-accent-primary group-hover:scale-110 transition-all">
                    <svg
                      stroke="currentColor"
                      fill="#9c69e2"
                      strokeWidth={0}
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
