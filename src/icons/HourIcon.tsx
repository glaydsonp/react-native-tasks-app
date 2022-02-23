import * as React from "react";
import Svg, { Path } from "react-native-svg";

const HourIcon = () => {
  return (
    <Svg width={16} height={16} fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8c0 4.41-3.59 8-8 8s-8-3.59-8-8 3.59-8 8-8 8 3.59 8 8Zm-1.067 0A6.94 6.94 0 0 0 8 1.067 6.94 6.94 0 0 0 1.067 8 6.94 6.94 0 0 0 8 14.933 6.94 6.94 0 0 0 14.933 8Zm-4.266 2.667a.525.525 0 0 1-.334-.118L7.667 8.416a.535.535 0 0 1-.2-.416V3.733c0-.293.24-.533.533-.533.293 0 .533.24.533.533v4.011L11 9.717a.533.533 0 0 1-.333.95Z"
        fill="#0C0D0D"
      />
    </Svg>
  );
};

export default HourIcon;
