import "./singlePist.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

const SinglePost = ({ title, id, body, post, handleShow, user }) => {
  return (
    <Container fluid className="border border-secondary  ">
      <h2
        className="display-5 p-3 mb-2 text-primary "
        onClick={() => handleShow(post)}
      >
        <img src={user?.img} alt="" /> {title}
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
