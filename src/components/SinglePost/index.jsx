import { Link } from "react-router-dom";
import "./singlePist.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

const SinglePost = ({ title, id, body, post, handleShow }) => {
  return (
    <Container fluid className="border border-secondary  ">
      <h2
        className="display-5 p-3 mb-2 text-primary "
        onClick={() => handleShow(post)}
      >
        {title}
      </h2>
      <p className="font-weight-normal">{body}</p>
    </Container>
  );
};

export default SinglePost;
