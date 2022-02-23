import * as React from "react";
import Svg, { Path } from "react-native-svg";

const TasksInactiveIcon = () => {
  return (
    <Svg width={22} height={22} fill="none">
      <Path
        d="M19.43 4.947a10.217 10.217 0 0 1 1.765 5.755c0 5.668-4.595 10.264-10.264 10.264S.667 16.37.667 10.702C.667 5.032 5.262.438 10.93.438c3.297 0 6.232 1.554 8.11 3.971m.39.538 1.996-1.997a.328.328 0 0 0-.464-.464L19.04 4.41m.39.538-8.267 8.268a.328.328 0 0 1-.464 0L7.277 9.793a.328.328 0 0 1 .464-.464l3.19 3.19 8.11-8.11m.39.538a10.25 10.25 0 0 0-.39-.538"
        stroke="#000"
        strokeWidth={0.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default TasksInactiveIcon;
