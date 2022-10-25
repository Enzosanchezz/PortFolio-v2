import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/enzo.png";
// import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Home2() {
  return (
    <Container fluid >
    <Container>
      <Row>
        <Col md={8} >
          <h1 style={{ fontSize: "2.6em" }}>
            Who Am <span > I? </span>
          </h1>
          <p>
            I am a Full Stack Developer graduated from Soy Henry Bootcamp, Argentina
            <br />
            <br />I work with technologies such as
            <i>
              <b > JavaScript, HTML, CSS, React, Redux, Sequelize, MongoDB, Express </b>
            </i>
            <br />
            <br />
            <i>
            I have also participated in several projects and have applied my aforementioned skills in a competitive environment.
            </i>
            <br />
            <br />
          </p>
        </Col>
        <Col md={4} >
          {/* <Tilt> */}
            <img src={myImg} alt="avatar" />
          {/* </Tilt> */}
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h1>Connect with me</h1>
          <p>
            I'm available on these <span >platforms </span>
          </p>
          <ul >
            <li >
              <a
                href="https://github.com/Enzosanchezz"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li >
              <a
                href="https://www.linkedin.com/in/enzogsanchezdeveloper/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="mailto:enzosanchez771@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </Container>
  )
}
