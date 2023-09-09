import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import "./Home.css";
import { Link } from 'react-router-dom';
import Projects from './Projects';
import Contact from '../Contact/Contact';
import Blogs from '../Blogs/Blogs';

const Home = () => {
  

  return (
    <main >
      <div className="banner-bg" >
        <Container >
          <div className="p-5" >
            <Row className='align-items-center banner'>
              <Col className='details order-1 order-md-0 text-center text-md-start' md={6}>
                <h5>Hi! there I'm</h5>
                <h1 className="text-white">Md Ashik Ali</h1>
                <h4>Passionate Social Worker | Advocating for Social Justice, Human Rights, and Inclusive Well-being</h4>
              </Col>
              <Col className='align-items-end d-flex justify-content-md-end justify-content-center mb-5 mb-md-0 order-0 order-md-1' md={6}>
                <Link to="https://i.postimg.cc/W3VTgQs4/Ashik-Ali-Profile.jpg" target='_blank'>
                <Image src="https://i.postimg.cc/W3VTgQs4/Ashik-Ali-Profile.jpg" roundedCircle className='profile-picture' />
              </Link>
              </Col>
            </Row>
            </div>

            
        </Container>
      </div>
      
      <div id="about" className=''>
        {/* <!-- ############################################# -->
      <!-- about section start --> */}
      <div className="about-content py-5 py-lg-5 bg-dark">
              <Container>
                  <Row className='align-items-center'>
                      <Col className=" mb-3 mb-lg-0">
                          <p className="text-danger text-center lead bg-light p-2 text-uppercase">
                              about
                          </p>
                          <p className="text-light text-justify">
                          Welcome to my profile! I am a dedicated and compassionate social worker committed to fostering positive social development and advocating for social justice and human rights. With a deep understanding of the significance of cultural competence, I strive to empower individuals and communities to achieve optimal social well-being.
                          </p>
                          <p className="text-light text-justify">
                          My journey in the field of social work has been driven by a passion for creating positive change in society. I firmly believe that every individual deserves to live a life free from discrimination and injustice. Through my work, I am determined to challenge systemic barriers and promote inclusivity, ensuring that everyone has equal access to opportunities and resources.
                          </p>
                          <p className="text-light text-justify">
                          As a social worker, I am driven by a commitment to social well-being. I believe that a society's true progress is measured by the well-being of its most vulnerable members. Through collaboration, advocacy, and resource mobilization, I work tirelessly to uplift individuals and communities facing adversity. By creating a safe and empowering environment, I aim to empower individuals to overcome challenges, develop their potential, and lead fulfilling lives.
                          </p>
                          <p className="text-light text-justify">
                          Thank you for visiting my profile, and I look forward to engaging with you in meaningful conversations about social development, social justice, human rights, cultural competence, and the holistic pursuit of social well-being for all.
                          </p>
                          <p className="text-white">
                              <span className="d-block text-uppercase my-3 p-2 bg-light text-dark">What Makes Me
                                  Deferent?</span>
                              I’m self-motivated, able to adapt to any organizational environment, able to take any kind
                              of risk
                              to save your organization or business, diligent and ready to give my best effort to achieve
                              the
                              targets.
                          </p>
                          <p className="">
                              <a href="cv/my-CV.pdf" download="my-CV.pdf"
                                  className="text-decoration-none btn btn-primary px-4"><i className="bx bx-download"></i>
                                  Download My CV</a>
                          </p>
                      </Col>

                      <Col md={5}>
                          <div className="d-none d-md-block">
                              <img src="https://i.postimg.cc/fb061bTL/OIP.jpg" alt="Could not load" className="img-fluid rounded-1" style={{transform: "rotate(-90deg)"}} />
                          </div>
                          <div className="d-block d-md-none">
                              <img src="https://i.postimg.cc/fb061bTL/OIP.jpg" alt="Could not load" className="img-fluid rounded-1" />
                          </div>
                      </Col>
                  </Row>
              </Container>
          </div>
      {/* <!-- about section end --> */}
      </div>

      <div id="passion" className=''>
      <div className=" py-5 bg-light">
              <Container>
                  <Row className='align-items-center'>
                      <Col className=" mb-3 mb-lg-0">
                          <p className="text-light text-center lead bg-dark p-2 text-uppercase">
                              passion
                          </p>
                          <p className=" text-justify">
                          I'm passoniate to web developer. As a web developer, I really love what I do. I've learned a lot of skills like HTML, CSS, JavaScript, ReactJs, NodeJs, and more. I use these skills to create websites and apps. My passion for coding keeps me going.

                          Passion means I really, really enjoy what I do. It's like a strong feeling that makes me want to get better at it every day. I work hard to make my websites and apps work well and look nice.
                          </p>
                          <p className=" text-justify">
                          I'm always curious and excited to learn new things in web development. It's my passion that helps me stay creative and do great work in this ever-changing field.
                          </p>

                      </Col>

                      <Col md={5}>
                          <div className="d-none d-md-block py-4">
                              <img src="https://i.postimg.cc/bvSFJYMt/web.jpg" alt="Could not load" className="img-fluid rounded-1" style={{transform: "rotate(-0deg)"}} />
                          </div>
                          <div className="d-block d-md-none">
                              <img src="https://i.postimg.cc/bvSFJYMt/web.jpg" alt="Could not load" className="img-fluid rounded-1" />
                          </div>
                      </Col>
                  </Row>
              </Container>
          </div>
      </div>


      <div id="skills">
        <Container >
          <h2 className="mx-auto w-lg-50 font-bold bg-dark text-light text-center p-2 text-uppercase">Technical Skills</h2>
          <div className="my-2 p-3">

              <div className='skils d-inline-flex align-items-center'>
                <Button className='rounded-0 px-4 py-2 ' variant="secondary">
                <span className='me-1 fst-italic border px-1 border-light'>Ex</span>
                <span>MS Excel</span></Button>
              </div>

              <div className='skils d-inline-flex align-items-center'>
                <Button className='rounded-0 px-4 py-2 ' variant="secondary">
                <span className='me-1 fst-italic border px-1 border-light'>Pp</span>
                <span>MS PowerPoint</span></Button>
              </div>

              <div className='skils d-inline-flex align-items-center'>
                <Button className='rounded-0 px-4 py-2 ' variant="secondary">
                <span className='me-1 fst-italic border px-1 border-light'>W</span>
                <span>MS Word</span></Button>
              </div>

              <div className='skils d-inline-flex align-items-center'>
                <Button className='rounded-0 px-4 py-2 ' variant="secondary">
                <span className='me-1 fst-italic border px-1 border-light'>Ac</span>
                <span>MS Acess</span></Button>
              </div>

              <div className='skils d-inline-flex align-items-center'>
                <Button className='rounded-0 px-4 py-2 ' variant="secondary">
                <span className='me-1 fst-italic border px-1 border-light'>IB</span>
                <span>Internet Browsing</span></Button>
              </div>

              <div className='skils d-inline-flex align-items-center'>
                <Button className='rounded-0 px-4 py-2 ' variant="secondary">
                <i className='bx bxl-react me-1'></i>
                <span>ReactJS</span></Button>
              </div>

              <div className='skils d-inline-flex align-items-center'>
                <Button className='rounded-0 px-4 py-2 ' variant="secondary">
                <i className='bx bxl-nodejs me-1'></i>
                <span>NodeJS</span></Button>
              </div>

              <div className='skils d-inline-flex align-items-center'>
                <Button className='rounded-0 px-4 py-2 ' variant="secondary">
                <i className='bx bxl-mongodb me-1'></i>
                <span>MongoDB</span></Button>
              </div>

              <div className='skils d-inline-flex align-items-center'>
                <Button className='rounded-0 px-4 py-2 ' variant="secondary">
                <i className='bx bxl-javascript me-1'></i>
                <span>JavaScript</span></Button>
              </div>

              <div className='skils d-inline-flex align-items-center'>
                <Button className='rounded-0 px-4 py-2 ' variant="secondary">
                <i className='bx bxl-firebase me-1'></i>
                <span>Firebase</span></Button>
              </div>

              <div className='skils d-inline-flex align-items-center'>
                <Button className='rounded-0 px-4 py-2 ' variant="secondary">
                <span className='me-1 fst-italic border px-1 border-light'>MUI</span>
                <span>Material UI</span></Button>
              </div>

              <div className='skils d-inline-flex align-items-center'>
                <Button className='rounded-0 px-4 py-2 ' variant="secondary">
                <i className='bx bxl-bootstrap me-1'></i>
                <span>React Bootstrap</span></Button>
              </div>

              <div className='skils d-inline-flex align-items-center'>
                <Button className='rounded-0 px-4 py-2 ' variant="secondary">
                <i className='bx bxl-sass me-1'></i>
                <span>SASS</span></Button>
              </div>

              <div className='skils d-inline-flex align-items-center'>
                <Button className='rounded-0 px-4 py-2 ' variant="secondary">
                <i className='bx bxl-bootstrap me-1'></i>
                <span>Bootstrap</span></Button>
              </div>

              <div className='skils d-inline-flex align-items-center'>
                <Button className='rounded-0 px-4 py-2 ' variant="secondary">
                <i className='bx bxl-tailwind-css me-1'></i>
                <span>Tailwind CSS</span></Button>
              </div>

              <div className='skils d-inline-flex align-items-center'>
                <Button className='rounded-0 px-4 py-2 ' variant="secondary">
                <i className='bx bxl-css3 me-1'></i>
                <span>CSS</span></Button>
              </div>

              <div className='skils d-inline-flex align-items-center'>
                <Button className='rounded-0 px-4 py-2 ' variant="secondary">
                <i className='bx bxl-html5 me-1'></i>
                <span>HTML</span></Button>
              </div>

          </div>
        </Container>
      </div>

      <div id="academic-knowledge" className='pb-5 pt-3'>
        <Container>
        <h2 className="mx-auto w-lg-50 font-bold bg-dark text-light text-center p-2 text-uppercase">Academic Knowledge</h2>
          <div className='skils d-inline-flex align-items-center'>
            <Button className='rounded-0 px-3 py-2 ' variant="secondary">
            <i className='bx bx-plus-medical me-2'></i>
            <span>Social Work Theories</span></Button>
          </div>

          <div className='skils d-inline-flex align-items-center'>
            <Button className='rounded-0 px-3 py-2 ' variant="secondary">
            <i className='bx bx-plus-medical me-2'></i>
            <span>Human Behavior and Development</span></Button>
          </div>

          <div className='skils d-inline-flex align-items-center'>
            <Button className='rounded-0 px-3 py-2 ' variant="secondary">
            <i className='bx bx-plus-medical me-2'></i>
            <span>Social Policy and Advocacy</span></Button>
          </div>

          <div className='skils d-inline-flex align-items-center'>
            <Button className='rounded-0 px-3 py-2 ' variant="secondary">
            <i className='bx bx-plus-medical me-2'></i>
            <span>Research Skills</span></Button>
          </div>

          <div className='skils d-inline-flex align-items-center'>
            <Button className='rounded-0 px-3 py-2 ' variant="secondary">
            <i className='bx bx-plus-medical me-2'></i>
            <span>Cultural Competence</span></Button>
          </div>

          <div className='skils d-inline-flex align-items-center'>
            <Button className='rounded-0 px-3 py-2 ' variant="secondary">
            <i className='bx bx-plus-medical me-2'></i>
            <span>Ethics and Professionalism</span></Button>
          </div>

          <div className='skils d-inline-flex align-items-center'>
            <Button className='rounded-0 px-3 py-2 ' variant="secondary">
            <i className='bx bx-plus-medical me-2'></i>
            <span>Intervention Strategies</span></Button>
          </div>

          <div className='skils d-inline-flex align-items-center'>
            <Button className='rounded-0 px-3 py-2 ' variant="secondary">
            <i className='bx bx-plus-medical me-2'></i>
            <span>Field Experience</span></Button>
          </div>

          <div className='skils d-inline-flex align-items-center'>
            <Button className='rounded-0 px-3 py-2 ' variant="secondary">
            <i className='bx bx-plus-medical me-2'></i>
            <span>Interdisciplinary Collaboration</span></Button>
          </div>

          <div className='skils d-inline-flex align-items-center'>
            <Button className='rounded-0 px-3 py-2 ' variant="secondary">
            <i className='bx bx-plus-medical me-2'></i>
            <span>Legal Framework</span></Button>
          </div>

        </Container>
      </div>

      {/* Projects */}
      <div id="Projects">
        <Projects />
      </div>

      {/* blogs */}
      <div id="blogs">
        <Blogs />
      </div>

    {/* Contact */}
      <div id="contant">
        <Contact />
      </div>

    </main>
  );
};

export default Home;