import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import styles from './StylesPagination';


interface PaginationProps {
  data: Array<any>; 
  x: Animated.SharedValue<number>;
  screenWidth: number;
}

const Pagination: React.FC<PaginationProps> = ({ data, x, screenWidth }) => {
  // eslint-disable-next-line react/no-unstable-nested-components
  const PaginationComp: React.FC<{ i: number }> = ({ i }) => {
    const animatedDotStyle = useAnimatedStyle(() => {
      const widthAnimation = interpolate(
        x.value,
        [(i - 1) * screenWidth, i * screenWidth, (i + 1) * screenWidth],
        [10, 20, 10],
        Extrapolation.CLAMP
      );
      const opacityAnimation = interpolate(
        x.value,
        [(i - 1) * screenWidth, i * screenWidth, (i + 1) * screenWidth],
        [0.5, 1, 0.5],
        Extrapolation.CLAMP
      );
      return {
        width: widthAnimation,
        opacity: opacityAnimation,
      };
    });

    return <Animated.View style={[styles.dots, animatedDotStyle]} />;
  };

  return (
    <View style={styles.paginationContainer}>
      {data.map((_, i) => (
        <PaginationComp i={i} key={i} />
      ))}
    </View>
  );
};

export default Pagination;


