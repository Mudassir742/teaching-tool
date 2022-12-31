// import { SketchField, Tools } from "react-sketch-whiteboard";
import React, { useState, useRef } from "react";
import DrawingBoard from "react-drawing-board";

import useParentDimension from "../hooks/useParentDimension";

const WhiteBoard = () => {
  const parentRef = useRef();
  //   const [tool, setTool] = useState(Tools.Pencil);
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
        //operations={operations}
        onChange={(newOperation, afterOperation) => {
          console.log(`TODO: send ${newOperation}`);
        }}
        style={{
          width: `${parentWidth - 5}px`,
          height: `${parentHeight - 45}px`,
          minHeight:"40vh"
        }}
      />

      {/* //       <div className="drawingToolbarSection">
//         <button
//           onClick={() => {
//             setTool(Tools.Pencil);
//           }}
//         >
//           Pencil
//         </button>
//         <button
//           onClick={() => {
//             setTool(Tools.Rectangle);
//           }}
//         >
//           Rectangle
//         </button>
//         <button
//           onClick={() => {
//             setTool(Tools.Circle);
//           }}
//         >
//           Circle
//         </button>
//       </div>

//       <SketchField
//         undoSteps="0"
//         backgroundColor="#f0ffd4"
//         key="user1"
//         tool={tool}
//         lineColor="black"
//         lineWidth={3}
//         width={parentWidth - 5}
//         height={parentHeight - 45}
//       /> */}
    </div>
  );
};

export default WhiteBoard;
