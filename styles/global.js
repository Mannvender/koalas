import React from "react";
import Theme from "./theme";

export default () => (
  <style>
    {`
        body {
            color: #444;
            margin: 0;
            font-size: 14px;
            color: ${Theme.colors.light1};
            background-color: ${Theme.colors.dark1};
            font-family: ${Theme.fonts.sans}
        }
        * {
            box-sizing: border-box;
        }
    `}
  </style>
);
