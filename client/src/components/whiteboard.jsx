import { SketchField, Tools } from "react-sketch-whiteboard";
import React, { useState,useRef,useEffect } from "react";
import { Box } from "@mui/material";

const WhiteBoard = () => {
  const [tool, setTool] = useState(Tools.Pencil);

  const dref = useRef()

  useEffect(() => {
    console.log(dref)

    
  }, []);

  return (
    <div
      style={{
        border: "1px solid yellow",
        height: "100%",
        maxHeight: "100%",
      }}
    >
      <div className="drawingToolbarSection">
        <button
          onClick={() => {
            setTool(Tools.Pencil);
          }}
        >
          Pencil
        </button>
        <button
          onClick={() => {
            setTool(Tools.Rectangle);
          }}
        >
          Rectangle
        </button>
        <button
          onClick={() => {
            setTool(Tools.Circle);
          }}
        >
          Circle
        </button>
      </div>
      <Box>
        <SketchField
          undoSteps="0"
          backgroundColor="red"
          key="user1"
          tool={tool}
          lineColor="black"
          lineWidth={3}
          style={{ border:'2px solid blue'}}
          width="100px"
          height="100px"
          ref={dref}
        />
      </Box>
    </div>
  );
};

export default WhiteBoard;
