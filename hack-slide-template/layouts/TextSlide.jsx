import React from 'react';

const TextSlide = ({children}) => {
    return (
      <div className="text-slide">
          {children}
        <style jsx>{`
          .text-slide {
            padding-left: 10%;
            padding-right: 10%;
          }
          
          p {
            font-size: 84px;
            font-weight: 700;
          }

          strong {
            color: #F9A857;
          }
        `}</style>
      </div>
    );
}
export default TextSlide;