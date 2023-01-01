import React, { useRef } from "react";
import DrawingBoard from "react-drawing-board";

import useParentDimension from "../hooks/useParentDimension";

const WhiteBoard = () => {
  const parentRef = useRef();
  const [parentHeight, parentWidth] = useParentDimension(parentRef);

  return (
    <div
      ref={parentRef}
      style={{
        border: "1px solid #9C27B0",
        height: "100%",
        maxHeight: "100%",
      }}
    >
      <DrawingBoard
        userId="user1" // identify for different players.
        onChange={(newOperation, afterOperation) => {
          console.log(`TODO: send ${newOperation}`);
        }}
        style={{
          width: `${parentWidth - 5}px`,
          height: `${parentHeight - 45}px`,
          minHeight: "90vh",
        }}
      />
    </div>
  );
};

export default WhiteBoard;
