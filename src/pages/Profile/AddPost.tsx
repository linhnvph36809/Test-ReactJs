import PostForm from "../../components/PostForm";
import usePost from "../../hooks/usePosts";
import IPost from "../../interfaces/IPost";

const AddPost = () => {
  const { postPost } = usePost();
  const handlerSubmit = (data: IPost) => {
    postPost(data);
  };

  return (
    <>
      <div>
        <h1 className="mb-5 text-4xl">Add Post</h1>
        <PostForm handlerSubmitForm={handlerSubmit} />
      </div>
    </>
  );
};

export default AddPost;
