import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import "./Home.css";
import { Link } from 'react-router-dom';

const Home = () => {
  const banner = {
    background: "#000 url(https://i.postimg.cc/T1Bhgt1Y/IMG-20230307-113423.jpg)",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundBlandMode: 'overlay',

  }

  return (
    <main className="banner-bg" >
      <Container >
        <div className="p-5" >
          <Row className='align-items-center banner'>
            <Col className='details'>
              <h5>Hi! there I'm</h5>
              <h1 className="text-white">Md Ashik Ali</h1>
              <h4>Passionate Social Worker | Advocating for Social Justice, Human Rights, and Inclusive Well-being</h4>
            </Col>
            <Col className='align-items-end d-flex justify-content-end'>
              <Link to="https://i.postimg.cc/W3VTgQs4/Ashik-Ali-Profile.jpg" target='_blank'>
              <Image src="https://i.postimg.cc/W3VTgQs4/Ashik-Ali-Profile.jpg" roundedCircle className='profile-picture' />
            </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </main>
  );
};

export default Home;