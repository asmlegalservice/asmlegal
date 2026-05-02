// import { useEffect, useRef, useState } from "react";
// import "./Cursor.css";

// const CustomCursor = () => {
//   const dotRef = useRef(null);
//   const ringRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Check if device is phone/tablet only (not laptops)
//     const checkMobile = () => {
//       const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
//       const isMobileScreen = window.matchMedia('(max-width: 768px)').matches;
//       const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
//       // Only disable on small touch devices (phones/tablets), not laptops
//       setIsMobile((isTouchDevice && isMobileScreen) || isCoarsePointer);
//     };

//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   useEffect(() => {
//     let mouseX = 0;
//     let mouseY = 0;
//     let ringX = 0;
//     let ringY = 0;
//     let animationId = null;

//     const moveMouse = (e) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;

//       // dot follows instantly
//       if (dotRef.current) {
//         dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
//       }
//     };

//     const animate = () => {
//       // smooth follow (lag effect) - reduced lag for better performance
//       ringX += (mouseX - ringX) * 0.25;
//       ringY += (mouseY - ringY) * 0.25;

//       if (ringRef.current) {
//         ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
//       }

//       animationId = requestAnimationFrame(animate);
//     };

//     window.addEventListener("mousemove", moveMouse);
//     animationId = requestAnimationFrame(animate);

//     return () => {
//       window.removeEventListener("mousemove", moveMouse);
//       if (animationId) {
//         cancelAnimationFrame(animationId);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const handleHover = () => {
//       ringRef.current.classList.add("cursor-hover");
//     };

//     const removeHover = () => {
//       ringRef.current.classList.remove("cursor-hover");
//     };

//     const clickable = document.querySelectorAll("a, button, .practice-card");

//     const eventListeners = clickable.forEach((el) => {
//       el.addEventListener("mouseenter", handleHover);
//       el.addEventListener("mouseleave", removeHover);
//     });

//     return () => {
//       clickable.forEach((el) => {
//         el.removeEventListener("mouseenter", handleHover);
//         el.removeEventListener("mouseleave", removeHover);
//       });
//     };
//   }, []);

//   useEffect(() => {
//     const click = () => {
//       ringRef.current.classList.add("cursor-click");
//       setTimeout(() => {
//         ringRef.current.classList.remove("cursor-click");
//       }, 150);
//     };

//     window.addEventListener("mousedown", click);
//     return () => window.removeEventListener("mousedown", click);
//   }, []);

//   // Don't render custom cursor on mobile/touch devices
//   if (isMobile) return null;

//   return (
//     <>
//       <div ref={dotRef} className="cursor-dot"></div>
//       <div ref={ringRef} className="cursor-ring"></div>
//     </>
//   );
// };

// export default CustomCursor;