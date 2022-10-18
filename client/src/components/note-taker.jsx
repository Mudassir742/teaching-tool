import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const NoteTaker = () => {
  const [value, setValue] = useState("");

  return (
    <ReactQuill
      //theme="snow"
      value={value}
      onChange={setValue}
      style={{
        minHeight: "calc(100% - 42px)",
        maxHeight: "calc(100% - 42px)",
        height: "100%",
      }}
    />
  );
};

export default NoteTaker;
