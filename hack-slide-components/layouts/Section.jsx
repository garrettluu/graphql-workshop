import React from "react";

const Section = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
      <style jsx>{`
        h1 {
          font-size: 84;
          font-weight: 700;
          color: #f9a857;
        }

        h2 {
          font-size: 48;
          font-weight: 400;
        }
      `}</style>
    </div>
  );
};

export default Section;
