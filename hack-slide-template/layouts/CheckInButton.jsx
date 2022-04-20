import React from "react";

const ACM_PORTAL = "https://members.acmucsd.com/checkin?code=";
const CheckInButton = ({ code = 'graphql' }) => {
  const link = ACM_PORTAL + code;
  return (
    <div className='CheckInButton'>
      <h2>Check in</h2>
      <h3>{code}</h3>
      <a className='button' href={link}>
        Let's go
      </a>
      <style jsx>{`
        .CheckInButton {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 48px;
          border-radius: 20px;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
            0 3px 10px 0 rgba(0, 0, 0, 0.19);
        }
        h3 {
          width: 512px;
          text-align: center;
          font-weight: 400;
          border-radius: 1000px;
          border: #edecea;
          border-width: 2px;
          border-style: solid;
        }
        .button {
          text-decoration: none;
          background-color: #f9a857;
          color: white;
          padding: 5px 50px;
          border-radius: 1000px;
          border: #edecea;
          border-width: 2px;
          border-style: solid;
        }
      `}</style>
    </div>
  );
};

export default CheckInButton;