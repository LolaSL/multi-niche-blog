import React from 'react';
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";


const Post = () => {


  return(
<div className="single-post">
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="content-image" />
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
            className="user_"
          />
          <div className="info">
            <span>Katy</span>
            <p>Posted 3 days ago</p>
          </div>
          
            <div className="edit">
              <Link to={`/write?edit=2`} >
                <img src={Edit} alt="" />
              </Link>
              <img  src={Delete} alt="Delete" />
            </div>
         
        </div>
        <h1>Post Title</h1>
           </div>
      <div className="menu">m</div>
    </div>
  );
};

export default Post;