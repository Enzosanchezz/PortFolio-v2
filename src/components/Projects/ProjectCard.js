import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CgWebsite } from "react-icons/cg";
import { BsPaperclip } from "react-icons/bs";

export default function ProjectCard(props) {
    return (
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                  <Card.Title>{props.title}</Card.Title>
                  <Card.Text>
                  {props.description}
                  </Card.Text>
                  <Button variant="primary" href={props.ghLink} target="_blank">
          <BsPaperclip /> &nbsp;
          {props.isComp ? "Certificate" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}


        {!props.isComp && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      );
}
