import { useState, useEffect } from "react";
import axios from "axios";

const usePosts = () => {
  const [ allPosts, setAllPosts ] = useState([]);

  useEffect(() => {
    try {
      const fetchPosts = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setAllPosts(response.data);
      
      }
      fetchPosts();
    } catch (error) {
      console.log(error)
    }

  }, [])
  return allPosts;
}
 
export default usePosts;