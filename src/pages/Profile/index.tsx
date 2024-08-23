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
            <div className="rounded-lg border border-gray-200">
              <div className="overflow-x-auto rounded-t-lg">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                  <thead className="ltr:text-left rtl:text-right">
                    <tr>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        ID
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Title
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Description
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Tags
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {posts.map((post, i) => (
                      <tr key={i}>
                        <td className="text-center whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          {post.id}
                        </td>
                        <td className="text-center whitespace-nowrap px-4 py-2 text-gray-700">
                          {post.title}
                        </td>
                        <td className="text-center whitespace-nowrap px-4 py-2 text-gray-700">
                          {post.description}
                        </td>
                        <td className="text-center whitespace-nowrap px-4 py-2 text-gray-700">
                          {Array.isArray(post.tags) &&
                            post.tags.map((item) => item?.tag).join(",")}
                        </td>
                        <td className="text-center whitespace-nowrap px-4 py-2 text-gray-700">
                          <div className="flex sm:h-auto justify-center items-center gap-20">
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
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
                <ol className="flex justify-end gap-1 text-xs font-medium">
                  <li>
                    <a
                      href="#"
                      className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                    >
                      <span className="sr-only">Prev Page</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                    >
                      1
                    </a>
                  </li>
                  <li className="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
                    2
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                    >
                      4
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                    >
                      <span className="sr-only">Next Page</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
