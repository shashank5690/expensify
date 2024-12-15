import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface SVGProps {
  width?: number;
  height?: number;
  fill?: string;
}

const BottomEdge: React.FC<SVGProps> = ({ width = 311, height = 45, fill = "#23303B", ...props }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 311 45"
    fill="none"
    {...props} 
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M308.5 -1.09278e-07C309.881 -4.89256e-08 311 1.11929 311 2.5L311 22.5C311 34.9264 300.926 45 288.5 45L268.5 45C267.119 45 266 43.8807 266 42.5C266 41.1193 267.119 40 268.5 40L288.5 40C298.165 40 306 32.165 306 22.5L306 2.5C306 1.11929 307.119 -1.69631e-07 308.5 -1.09278e-07Z"
      fill={fill}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 -1.09278e-07C1.11929 -4.89256e-08 4.89256e-08 1.11929 1.09278e-07 2.5L9.83506e-07 22.5C1.52668e-06 34.9264 10.0736 45 22.5 45L42.5 45C43.8807 45 45 43.8807 45 42.5C45 41.1193 43.8807 40 42.5 40L22.5 40C12.835 40 5 32.165 5 22.5L5 2.5C5 1.11929 3.88071 -1.69631e-07 2.5 -1.09278e-07Z"
      fill={fill}
    />
  </Svg>
);

export default BottomEdge;
