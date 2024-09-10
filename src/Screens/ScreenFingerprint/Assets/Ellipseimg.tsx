import React from 'react';
import { SvgProps } from 'react-native-svg';
import Svg, { G, Circle, Defs, Filter, FeFlood, FeBlend, FeColorMatrix, FeMorphology, FeOffset, FeGaussianBlur, FeComposite } from 'react-native-svg';

const MySvgComponent: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="428" height="349" viewBox="0 0 428 349" fill="none" {...props}>
      <G filter="url(#filter0_i_404_4667)">
        <Circle cx="104" cy="344" r="344" fill="#1C2B39" fillOpacity="0.1" />
      </G>
      <Defs>
      </Defs>
    </Svg>
  );
};

export default MySvgComponent;
