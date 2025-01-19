import { useRef, useEffect } from "react";

import "./Curve.css";

const Curve = () => {
  const path = useRef<null | SVGPathElement>(null);
  let progress: number = 0;
  let time: number = Math.PI / 2;
  let reqId: number | null = null;
  let x: number = 0.5;

  useEffect(() => {
    setPath(progress);
  }, []);

  const setPath = (progress: number): void => {
    if (path.current) {
      const { innerWidth } = window;
      path.current.setAttributeNS(
        "",
        "d",
        `M0 50 Q${innerWidth * x} ${50 + progress}, ${innerWidth} 50`
      );
    }
  };

  const handleMouseEnter = (): void => {
    if (reqId) {
      window.cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  const handleMouse = (event: any): void => {
    if (path.current) {
      const { movementY, clientX } = event;
      const { left, width } = path.current.getBoundingClientRect();
      x = (clientX - left) / width;
      progress += movementY;
      setPath(progress);
    }
  };

  const handleMouseLeave = (): void => {
    animateOut();
  };

  const lerp = (x: number, y: number, a: number): number => {
    return x * (1 - a) + y * a;
  };

  const animateOut = (): void => {
    const newProgress = progress * Math.sin(time);
    time += 0.2;
    setPath(newProgress);
    progress = lerp(progress, 0, 0.025);

    if (Math.abs(progress) > 0.75) {
      reqId = window.requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = (): void => {
    time = Math.PI / 2;
    progress = 0;
  };

  return (
    <div className="line">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        className="box"
      ></div>
      <svg>
        <path ref={path}></path>
      </svg>
    </div>
  );
};
export default Curve;
