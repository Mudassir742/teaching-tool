import { useState, useEffect } from "react";

const useParentDimension = (parentRef) => {
  const [parentHeight, setParentHeight] = useState(0);
  const [parentWidth, setParentWidth] = useState(0);

  useEffect(() => {
    if (!parentRef) {
      return;
    }

    const element = parentRef.current;

    function outputsize() {
      setParentWidth(element.offsetWidth);
      setParentHeight(element.offsetHeight);
    }

    new ResizeObserver(outputsize).observe(element);
  }, [parentRef]);

  return [parentHeight, parentWidth];
};

export default useParentDimension;
