import * as React from "react";
import { StyleSheet } from "react-native";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const CalendarIcon = () => {
  return (
    <Svg style={styles.icon} width={22} height={21} fill="none">
      <G clipPath="url(#a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.146 4.375a.438.438 0 0 1-.438-.438V2.625H2.521c-.724 0-1.313.589-1.313 1.313v2.187h19.25V3.937c0-.723-.588-1.312-1.312-1.312h-2.188v1.313a.438.438 0 0 1-.875 0V2.625h-10.5v1.313a.438.438 0 0 1-.437.437ZM16.083 1.75h-10.5V.437a.438.438 0 0 0-.875 0V1.75H2.521A2.19 2.19 0 0 0 .333 3.938v14.874A2.19 2.19 0 0 0 2.521 21h16.625a2.19 2.19 0 0 0 2.187-2.188V3.938a2.19 2.19 0 0 0-2.187-2.187h-2.188V.437a.438.438 0 0 0-.875 0V1.75ZM1.208 7h19.25v11.813c0 .723-.588 1.312-1.312 1.312H2.52a1.314 1.314 0 0 1-1.313-1.313V7Z"
          fill="#4C5257"
        />
        <Path
          d="M7.07 13.563a3.544 3.544 0 0 1 5.12-3.176.394.394 0 1 0 .35-.705 4.331 4.331 0 1 0 2.38 3.4.394.394 0 0 0-.783.086 3.544 3.544 0 1 1-7.066.394Z"
          fill="#22282F"
        />
        <Path
          d="M14.83 10.778a.394.394 0 1 0-.556-.556l-3.66 3.659-1.034-1.034a.394.394 0 1 0-.556.556l1.312 1.313a.393.393 0 0 0 .557 0l3.938-3.938Z"
          fill="#22282F"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" transform="translate(.333)" d="M0 0h21v21H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

const styles = StyleSheet.create({
  icon: {
    transform: [{ scale: 0.8 }],
  },
});

export default CalendarIcon;
