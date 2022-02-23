import * as React from "react";
import Svg, { Path } from "react-native-svg";

const AddIcon = () => {
  return (
    <Svg width={28} height={29} fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 2.833A4.671 4.671 0 0 1 25.667 7.5v14A4.671 4.671 0 0 1 21 26.167H7A4.671 4.671 0 0 1 2.333 21.5v-14A4.671 4.671 0 0 1 7 2.833h14ZM21 .5H7a7 7 0 0 0-7 7v14a7 7 0 0 0 7 7h14a7 7 0 0 0 7-7v-14a7 7 0 0 0-7-7Zm-7 21a1.166 1.166 0 0 1-1.167-1.167v-4.666H8.167a1.166 1.166 0 1 1 0-2.334h4.666V8.667a1.167 1.167 0 0 1 2.334 0v4.666h4.666a1.167 1.167 0 0 1 0 2.334h-4.666v4.666c0 .646-.523 1.167-1.167 1.167Z"
        fill="#fff"
      />
    </Svg>
  );
};

export default AddIcon;
