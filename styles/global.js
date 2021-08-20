import React from 'react'
import Theme from './theme'

export default () => {
  return (
    <style>
      {`
        body {
            color: #444;
            margin: 0;
            font-size: 1rem;
            color: ${Theme.colors.light1};
            background-color: ${Theme.colors.dark1};
            font-family: ${Theme.fonts.body};
            scroll-behavior: smooth;
        }
        * {
            box-sizing: border-box;
        }
        h1, h2, h3, h4, h5, h6 {
            font-family: ${Theme.fonts.heading} !important;
        }
        a{
          text-decoration: none;
          color: ${Theme.colors.light1};
          margin-bottom: 32px;
        }
        .gray-filter {
          filter: grayscale(1);
        }
    `}
    </style>
  )
}
