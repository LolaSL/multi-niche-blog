import React, { useState } from "react";
import ReactQuill from "react-quill";

const CreatePost = () => {
  return (
    <div className="create-post">Create Post
      <div className="content">
        <input  type="text" placeholder="Create Post"/>
    <div className='menu'></div>
    <div className="item">i1</div>
        <div className="item">i2</div>
      </div>
    </div>
  )
}

export default CreatePost;