import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const Rent: React.FC<SvgProps> = (props) => (
  <Svg
    width="34"
    height="34"
    fill="#456EFE"
    viewBox="0 0 32 32"
    {...props}
  >
    <Path d="M31.63,12.22l-15-12a1,1,0,0,0-1.25,0l-15,12A1,1,0,0,0,1,14H3V31a1,1,0,0,0,1,1H28a1,1,0,0,0,1-1V14h2a1,1,0,0,0,.63-1.78ZM28,12a1,1,0,0,0-1,1V30H5V13a1,1,0,0,0-1-1H3.85L16,2.28,28.15,12Z"/>
    <Path d="M15,12v2H14a3,3,0,0,0,0,6h4a1,1,0,0,1,0,2H14a1,1,0,0,1-1-1H11a3,3,0,0,0,3,3h1v2h2V24h1a3,3,0,0,0,0-6H14a1,1,0,0,1,0-2h4a1,1,0,0,1,1,1h2a3,3,0,0,0-3-3H17V12Z"/>
  </Svg>
);

export default Rent;
