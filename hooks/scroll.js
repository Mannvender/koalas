/**
 * useScroll React custom hook
 * Usage:
 *    const { scrollX, scrollY, scrollDirection } = useScroll();
 */

import { useState, useEffect } from "react";

export function useScroll() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bodyOffset, setBodyOffset] = useState();
  const [scrollDirection, setScrollDirection] = useState();

  const listener = (e) => {
    setBodyOffset(document?.body.getBoundingClientRect());
    setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
    setLastScrollTop(-bodyOffset.top);
  };

  useEffect(() => {
    const initialBodyOffset = document.body.getBoundingClientRect();
    setBodyOffset(initialBodyOffset);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return {
    scrollDirection,
  };
}

export default useScroll;
