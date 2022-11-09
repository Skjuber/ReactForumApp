import css from "./aboutpage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Container, Stack } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Aboutpage = () => {
  return (
    <Col xs={4} className="border border-secondary m-3 ">
      <Row className="m-1">
        <h1>React forum app</h1>
      </Row>
      <Row className="m-1">
        <p>
          Lorem, ipsum dolor sit amet
          <br /> consectetur adipisicing elit. <br /> Ab porro repellat,
          voluptatum blanditiis,
          <br /> neque aspernatur eveniet placeat debitis praesentium
          reprehenderit
          <br /> a enim ut amet natus animi iure dignissimos
          <br /> hic consequatur?
        </p>
      </Row>
      <Row>
        <Col>1 of 1</Col>
      </Row>
    </Col>
  );
};

export default Aboutpage;
