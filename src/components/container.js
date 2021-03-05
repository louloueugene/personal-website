import React from "react";

export default ({ children }) => (
  <div
    style={{
      maxWidth: 1180,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    {children}
  </div>
);
