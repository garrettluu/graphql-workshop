import React from 'react';
import titlebg from '../images/image1.png';

const Title = ({children}) => {
  return <div style={{
    backgroundImage: `url(${titlebg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'right bottom',
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: '10%',
    color: 'black',
    zIndex: 10
  }}
  >
    {children}
  </div>;
}

export default Title;