import { useRef, useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { saveAs } from "file-saver";
import { pdfExporter } from "quill-to-pdf";
import { IconButton, Stack, Box } from "@mui/material";
import { Delete, Save } from "@mui/icons-material";

export function QuillEditor({ whiteboardFlag, camFlag }) {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem("document") || "[]")
  );
  const editorRef = useRef(null);

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
      [{ script: "sub" }, { script: "super" }],
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

  const exportAsPDF = async () => {
    const delta = editorRef.current?.editor?.getContents(); // gets the Quill delta
    const pdfAsBlob = await pdfExporter.generatePdf(delta); // converts to PDF
    saveAs(pdfAsBlob, "pdf-export.pdf"); // downloads from the browser
  };

  const clearDocument = () => {
    editorRef.current?.editor?.deleteText(0, Infinity);
  };

  return (
    <Box style={{ height: "100%" }}>
      <Stack spacing={1} direction="row" justifyContent="flex-end">
        <IconButton
          variant="contained"
          color="secondary"
          className="button"
          onClick={exportAsPDF}
        >
          <Save />
        </IconButton>
        <IconButton
          variant="contained"
          color="secondary"
          className="button"
          onClick={clearDocument}
        >
          <Delete />
        </IconButton>
      </Stack>
      <ReactQuill
        defaultValue={JSON.parse(localStorage.getItem("document") || "[]")}
        style={{
          minHeight: "300px",
          height: "100%",
          maxHeight:
            whiteboardFlag && camFlag
              ? "50vh"
              : !whiteboardFlag && camFlag
              ? "72vh"
              : "74vh",
        }}
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        //   formats={formats}
        ref={editorRef}
      />
    </Box>
  );
}
