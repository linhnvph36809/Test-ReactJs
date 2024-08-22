import PostForm from "../../components/PostForm";
import usePost from "../../hooks/usePosts";
import IPost from "../../interfaces/IPost";

const UpdatePost = () => {
  const { patchPost, post } = usePost();

  const handlerSubmit = (data: IPost) => {
    data.tags = data.tags.map((tag) => ({ tag })) as [];
    patchPost(data);
  };

  return (
    <>
      <div>
        <h1 className="mb-5 text-4xl">Update Post</h1>
        <PostForm handlerSubmit={handlerSubmit} defaultValue={post} />
      </div>
    </>
  );
};

export default UpdatePost;
