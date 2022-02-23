import * as React from "react";
import Svg, { Path } from "react-native-svg";

const CommentsIcon = () => {
  return (
    <Svg width={16} height={15} fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.281.333h9.438A3.285 3.285 0 0 1 16 3.615v6.02a3.285 3.285 0 0 1-3.281 3.282H6.023l-1.454 1.454a.469.469 0 0 1-.663 0l-1.585-1.585A3.228 3.228 0 0 1 0 9.682V3.615A3.285 3.285 0 0 1 3.281.333ZM12.72 11.98a2.346 2.346 0 0 0 2.344-2.344V3.615a2.346 2.346 0 0 0-2.344-2.344H3.28A2.346 2.346 0 0 0 .937 3.615v6.067c0 1.058.716 1.975 1.74 2.23.083.02.159.063.22.123l1.34 1.341 1.26-1.26a.469.469 0 0 1 .332-.136h6.89ZM4.024 4.16h7.952a.469.469 0 0 1 0 .938H4.024a.469.469 0 1 1 0-.938Zm6.952 4H4.024a.469.469 0 0 0 0 .938h6.952a.469.469 0 1 0 0-.938Zm-6.952-2.01h5.952a.469.469 0 1 1 0 .938H4.024a.469.469 0 1 1 0-.937Z"
        fill="#363B3F"
      />
    </Svg>
  );
};

export default CommentsIcon;
