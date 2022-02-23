import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const FilterIcon = () => {
  return (
    <Svg width={20} height={21} fill="none">
      <G clipPath="url(#a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 19.82a.714.714 0 0 0 .714-.714V5.876a2.735 2.735 0 1 0-1.428 0v13.23a.714.714 0 0 0 .714.714ZM8.693 3.255a1.307 1.307 0 1 1 2.614-.014 1.307 1.307 0 0 1-2.614.014ZM17.27 19.82a.714.714 0 0 0 .714-.714v-2.22a2.72 2.72 0 0 0 0-5.256V1.233a.714.714 0 0 0-1.428 0v10.403a2.72 2.72 0 0 0 0 5.256v2.22a.714.714 0 0 0 .714.707Zm-1.307-5.563a1.307 1.307 0 1 1 2.614 0 1.307 1.307 0 0 1-2.614 0Zm-13.947 4.85v-6.31a2.72 2.72 0 0 1 0-5.255V1.234a.714.714 0 0 1 1.428 0v6.308a2.72 2.72 0 0 1 0 5.256v6.308a.714.714 0 1 1-1.428 0ZM3.458 9.08a1.307 1.307 0 1 0-1.441 2.18 1.307 1.307 0 0 0 1.441-2.18Z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" transform="translate(0 .5)" d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default FilterIcon;
