import axios from "axios";
import { useEffect, useState } from "react";
import Comment from "./Comment";

const PostPage = () => {
  const [allComments, setAllComments] = useState([]);

  const fetchComments = async () => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/comments`
      );
      setAllComments(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      {allComments.map((c, i) => (
        <Comment key={i} name={c.name} email={c.email} body={c.body} />
      ))}
    </div>
  );
};

export default PostPage;
