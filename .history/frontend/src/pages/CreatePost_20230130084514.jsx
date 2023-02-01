import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  const [value, setValue] = useState("");
  console.log(value);
  // const [title, setTitle] = useState("");
  return (
    <div className="create-post">Create Post
      <div className="content">
        <input   type="text"
          placeholder="Title"
          // onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
    <div className='menu'></div>
    <div className="item"> <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
        
        </div>
        <div className="item">i2</div>
      </div>
    </div>
  )
}

export default CreatePost;