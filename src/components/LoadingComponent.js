import React from "react";
import { RiLoader2Fill } from "react-icons/ri";

const LoadingComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <RiLoader2Fill />
    </div>
  );
};

export default LoadingComponent;
