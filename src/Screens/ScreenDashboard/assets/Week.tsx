import React from 'react';
import Svg, { G, Path, Defs, Rect, Filter, FeFlood, FeColorMatrix, FeMorphology, FeOffset, FeGaussianBlur, FeComposite, FeBlend, SvgProps } from 'react-native-svg';

const Week: React.FC<SvgProps> = (props) => (
  <Svg
    width="153"
    height="153"
    viewBox="0 0 135 122"
    fill="none"
    {...props}
  >
    <G opacity="0.15" filter="url(#filter0_d_404_1901)">
      <Rect x="43.6602" y="44.2043" width="50" height="50" rx="5" fill="#4B78FE"/>
    </G>
    <Path d="M61.0556 63.5423V76.6752C61.0556 79.7915 62.6667 80.5229 64.6382 78.3076C64.8264 78.07 65.0691 77.8812 65.3457 77.7572C65.6223 77.6333 65.9247 77.5778 66.2273 77.5954C66.5299 77.6131 66.8238 77.7034 67.0841 77.8588C67.3444 78.0141 67.5635 78.2299 67.7227 78.4878L68.8463 80.0671C69.0113 80.3509 69.248 80.5864 69.5326 80.7501C69.8172 80.9138 70.1397 81 70.468 81C70.7963 81 71.1189 80.9138 71.4034 80.7501C71.688 80.5864 71.9247 80.3509 72.0897 80.0671L73.1497 78.4984C73.3102 78.2404 73.5303 78.0247 73.7914 77.8695C74.0526 77.7142 74.3472 77.624 74.6506 77.6063C74.9539 77.5887 75.257 77.6441 75.5344 77.768C75.8119 77.8919 76.0555 78.0806 76.2448 78.3182C78.2163 80.5335 79.8275 79.8021 79.8275 76.6859V63.5423C79.8275 58.8467 78.7675 57.6702 74.6019 57.6702H58.3527" stroke="#456EFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M58.8185 57.6702C57.0272 57.6702 56.5714 58.8467 56.5714 63.5423V66.7222C56.5107 67.4119 56.718 68.0985 57.1503 68.6394C57.5825 69.1803 58.2066 69.5338 58.8927 69.6265H61.0127V63.5317C61.0551 58.8467 60.6099 57.6702 58.8185 57.6702Z" stroke="#456EFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M70.351 64.7295L68.3477 68.6619H72.5875L70.3298 72.5944" stroke="#456EFE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <Defs>
    </Defs>
  </Svg>
);

export default Week;
