import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const NoteTaker = ({parentHeight}) => {
  const [value, setValue] = useState("");

  return (
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        style={{
          minHeight:"300px",
          height:"100%",
          maxHeight:'100%',
          border:'1px solid red'
        }}
      />
  );
};

export default NoteTaker;
