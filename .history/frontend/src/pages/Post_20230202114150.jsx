import React from 'react';
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Post = () => {


  return(
<div className="single-post shadow border p-4">
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="content-image" />
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
            className="user-image"
          />
          <div className="info">
            <span>Katy</span>
            <p>Posted 3 days ago</p>
          </div>
            <div className="edit">
              <Link to={`/write?edit=2`} >
                <img src={Edit} alt="" className="logo-buttons"/>
              </Link>
              <img  src={Delete} alt="Delete" className="logo-buttons"/>
            </div>
        </div>
        <h1 className="post-title font-weight-light ">What is Lorem Ipsum?</h1>
           <p className="p-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <Menu />
    </div>
  );
};

export default Post;