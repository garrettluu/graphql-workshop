import React from 'react';
import theme from '../theme';

const CheckIn = ({code, style = 'default'}) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: 'column',
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            color: theme.colors.primary,
            fontSize: 84,
          }}
        >
          {code}
        </h1>
        <h2 style={{
            fontSize: 48,
            fontWeight: theme.fontWeights.body,
        }}>
            Check-in
        </h2>
        <h2 style={{
            fontSize: 48,
            fontWeight: theme.fontWeights.body,
        }}>
            acmucsd.com
        </h2>
      </div>
    );
};

export default CheckIn;