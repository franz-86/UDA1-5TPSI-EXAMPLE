import React from "react";

function SampleColor({ color }) {
  return (
    <div
      style={{
        width: 22,
        height: 22,
        backgroundColor: color,
        borderRadius: 20,
        borderStyle: "solid",
        borderColor: "#000",
        borderWidth: 2,
        margin: "0 2px",
      }}
    ></div>
  );
}

export default SampleColor;
