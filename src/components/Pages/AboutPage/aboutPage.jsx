import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Aboutpage = () => {
  return (
    <Col xs={4} className="border border-secondary m-3  ">
      <Row className="m-1">
        <h1>React forum app</h1>
      </Row>
      <Row className="m-1">
        <h3> JsonPlaceholder</h3>
        <p>
          Information from the posts and comments was fetched from <br />
          <a href="https://jsonplaceholder.typicode.com/">
            https://jsonplaceholder.typicode.com/
          </a>
          <h3> Avatars</h3>
          Each user has it's own assigned avatar. Avatar images were fetched
          from <br /> <a href="https://imgur.com/">https://imgur.com/</a>
          <h3> React routing</h3>
          React Router was utillized for site's routing. You can read it's
          documentation here:{" "}
          <a href="https://v5.reactrouter.com/web/guides/quick-start">
            https://v5.reactrouter.com/web/guides/quick-start
          </a>
          <br />
          <h3> Bootstrap</h3>
          Site's design was done using Bootstra. You can check it's
          documentation here: <br />{" "}
          <a href="https://imgur.com/">
            https://react-bootstrap.github.io/getting-started/introduction/
          </a>
        </p>
      </Row>
    </Col>
  );
};

export default Aboutpage;
