import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const Clothing: React.FC<SvgProps> = (props) => (
  <Svg
    fill="#456EFE"
    width="34"
    height="34"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M22,5H19V2a1.01,1.01,0,0,0-1-1H6a1.045,1.045,0,0,0-.958.72A.968.968,0,0,0,5,2V5H2A1,1,0,0,0,1,6V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V6A1,1,0,0,0,22,5ZM7,3.868l3.011,2.008L7,7.382Zm10,0V7.382L13.989,5.876ZM14.7,3,12,4.8,9.3,3ZM21,21H3V7H5V9a1,1,0,0,0,.475.851c.913.568,1.509-.5,6.525-2.733C17.879,10.016,17.577,10,18,10a1,1,0,0,0,1-1V7h2ZM13,10v2a1,1,0,0,1-2,0V10a1,1,0,0,1,2,0Zm0,6v2a1,1,0,0,1-2,0V16a1,1,0,0,1,2,0Z"/>
  </Svg>
);

export default Clothing;
