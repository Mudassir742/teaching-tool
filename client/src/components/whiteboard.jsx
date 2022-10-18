import { SketchField, Tools} from "react-sketch-whiteboard";
import React, { useState } from "react";

const WhiteBoard = () => {
  const [tool, setTool] = useState(Tools.Pencil);

  return (
    <div
      style={{
        border: "1px solid yellow",
      }}
    >
      <div className="toolbars">
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

      <SketchField
        undoSteps="0"
        backgroundColor="#f0ffd4"
        tool={tool}
        lineColor="black"
        lineWidth={3}
        //style={{ maxHeight: "calc(100%-40px)", height: "100%" }}
        height="200%"
      />
    </div>
  );
};

export default WhiteBoard;
