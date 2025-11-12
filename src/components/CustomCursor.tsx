import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        !!target.closest("button") ||
        !!target.closest("a") ||
        target.classList.contains("cursor-pointer");
      
      setIsPointer(isClickable);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`custom-cursor fixed w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${isPointer ? "scale-150" : "scale-100"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
      
      {/* Cursor ring */}
      <div
        className={`custom-cursor-ring fixed w-8 h-8 border-2 border-primary/50 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${isPointer ? "scale-150 border-accent" : "scale-100"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />

      <style>{`
        * {
          cursor: none !important;
        }
        
        @media (hover: none) and (pointer: coarse) {
          .custom-cursor,
          .custom-cursor-ring {
            display: none !important;
          }
          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
