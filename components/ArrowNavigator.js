import React from "react";
import { useRouter } from "next/router";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";

const AVAILABLE_PATHS = ["/", "/mint"];

const ArrowNavigator = () => {
  const { pathname, push } = useRouter();
  const currentIndex = AVAILABLE_PATHS.indexOf(pathname);
  const numOfPaths = AVAILABLE_PATHS.length;
  const handleUpClick = () => {
    if (currentIndex === 0) push(AVAILABLE_PATHS[numOfPaths - 1]);
    else push(AVAILABLE_PATHS[currentIndex - 1]);
  };
  const handleDownClick = () => {
    if (currentIndex === numOfPaths - 1)
      push(AVAILABLE_PATHS[(currentIndex + 1) % numOfPaths]);
    else push(AVAILABLE_PATHS[currentIndex + 1]);
  };
  return (
    <>
      <BiUpArrowAlt
        size="48px"
        style={{ cursor: "pointer" }}
        onClick={handleUpClick}
      />
      <BiDownArrowAlt
        size="48px"
        style={{ cursor: "pointer" }}
        onClick={handleDownClick}
      />
    </>
  );
};

export default ArrowNavigator;
