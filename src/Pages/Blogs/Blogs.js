import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, json } from 'react-router-dom';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(()=> {
    fetch("./data/blogs.json")
    .then(res => res.json())
    .then(result => setBlogs(result))
  }, []);
  console.log(blogs);

  return (
    <>
      <div >
        <Container>
        <div class="section-title mt-5 mx-auto text-center position-relative" data-aos="fade-up">
            <span class="text-uppercase position-absolute">blogs</span>
            <h2 class="text-uppercase position-relative mb-0">blogs</h2>
            <small class="mini-title font-weight-bolder">
                <small class="p-before text-dark">&mdash;&mdash;&mdash;</small> <small
                    class="p-after text-dark">&mdash;&mdash;&mdash;</small>
            </small>
        </div>
        <div className="py-4">
        <Row class="pt-3 align-items-stretch" data-aos="fade-in">
          {
            blogs.map(blg => <>
              <Col md={6} lg={4} class="mb-4 px-2 filter ecommerce">
                    <div class="card border-light bg-light shadow h-100">
                        <div class="position-relative card-img">
                            <img src={blg?.img} class="card-img-top rounded-0" alt="..." />
                            <div
                                class="overlay position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
                                <Link to={`/read/${blg?.title}`} class="icon" title="Read More" >
                                    <i class=" bx bx-link text-center  text-white "></i>
                                </Link>

                            </div>
                        </div>
                        <div class="px-2 py-4 text-start text-md-left card-body">
                            <h5 class="card-title "><Link to={`/read/${blg?.title}`} class="text-success">{blg?.title}</Link></h5>
                            <p class="card-text" style={{textAlign:"justify"}}>
                                {blg?.shortDesc}
                            </p>
                            <Link to={`/read/${blg?.title}`}  class="btn btn-outline-danger font-weight-bold rounded-0 px-4 mt-3">Read More</Link>
                        </div>
                    </div>
                </Col>
            </>)
          }
        </Row>
        </div>
        </Container>
      </div>
    </>
  );
};

export default Blogs;