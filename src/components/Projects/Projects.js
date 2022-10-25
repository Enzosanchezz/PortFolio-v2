import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Rebirth from "../../Assets/Projects/rebirth.png";
import Poke from "../../Assets/Projects/pokemon.png";
import Food from "../../Assets/Projects/Food.png";
import Weather from "../../Assets/Projects/weatherApp.png";

export default function Projects() {
  return (
    <Container fluid >
      <Container>
        <h1 >
          My <strong>Projects</strong>
        </h1>
        <p>
          Here are a few things I've worked.
        </p>
        <Row style={{ justifyContent: "center"}}>
          <Col md={4} >
            <ProjectCard
              img={Rebirth}
              isBlog={false}
              title="Rebirth"
              description="I worked in an agile development team with one-week sprints presenting to a Product Owner the advances in the development of a pet adoption app, which aims to facilitate communication between users who want to both release and adopt pets, the same It has functionalities such as CRUD, authentication, integration of payment gateways (to make donations to pets), through version control with GIT/GITHUB, managed with Trello and Slack.
              Implemented technologies: React, Redux, Node, Sequelize, PostgreSQL, Bootstrap, Express, MercadoPago, Nodemailer, Auth0"
              ghLink="https://github.com/aaronstz/PF-Rebirth/tree/rebirth-v2-mirror/PF-Rebirth"
              demoLink="https://frontend-rebirth.vercel.app/"
            />
          </Col>

          <Col md={4} >
            <ProjectCard
              img={Poke}
              isBlog={false}
              title="Poke App"
              description="Development of a SPA (Single Page Application) using React for the Front End and Redux as stmanagement.
              All components were developed with CSS without the use of external libraries.
              The SPA consumes data from an API (“POKEAPI”) through a Back End developed in Node.JS using Express, adding new features to the original API.
              Some features of the project: Search cache, commands and filters, controlled form for creating a pokemon and viewing its details. If necessary, you can delete or edit said pokemon.."
              ghLink=""
              demoLink="https://spa-pokemon-app.vercel.app/"
            />
          </Col>

          <Col md={4} >
            <ProjectCard
              img={Food}
              isBlog={false}
              title="Food App"
              description="Development of a SPA with the technologies learned during the bootcamp: React, Redux, JavaScript, NodeJs, Express, SQL, Sequelize, HTML, CSS. I implemented pagination to handle application information on the Front-End.
              Allowing the user to search, filter or request recipes from the Home. Thus, the user can also add new recipes to the database through a controlled form and, if necessary, can also delete or update recipes."
              ghLink=""
              demoLink="https://foodapp-spa.vercel.app/home"
            />
          </Col>
          <Col md={4} >
            <ProjectCard
              img={Weather}
              isBlog={false}
              title="Weather App"
              description="Development of a weather application using React Native and JavaScript.
              Allows the user to search for any city in the world 🌎. YES! That's right, from your mobile device just enter the name of the city and that's it!
              It has a controlled Input to be able to search for cities that exist, otherwise Weather App will give you an alert to continue with your search."
              ghLink="https://github.com/Enzosanchezz/WeatherApp---React-Native"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
