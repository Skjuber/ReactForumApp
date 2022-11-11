import SinglePost from "./SinglePost/singlePost";

import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Comment from "./Comment/comment";
import axios from "axios";

function Homepage({ allPosts, allUsers }) {
  const getUserById = (id) => {
    const user = allUsers.find((u) => u.id === id);

    return user;
  };

  const fetchComments = async (postIdentificationNumber) => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${postIdentificationNumber}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const [show, setShow] = useState(false);
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = async (post) => {
    const comments = await fetchComments(post.id);
    setComments(comments);

    setShow(true);
    setPost(post);
  };
  return (
    <Container className="pt-4">
      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header closeButton className="border-bottom border-secondary  ">
          <Modal.Title>{post.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{post.body}</p>
          <h5 className="text-dark">Comments</h5>

          {comments.map((c, i) => (
            <Comment key={i} name={c.name} email={c.email} body={c.body} />
          ))}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <h4>All posts</h4>

      <p>{allPosts.length} Posts</p>

      <div>
        {allPosts.map((p, i) => (
          <SinglePost
            handleShow={handleShow}
            post={p}
            key={i}
            title={p.title}
            id={p.id}
            body={p.body}
            user={getUserById(p.userId)}
          />
        ))}
      </div>
    </Container>
  );
}

export default Homepage;
