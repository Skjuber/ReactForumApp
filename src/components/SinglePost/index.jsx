import { Link } from "react-router-dom";
import css from "./singlePost.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

const SinglePost = ({ title, id, body, post, handleShow }) => {
  return (
    <Container fluid className="border border-primary ">
      <p
        className="display-5 p-3 mb-2 text-primary "
        onClick={() => handleShow(post)}
      >
        {title}
      </p>
      <p className="text-info">{body}</p>
    </Container>
  );
};

export default SinglePost;
