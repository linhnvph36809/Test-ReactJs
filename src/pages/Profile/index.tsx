import { useState } from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import { ICON_LOGO, ICON_MENU } from "../../datas";

const Profile = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <>
      <div className="flex sm:py-5 sm:px-3 xl:p-0">
        <div
          className={`fixed top-0 left-0 overflow-hidden bottom-0 transtion-all duration-200 ease-linear ${
            isActive ? "sm:w-[150px] md:w-[200px]" : "w-0"
          } xl:w-[320px] bg-[#D9D9D9] py-6 z-[100]`}
        >
          <div className="flex justify-center mb-6">{ICON_LOGO}</div>
          <div>
            <ul className="px-6">
              <li>
                <a href="" className="block py-2">
                  Posts
                </a>
              </li>
              <li>
                <a href="" className="block py-2">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 xl:ml-[320px] xl:p-[120px]">
          <div className="flex justify-between items-center sm:gap-2">
            <div
              className="xl:hidden"
              onClick={() => setIsActive((state) => !state)}
            >
              {ICON_MENU}
            </div>
            <ButtonPrimary
              title="Add new"
              typeElement="button"
              propsclassName="lg:w-[252px] sm:w-[100px] sm:h-[40px] text-xs"
              type="submit"
            />
            <form className="">
              <div className="flex-1 grid grid-cols-2 justify-between items-center sm:gap-3 lg:gap-5">
                <input
                  type="text"
                  id="first_name"
                  className="xl:w-[368px] sm:h-[30px] md:h-[49px] bg-gray-50 border border-black text-black text-[15px] rounded-[6px] lg:px-8 sm:px-3"
                  placeholder="John"
                />

                <select
                  id="countries"
                  className="xl:w-[368px] sm:h-[30px] md:h-[49px] flex-1 bg-gray-50 border border-black text-black text-[15px] rounded-[6px] p-2.5"
                >
                  <option>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </form>
          </div>
          <div className="my-10 flex justify-center">
            <div className="relative overflow-x-auto sm:w-[400px] md:w-full">
              <table className="w-full text-xl text-center font-normal rtl:text-right text-black profile__table">
                <thead className="text-xl text-black font-black bg-[#D9D9D9]">
                  <tr>
                    <th scope="col" className=" border-l font-normal ">
                      ID
                    </th>
                    <th
                      scope="col"
                      className="border-l font-normal border-black"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="border-l font-normal border-black"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="border-l font-normal border-black"
                    >
                      Tags
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 border-l font-normal border-black"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 bg-[#D9D9D9]">
                    <td>1</td>
                    <td>ABC</td>
                    <td>Description</td>
                    <td>HTML, CSS</td>
                    <td className="flex sm:h-[80px] md:h-auto justify-center items-center gap-20">
                      <svg
                        width={29}
                        height={23}
                        viewBox="0 0 29 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <rect
                          width={29}
                          height={23}
                          fill="url(#pattern0_1536_456)"
                        />
                        <defs>
                          <pattern
                            id="pattern0_1536_456"
                            patternContentUnits="objectBoundingBox"
                            width={1}
                            height={1}
                          >
                            <use
                              xlinkHref="#image0_1536_456"
                              transform="matrix(0.0416667 0 0 0.0525362 0 -0.130435)"
                            />
                          </pattern>
                          <image
                            id="image0_1536_456"
                            width={24}
                            height={24}
                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAhElEQVRIie2TwQnAIAxF35Klh3YBdxDqPh3HQdq7gj00ooi3xkvxQ0BzeD8JfJh6ZYEbWEfAHZCkIrCPgAfgrN4qm9STG+llk0sTngAvJkH+VgMeBOobM6cFz3c22vAIbNJbKGc5JnzCfwCHEpgcorWCfwpRawDKk7cGdanBewaq8KmuHlYrZbGe+TNUAAAAAElFTkSuQmCC"
                          />
                        </defs>
                      </svg>

                      <svg
                        width={37}
                        height={29}
                        viewBox="0 0 37 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <rect
                          width={37}
                          height={29}
                          fill="url(#pattern0_1536_457)"
                        />
                        <defs>
                          <pattern
                            id="pattern0_1536_457"
                            patternContentUnits="objectBoundingBox"
                            width={1}
                            height={1}
                          >
                            <use
                              xlinkHref="#image0_1536_457"
                              transform="matrix(0.0333333 0 0 0.0425287 0 -0.137931)"
                            />
                          </pattern>
                          <image
                            id="image0_1536_457"
                            width={30}
                            height={30}
                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAtElEQVRIie2VQQ6CQAxFX8R7uPM4xsPgCTmFSzW6niUGBTezMnawLTIQecks+1+bzgD8G4Wjdg9sgeNAvXzNHah/Fb6L4Z3y1LFWTWWQSaf6JFhZulLSjeCYOQH/foMUntrx2d87p1xiMWOS4ssAYjFjkhNnE4s3UoEpowAa7G+4AdZSeGriJ3CzdBy5Ag+LGHx7TtYu4nc8H5FkbbaJ+9gALfqn1MZaFwd0/+YAlF7pwvx5Abo6e/T2cOSLAAAAAElFTkSuQmCC"
                          />
                        </defs>
                      </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex sm:justify-center md:justify-end">
            <nav aria-label="Page navigation example">
              <ul className="inline-flex -space-x-px text-sm">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-black rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
                  >
                    Previous
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-black hover:bg-gray-100 hover:text-gray-700"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-black hover:bg-gray-100 hover:text-gray-700"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-black rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
