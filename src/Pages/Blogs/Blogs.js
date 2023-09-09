import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { json } from 'react-router-dom';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(()=> {
    fetch("../data/blogs.json")
    .then(res => res.json())
    .then(result => console.log('result'))
  }, []);
  console.log("Hello world!");
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
        </Container>
      </div>
    </>
  );
};

export default Blogs;