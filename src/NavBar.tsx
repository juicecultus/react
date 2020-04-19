import React, { useState } from 'react';
import { Link } from '@reach/router';
import { css, keyframes } from '@emotion/core';
import colors from './colors';

const Spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const NavBar = () => {
  const [padding, setPadding] = useState(15);

  return (
    <header
      onClick={() => setPadding(padding + 15)}
      css={css`
        background-color: ${colors.secondary};
        padding: ${padding}px;
      `}
    >
      <Link to='/'>Adopt Me!</Link>
      <span
        css={css`
          font-size: 3rem;
          display: inline-block;

          &:hover {
            text-decoration: underline;
            animation: 1s ${Spin} linear infinite;
          }
        `}
        role='img'
        aria-label='logo'
      >
        🐶
      </span>
    </header>
  );
};

export default NavBar;
