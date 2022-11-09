import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Comment from "../../components/Comment";
import css from './postpage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";


const PostPage = () => {
  const { id } = useParams();
  const [ singlePost, setSinglePost ] = useState();
  const [ allComments, setAllComments ] = useState([]);

  const fetchPost = async () => {
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setSinglePost(data);
    
      
    } catch (error) {
      console.log(error)
    }
  }

  const fetchComments = async () => {
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments`);
      setAllComments(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPost();
    fetchComments();
   
  }, [])
  console.log(singlePost)
  
  return (
    <div>
      <Link to="/" className={css.backBtn}>
        <FontAwesomeIcon icon={faChevronLeft}/>
        Go back
      </Link>
      <main className={css.container}>
        <div className={css.top}>
          <h1>{ singlePost?.title }Ante</h1>
          <p>{singlePost?.body}</p>
        </div>
        {allComments
          .filter(comment => comment.postId === singlePost?.id)
          .map((c, i)=><Comment key={i} name={c.name} email={c.email} body={c.body}/>)}
      </main>
    </div>
    );
}
 
export default PostPage;