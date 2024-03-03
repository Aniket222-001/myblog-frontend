import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import './Blogpage.css'
import Navbar from "./Navbar";

const Blogpage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [datas, setdatas] = useState([]);
  const fetchdata = async () => {
    try {
      const bdata = await fetch("http://localhost:4001/blog/data");
      const parsedata = await bdata.json();
      setdatas(parsedata);
      setLoading(false)
    } catch (e) {
      console.log(e);
      console.log("failet to fetch data");
    }
  };

  useEffect(() => {
    fetchdata();
  },[]);

  const blog = datas.find((data) => data._id.toString() === id);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!blog) {
    return <p>Blog not found!</p>;
  }
  return (
    <div>
      <Navbar/>
         <div className="blog-container">
      <div className="blog-header">
        <h2>{blog.title}</h2>
        <p className="blog-date">Published on: {blog.date}</p>
      </div>
      <div className="blog-content">
        <img src={blog.img} alt={blog.title} className="blog-image" />
        <dispatchEvent>{blog.desc}</dispatchEvent>
      </div>
    </div>
    </div>
  );
};

export default Blogpage;
