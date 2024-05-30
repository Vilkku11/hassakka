import { useRef, useEffect } from "react";
import "./Curve.css";
const Curve = () => {
  const path = useRef(null);
  let progress = 0;
  let time = Math.PI / 2;
  let reqId = null;
  let x = 0.5;

  useEffect(() => {
    setPath(progress);
  }, []);

  const setPath = (progress) => {
    const { innerWidth } = window;
    path.current.setAttributeNS(
      "",
      "d",
      `M0 50 Q${innerWidth * x} ${50 + progress}, ${innerWidth} 50`
    );
  };

  const handleMouseEnter = () => {
    if (reqId) {
      window.cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  const handleMouse = (event) => {
    const { movementY, clientX } = event;
    const { left, width } = path.current.getBoundingClientRect();
    x = (clientX - left) / width;
    progress += movementY;
    setPath(progress);
  };

  const handleMouseLeave = () => {
    animateOut();
  };

  const lerp = (x, y, a) => {
    return x * (1 - a) + y * a;
  };

  const animateOut = () => {
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

  const resetAnimation = () => {
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
