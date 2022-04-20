import React from "react";
import Square from "../components/Square";

const SectionNumber = ({ number, text }) => {
  return (
    <div className="section-number">
      <Square innerText={number} imageSize={128} fontSize={64} />
      <h1>{text}</h1>
      <style jsx>{`
        .section-number {
            display: flex;
            align-items: center
        }

        h1 {
          font-size: 84;
          font-weight: 700;
          color: #333;
          margin-left: 32px;
        }
      `}</style>
    </div>
  );
};

export default SectionNumber;
