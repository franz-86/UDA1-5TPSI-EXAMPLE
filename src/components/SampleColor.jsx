import React from "react";

function SampleColor({ color }) {
  return (
    <div
      style={{
        width: 26,
        height: 26,
        backgroundColor: color,
        borderRadius: 20,
        borderStyle: "solid",
        borderColor: "#000",
        borderWidth: 2,
        margin: "0 4px",
      }}
    ></div>
  );
}

export default SampleColor;
