import SinglePost from "../../components/SinglePost";
import css from "./homepage.module.css";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function Homepage({ allPosts }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id, body) => {
    setShow(true);
    console.log(id, body);
  };
  return (
    <main>
      <Container className="pt-5">
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p></p>
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
        <h2>All posts</h2>
        {/* <Button variant = "primary">Alo</Button> */}
        <p>{allPosts.length} Posts</p>

        <div className="bg-light border">
          {allPosts.map((p, i) => (
            <SinglePost
              handleShow={handleShow}
              key={i}
              title={p.title}
              id={p.id}
              body={p.body}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}

export default Homepage;
