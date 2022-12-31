import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const NoteTaker = ({ whiteboardFlag, camFlag }) => {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }],
      [{ align: [] }],
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ header: 1 }, { header: 2 }],
      [{ size: ["small", false, "large", "huge"] }],
      ["blockquote", "code-block"],
      ["video", "image", "link", "formula"],
      [{ list: "ordered" }, { list: "bullet" }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
  ];

  return (
    <ReactQuill
      theme="snow"
      value={value}
      modules={modules}
      formats={formats}
      onChange={setValue}
      style={{
        minHeight: "300px",
        height: "100%",
        maxHeight: whiteboardFlag && camFlag ? "50vh" : "90%",
      }}
    />
  );
};

export default NoteTaker;
