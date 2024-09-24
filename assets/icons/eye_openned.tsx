import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const EyeOpennedIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none">
    <Path
      stroke="#ffffff"
      strokeWidth={2}
      d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
    />
    <Path
      stroke="#ffffff"
      strokeWidth={2}
      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </Svg>
);
export default EyeOpennedIcon;
