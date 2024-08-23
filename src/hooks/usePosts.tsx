import { useEffect, useState } from "react";
import IPost from "../interfaces/IPost";
import instance from "../axios/instance";
import { useNavigate, useParams } from "react-router-dom";
import { loadingContext } from "../context/LoadingContext";

const usePost = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [post, setPostDetail] = useState<IPost | undefined>();
  const [tags, setTags] = useState<string[]>([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const setLoading = loadingContext();

  const getAllPosts = async () => {
    try {
      setLoading(true);
      const {
        data: { posts },
      } = await instance.get("/posts");
      setPosts(posts);
    } catch (error) {
      navigate("/sign-in");
    } finally {
      setLoading(false);
    }
  };

  const getAllTags = async () => {
    try {
      setLoading(true);
      const { data } = await instance.get("/posts/tags");
      setTags(data);
    } catch (error) {
      navigate("/sign-in");
    } finally {
      setLoading(false);
    }
  };

  const getPostDetail = async () => {
    try {
      setLoading(true);
      if (id) {
        const {
          data: { posts },
        } = await instance.get("/posts");

        const newData = posts.find((post: IPost) => post.id == id);
        newData.tags = newData.tags.map((item: any) => item.tag);
        setPostDetail(newData);
      }
    } catch (error) {
      navigate("/profile");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (id?: string | number) => {
    try {
      setLoading(true);
      if (confirm("Are you sure you want to delete it?")) {
        await instance.delete("/posts/" + id);
        alert("Delete successfully");
        getAllPosts();
      }
    } catch (error) {
      navigate("/sign-in");
    } finally {
      setLoading(false);
    }
  };

  const patchPost = async (post: IPost) => {
    try {
      setLoading(true);

      await instance.patch("/posts/" + id, post);
      navigate("/profile");
    } catch (error) {
      navigate("/sign-in");
    } finally {
      setLoading(false);
    }
  };

  const postPost = async (post: IPost) => {
    try {
      setLoading(true);
      await instance.post("/posts", post);
      navigate("/profile");
    } catch (error) {
      navigate("sign-in");
    } finally {
      setLoading(false);
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
