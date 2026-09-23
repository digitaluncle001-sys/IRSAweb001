"use client";

import { useEffect, useRef } from "react";

// Subtle scroll-reveal wrapper. Respects prefers-reduced-motion.
// Forwards className, style and any other props to the rendered element.
export default function Reveal({ children, className = "", as: Tag = "div", ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={"reveal " + className} {...rest}>
      {children}
    </Tag>
  );
}
