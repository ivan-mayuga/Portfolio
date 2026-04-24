import { useEffect, useRef, useState } from "react";

function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  once = true,
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  style,
  ...props
}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!elementRef.current) {
      return undefined;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return undefined;
    }

    const currentElement = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(currentElement);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
    };
  }, [once, rootMargin, threshold]);

  const revealClassName = `${className} reveal${isVisible ? " is-visible" : ""}`.trim();

  return (
    <Tag
      ref={elementRef}
      className={revealClassName}
      style={{ "--reveal-delay": `${delay}ms`, ...(style ?? {}) }}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
