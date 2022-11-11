import { Container, Row } from "react-bootstrap";
import css from "./comment.module.css";
import userImage from "./placeholder-user.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Comment = ({ name, email, body }) => {
  return (
    <Container className="border-bottom border-secondary pt-3">
      <Row>
        <div></div>
        <Container className=" d-flex justify-content-start">
          <img
            src={userImage}
            className={css.userAnonymousImage}
            alt="user avatar"
          ></img>
          <p className="p-1 text-dark">{email}</p>
        </Container>
        <div>
          <p>{name}</p>
          <p>{body}</p>
        </div>
      </Row>
    </Container>
  );
};

export default Comment;
