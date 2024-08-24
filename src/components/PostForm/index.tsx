import { SubmitHandler, useForm } from "react-hook-form";
import IPost from "../../interfaces/IPost";
import ButtonPrimary from "../ButtonPrimary";
import usePost from "../../hooks/usePosts";
import { useEffect } from "react";

type TypePostForm = {
  handlerSubmitForm: (data: IPost) => void;
  defaultValue?: IPost;
};

const PostForm = ({ handlerSubmitForm, defaultValue }: TypePostForm) => {
  const { tags } = usePost();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IPost>();

  useEffect(() => {
    if (!defaultValue) return;
    reset(defaultValue);
  }, [defaultValue]);

  const onSubmit: SubmitHandler<IPost> = (data) => {
    data.tags = data.tags.map((tag) => ({ tag })) as [];
    handlerSubmitForm(data);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-6 mb-6 md:grid-cols-1">
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-base font-medium text-black"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="md:h-[50px] md:px-5 bg-gray-50 border border-gray-300 text-gray-900
              text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              {...register("title", { required: "Please enter this field" })}
            />
            {errors.title && (
              <p className="text-red-500 text-base">{errors.title.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-base font-medium text-black"
            >
              Description
            </label>
            <input
              type="text"
              id="title"
              className="md:h-[50px] md:px-5 bg-gray-50 border border-gray-300 text-gray-900
              text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              {...register("description", {
                required: "Please enter this field",
              })}
            />
            {errors.description && (
              <p className="text-red-500 text-base">
                {errors.description.message}
              </p>
            )}
          </div>
          <div>
            <>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an tags
              </label>
              <select
                multiple
                {...register("tags", { required: "Please enter this field" })}
                id="countries"
                className="md:h-[70px] bg-gray-50 border border-gray-300 text-gray-900 text-sm
                rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                {tags.map((tag, i) => (
                  <option key={i} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </>
            {errors.tags && (
              <p className="text-red-500 text-base">{errors.tags.message}</p>
            )}
          </div>
          <ButtonPrimary
            propsclassName="w-full"
            title="Submit"
            type="submit"
            typeElement="button"
          />
        </div>
      </form>
    </>
  );
};

export default PostForm;
