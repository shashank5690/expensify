import React from 'react';
import Svg, { Path,Rect} from 'react-native-svg';
const TopNavbar: React.FC = () => (
  <Svg width="47" height="47" viewBox="0 0 47 47" fill="none">
    <Rect width="47" height="47" rx="23.5" fill="#A4A9AE" fillOpacity="0.25" />
    <Path 
      d="M27 16L19 24L27 31.5" 
      stroke="#A4A9AE" 
      strokeWidth="1.9" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </Svg>
);

export default TopNavbar;
