import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const EyeClosedIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
  >
    <Path
      stroke="#ffffff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </Svg>
);
export default EyeClosedIcon;
