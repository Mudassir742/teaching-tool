import { QuillEditor } from "./Quill";

const NoteTaker = ({ whiteboardFlag, camFlag }) => {
  return <QuillEditor whiteboardFlag={whiteboardFlag} camFlag={camFlag} />;
};

export default NoteTaker;
