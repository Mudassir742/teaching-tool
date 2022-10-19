import { SketchField, Tools } from "react-sketch-whiteboard";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { Box } from "@mui/material";

const WhiteBoard = () => {
  const [tool, setTool] = useState(Tools.Pencil);
  const [parentHeight, setParentHeight] = useState(0);
  const [parentWidth, setParentWidth] = useState(0);

  const parentRef = useRef();

  // useEffect(() => {
  //   if (parentRef) {
  //     console.log(parentRef.current.offsetWidth);
  //     console.log(parentRef.current.offsetHeight);
  //     setParentHeight(parentRef.current.offsetHeight)
  //     setParentWidth(parentRef.current.offsetWidth)

  //   }
  // }, [parentRef.current]);

  useEffect(() => {
    const element = parentRef.current;
    //element.addEventListener('resize', (event) => console.log(event.detail));

    function outputsize() {
      setParentWidth(element.offsetWidth);
      setParentHeight(element.offsetHeight);
    }
    //outputsize();

    new ResizeObserver(outputsize).observe(element);
    // function checkResize(mutations) {
    //     const el = mutations[0].target;
    //     const w = el.clientWidth;
    //     const h = el.clientHeight;

    //     const isChange = mutations
    //         .map((m) => `${m.oldValue}`)
    //         .some((prev) => prev.indexOf(`width: ${w}px`) === -1 || prev.indexOf(`height: ${h}px`) === -1);

    //     if (!isChange) { return; }
    //     const event = new CustomEvent('resize', { detail: { width: w, height: h } });
    //     el.dispatchEvent(event);
    // }
    // const observer = new MutationObserver(checkResize);
    // observer.observe(element, { attributes: true, attributeOldValue: true, attributeFilter: ['style'] });
  }, []);

  //  const dive = useCallback(node => {
  //   if (node !== null) {
  //     setParentHeight(node.getBoundingClientRect().height);
  //     setParentWidth(node.getBoundingClientRect().width);
  //   }
  // }, [parentRef]);

  return (
    <div
    ref={parentRef}
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
      {/* <Box
        ref={parentRef}
        style={{ width: "100%", height: "95%", border: "2px solid purple" }}
      > */}
        <SketchField
          undoSteps="0"
          backgroundColor="red"
          key="user1"
          tool={tool}
          lineColor="black"
          lineWidth={3}
          width={parentWidth - 5}
          height={parentHeight - 45}
        />
      {/* </Box> */}
    </div>
  );
};

export default WhiteBoard;
