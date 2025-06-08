"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const Layout = ({ children }) => {
  const pathname = usePathname();
  const containerRef = useRef();

  useEffect(() => {
    const el = containerRef.current;

    // Enter animation
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );

    return () => {
      // Optional: leave animation before route change
      gsap.fromTo(
        el,
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
      );
    };
  }, [pathname]);

  return <div ref={containerRef}>{children}</div>;
};

export default Layout;
