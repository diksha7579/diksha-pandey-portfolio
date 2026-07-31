import { useEffect, useState } from "react";

function Cursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        className="
          pointer-events-none
          fixed
          z-[9999]
          h-2
          w-2
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white
        "
        style={{
          left: position.x,
          top: position.y,
        }}
      />

      <div
        className="
          pointer-events-none
          fixed
          z-[9998]
          h-9
          w-9
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-violet-400/60
          bg-violet-500/5
          shadow-[0_0_25px_rgba(139,92,246,0.35)]
          transition-transform
          duration-100
        "
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </>
  );
}

export default Cursor;