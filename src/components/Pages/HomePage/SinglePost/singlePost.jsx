import "./singlePost.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

const SinglePost = ({ title, body, post, handleShow, user }) => {
  return (
    <Container fluid className="border-bottom border-secondary  ">
      <h2
        className="display-7 p-3 mb-2 text-dark "
        onClick={() => handleShow(post)}
      >
        <img
          className="border border-secondary border-2"
          src={user?.img}
          alt=""
        />{" "}
        {title}
      </h2>
      <p className="font-weight-normal">{body}</p>
      <Container className="d-flex justify-content-end text-secondary">
        Posted by {""}
        {user?.name}
      </Container>
      <Container></Container>
    </Container>
  );
};

export default SinglePost;
