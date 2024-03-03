import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Card = () => {
  const intialdata = [{
    _id:'1',
    title: "timepass",
    img: "fkdnfd",
    desc: "apna kaam kare",
  }];
  const [datas, setdatas] = useState(intialdata);

  const fetchdata = async () => {
    try {
      const bdata = await fetch("https://blog-data-nine.vercel.app/blog/data");
      const parsedata = await bdata.json();
      const newdata = parsedata.blogdata;
      setdatas(newdata);
    } catch (e) {
      console.log(e);
      console.log("failet to fetch data");
    }
  };

  useEffect(() => {
    fetchdata();
  },[]);
  
  const truncateDesc = (desc, maxLength) => {
    if (desc.length > maxLength) {
      return desc.substring(0, maxLength) + "...";
    }
    return desc;
  };
  return (
    <div className="card-container">
      {datas.map((data,index) => {
        return (
          <div className="card" style={{ width: "18rem" }}>
            <img src={data.img} className="card-img-top" alt="image not found" />
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">{truncateDesc(data.desc, 50)}</p>
              <Link to={`Blogpage/${data._id}`} className="btn btn-primary">
                Go to page
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
