import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import "./singleblog.css";

const SingleBlogs = () => {
  const {title} = useParams();
  const [blogs, setBlogs] = useState([]);

  useEffect(()=>{
    fetch("/data/blogs.json")
    .then(res => res.json())
    .then(result => setBlogs(result))
  },[]);
  const blog = blogs.find(blg => blg.title === title)
  console.log(blog, title)
  return (
    <>
      <div id="single-blog" className="py-4">
        <Container>
          <h2>{blog?.title}</h2>
          <img src={blog?.img} alt={blog?.title} style={{height:'300px'}} className="w-100" />
          <div className="blog-details">
          <div dangerouslySetInnerHTML={{ __html: blog?.describtion }} />
          </div>
        </Container>
      </div>
    </>
  );
};

export default SingleBlogs;