import React from "react";
import "./home.css";
import { Container, Row, Col } from "react-bootstrap";
const Home = () => {
  return (
    <div className="overlay">
      <Container>
        <Row className="home-wraper">
          <Col className="detail-wraper">
            <h2 className="name">Chris Tenney</h2>
            <h2 className="title">voice over artist</h2>
            <h2 className="slogen">
              <span style={{ color: "#7d0e01" }}>Friendly,</span>{" "}
              <span style={{ color: "#ae6927 " }}>Gentle</span> and Believable
            </h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
