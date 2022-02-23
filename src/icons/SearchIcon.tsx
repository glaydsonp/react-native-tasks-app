import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const SearchIcon = () => {
  return (
    <Svg width={19} height={19} fill="none">
      <G clipPath="url(#a)">
        <Path
          d="m18.884 17.765-5.52-5.52a7.482 7.482 0 0 0 1.678-4.724C15.042 3.374 11.668 0 7.52 0S0 3.374 0 7.52c0 4.148 3.374 7.522 7.52 7.522 1.79 0 3.433-.63 4.725-1.677l5.52 5.52a.396.396 0 0 0 .56 0l.56-.56a.396.396 0 0 0-.001-.56ZM7.521 13.458a5.944 5.944 0 0 1-5.938-5.937 5.944 5.944 0 0 1 5.938-5.938 5.944 5.944 0 0 1 5.937 5.938 5.944 5.944 0 0 1-5.937 5.937Z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h19v19H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default SearchIcon;
