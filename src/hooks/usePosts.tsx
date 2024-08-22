import { useEffect, useState } from "react";
import IPost from "../interfaces/IPost";
import instance from "../axios/instance";
import { useNavigate, useParams } from "react-router-dom";

const usePost = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [post, setPostDetail] = useState<IPost | undefined>();
  const [tags, setTags] = useState<string[]>([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const getAllPosts = async () => {
    try {
      const {
        data: { posts },
      } = await instance.get("/posts");
      setPosts(posts);
    } catch (error) {
      navigate("/sign-in");
    }
  };

  const getAllTags = async () => {
    try {
      const { data } = await instance.get("/posts/tags");
      setTags(data);
    } catch (error) {
      navigate("/sign-in");
    }
  };

  const getPostDetail = async () => {
    try {
      if (id) {
        const {
          data: { posts },
        } = await instance.get("/posts");

        const newData = posts.find((post: IPost) => post.id == id);
        newData.tags = newData.tags.map((item: any) => item.tag);
        setPostDetail(newData);
      }
    } catch (error) {
      // navigate("/profile");
      console.log(error);
    }
  };

  const deletePost = async (id?: string | number) => {
    try {
      if (confirm("Are you sure you want to delete it?")) {
        await instance.delete("/posts/" + id);
        alert("Delete successfully");
        getAllPosts();
      }
    } catch (error) {
      navigate("/sign-in");
    }
  };

  const patchPost = async (post: IPost) => {
    try {
      await instance.patch("/posts/" + id, post);
      navigate("/profile");
    } catch (error) {
      navigate("/sign-in");
    }
  };

  const postPost = async (post: IPost) => {
    try {
      await instance.post("/posts", post);
      navigate("/profile");
    } catch (error) {
      navigate("sign-in");
    }
  };

  useEffect(() => {
    getAllPosts();
    getAllTags();
    getPostDetail();
  }, []);

  return {
    posts,
    tags,
    post,
    postPost,
    patchPost,
    deletePost,
  };
};

export default usePost;
