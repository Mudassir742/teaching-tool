 import { useState } from "react";
 import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const NoteTaker = () => {
  const [value, setValue] = useState("");

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      style={{
        minHeight: "300px",
        height: "100%",
        overflow:'auto'
      }}
    />
  );
};

export default NoteTaker;
