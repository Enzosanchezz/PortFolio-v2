import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

export default function Home() {
  return (
    <section>
      <Container fluid id="home">
        <Container >
          <Row>
            <Col md={7} >
              <h1 style={{ paddingBottom: 15 }} >
                Hello!{" "}
                <span  role="img" aria-labelledby="wave">
                  👋
                </span>
              </h1>

              <h1 >
              My name is
                <strong > Enzo Sanchez</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <h2>
                  I am
                </h2>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2/>
    </section>
  )
}
