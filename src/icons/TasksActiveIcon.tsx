import * as React from "react"
import Svg, { Path } from "react-native-svg"

const TasksActiveIcon = () => {
  return (
    <Svg width={22} height={21} fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.93 20.966c5.67 0 10.265-4.596 10.265-10.264 0-2.133-.65-4.114-1.764-5.755l1.996-1.997a.328.328 0 0 0-.464-.464L19.04 4.41A10.247 10.247 0 0 0 10.93.438C5.263.438.668 5.032.668 10.701c0 5.668 4.595 10.264 10.264 10.264Zm8.11-16.557-8.11 8.11-3.189-3.19a.328.328 0 1 0-.464.464l3.422 3.422a.328.328 0 0 0 .464 0l8.268-8.268a10.25 10.25 0 0 0-.39-.538Z"
        fill="#4355B6"
      />
    </Svg>
  );
};

export default TasksActiveIcon;
