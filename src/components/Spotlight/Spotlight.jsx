import { useEffect, useState } from "react";

function Spotlight() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-40
        transition-opacity
        duration-300
      "
      style={{
        background: `
          radial-gradient(
            500px circle at ${position.x}px ${position.y}px,
            rgba(139, 92, 246, 0.10),
            transparent 65%
          )
        `,
      }}
    />
  );
}

export default Spotlight;