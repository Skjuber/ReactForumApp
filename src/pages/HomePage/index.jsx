import SinglePost from "../../components/SinglePost";
import css from "./homepage.module.css";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Comment from "../../components/Comment";
import axios from "axios";
import { useParams } from "react-router-dom";

function Homepage({ allPosts, allUsers }) {
  const getUserById = (id) => {
    const user = allUsers.find((u) => u.id === id);
    console.log(user);
    return user;
  };

  const { id } = useParams();
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

  // `https://jsonplaceholder.typicode.com/comments/1 Zasto ovo ne radi?`
  //Zasto ovo ne radi? comments[post.id]
  // post.id proslijediti u komentare
  //Možda to nekako dohvatiti sa useParams?
  // `https://jsonplaceholder.typicode.com/comments?postId=1`
  const handleClose = () => setShow(false);
  const handleShow = async (post) => {
    const comments = await fetchComments(post.id);
    setComments(comments);

    // console.log(comments);

    setShow(true);
    setPost(post);
  };
  return (
    <main>
      <Container>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{post.title} </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>{post.body}</p>
            {comments.map((c, i) => (
              <Comment key={i} name={c.name} email={c.email} body={c.body} />
            ))}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>

        <h4>All posts</h4>
        {/* <Button variant = "primary">Alo</Button> */}
        <p>{allPosts.length} Posts</p>

        <div className="bg-light border">
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
    </main>
  );
}

export default Homepage;
