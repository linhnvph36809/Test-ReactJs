import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/ButtonPrimary";
import usePost from "../../hooks/usePosts";
import { ICON_DELETE, ICON_UPDATE } from "../../datas";

const Profile = () => {
  const { posts, tags, deletePost } = usePost();

  return (
    <>
      <div>
        <div className="flex justify-between items-center sm:gap-2">
          <Link to="/profile/add">
            <ButtonPrimary
              title="Add new"
              typeElement="button"
              propsclassName="lg:w-[252px] sm:w-[100px] sm:h-[40px] text-xs"
              type="submit"
            />
          </Link>
          <form className="">
            <div className="flex-1 grid grid-cols-2 justify-between items-center sm:gap-3 lg:gap-5">
              <input
                type="text"
                id="first_name"
                className="xl:w-[368px] sm:h-[30px] md:h-[49px] bg-gray-50 border border-black 
                text-black text-[15px] rounded-[6px] lg:px-8 sm:px-3"
                placeholder="John"
              />

              <select
                id="countries"
                className="xl:w-[368px] sm:h-[30px] md:h-[49px] flex-1 bg-gray-50 border border-black 
                text-black text-[15px] rounded-[6px] p-2.5"
                onChange={(e) => console.log(e.target.value)}
              >
                <option value={""}>Choose a tags</option>
                {tags.map((tag, i) => (
                  <option key={i} value={tag}>
                    {tag}
                  </option>
                ))}
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
                  <th scope="col" className="border-l font-normal border-black">
                    Title
                  </th>
                  <th scope="col" className="border-l font-normal border-black">
                    Description
                  </th>
                  <th scope="col" className="border-l font-normal border-black">
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
                {posts.map((post, i) => (
                  <tr
                    key={i}
                    className="bg-white border-b dark:bg-gray-800 bg-[#D9D9D9]"
                  >
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.description}</td>
                    <td>{post.tags.map((item) => item.tag).join(",")}</td>
                    <td className="flex sm:h-[80px] md:h-auto justify-center items-center gap-20">
                      <Link
                        to={`/profile/edit/${post.id}`}
                        className="hover:opacity-50"
                      >
                        {ICON_DELETE}
                      </Link>
                      <div
                        onClick={() => deletePost(post.id)}
                        className="hover:cursor-pointer hover:opacity-50"
                      >
                        {ICON_UPDATE}
                      </div>
                    </td>
                  </tr>
                ))}
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
    </>
  );
};

export default Profile;
