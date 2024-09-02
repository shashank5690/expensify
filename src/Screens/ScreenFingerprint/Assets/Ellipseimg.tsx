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
        <Filter
          id="filter0_i_404_4667"
          x="-240"
          y="0"
          width="707"
          height="704"
          filterUnits="userSpaceOnUse"
        >
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <FeColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <FeMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_innerShadow_404_4667" />
          <FeOffset dx="19" dy="16" />
          <FeGaussianBlur stdDeviation="51.5" />
          <FeComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <FeColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.03 0" />
          <FeBlend mode="normal" in2="shape" result="effect1_innerShadow_404_4667" />
        </Filter>
      </Defs>
    </Svg>
  );
};

export default MySvgComponent;
