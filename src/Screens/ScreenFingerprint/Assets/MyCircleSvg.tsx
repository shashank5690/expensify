import React from 'react';
import { SvgProps } from 'react-native-svg';
import Svg, { Circle } from 'react-native-svg';

const MyCircleSvg: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="206" height="206" viewBox="0 0 206 206" fill="none" {...props}>
      <Circle cx="171" cy="35" r="171" fill="white" fillOpacity="0.03" />
    </Svg>
  );
};

export default MyCircleSvg;
