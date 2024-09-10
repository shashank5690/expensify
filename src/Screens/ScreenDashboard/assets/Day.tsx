import React from 'react';
import Svg, { Rect, Path, SvgProps } from 'react-native-svg';

const Day: React.FC<SvgProps> = (props) => (
  <Svg
    width="75"
    height="65"
    viewBox="0 0 42 53"
    fill="none"
    {...props}
  >
    <Rect x="-0.000488281" width="50" height="50" rx="5" fill="#A4A9AE" fillOpacity="0.15"/>
    <Path d="M16.6312 23.6768V33.1839" stroke="#8E949A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M21.9244 33.1525V23.6768" stroke="#8E949A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M27.2177 23.6768V33.1525" stroke="#8E949A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M32.5006 33.1839V23.6768" stroke="#8E949A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M34.4921 19.7984L27.5321 14.9348C26.6547 14.3261 25.6124 14 24.5447 14C23.4769 14 22.4346 14.3261 21.5573 14.9348L14.5763 19.7984C14.3933 19.9361 14.2456 20.1153 14.1454 20.3212C14.0452 20.5271 13.9953 20.7539 13.9998 20.9829V22.2197C13.9984 22.4106 14.0348 22.5998 14.1069 22.7765C14.179 22.9532 14.2853 23.1139 14.4197 23.2494C14.5542 23.3848 14.7141 23.4923 14.8903 23.5656C15.0665 23.639 15.2555 23.6768 15.4463 23.6767H33.6955C33.8863 23.6768 34.0753 23.639 34.2515 23.5656C34.4276 23.4923 34.5876 23.3848 34.722 23.2494C34.8565 23.1139 34.9628 22.9532 35.0349 22.7765C35.107 22.5998 35.1434 22.4106 35.142 22.2197V20.9829C35.1382 20.7475 35.0771 20.5165 34.9638 20.3101C34.8506 20.1037 34.6886 19.928 34.4921 19.7984Z" stroke="#8E949A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M15.9292 37.0517H33.214C35.1427 37.0517 35.1427 36.0873 35.1427 35.123C35.1427 33.1838 34.1783 33.1838 33.214 33.1838H15.9292C14.9648 33.1838 14.0005 33.1838 14.0005 35.123C14.0005 37.0517 14.9648 37.0517 15.9292 37.0517Z" stroke="#8E949A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

export default Day;
