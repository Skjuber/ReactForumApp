import { Link } from "react-router-dom";
import css from "./singlePost.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

const SinglePost = ({ title, id, body, handleShow }) => {
  console.log(body);
  return (
    <Container fluid class="border border-primary ">
      <p class="display-5 p-3 mb-2 text-primary" onClick={() => handleShow(id)}>
        {title}
      </p>
      <p class="class= text-info">{body}</p>
    </Container>
  );
};

export default SinglePost;
