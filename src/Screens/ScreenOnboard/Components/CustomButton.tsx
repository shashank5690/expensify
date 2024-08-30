import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, ImageSourcePropType } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Define the props interface for CustomButton
interface CustomButtonProps {
  flatListRef: React.RefObject<Animated.FlatList<any>>;
  flatListIndex: Animated.SharedValue<number>;
  dataLength: number;
}

const CustomButton: React.FC<CustomButtonProps> = ({ flatListRef, flatListIndex, dataLength }) => {
  // Define the navigation prop
  // const navigation = useNavigation<NavigationProp<any>>();

  const buttonAnimationStyle = useAnimatedStyle(() => {
    return {
      width:
        flatListIndex.value === dataLength - 1
          ? withSpring(100)
          : withSpring(60),
      height: 60,
    };
  });

  const arrowAnimationStyle = useAnimatedStyle(() => {
    return {
      width: 30,
      height: 30,
      opacity:
        flatListIndex.value === dataLength - 1 ? withTiming(0) : withTiming(1),
      transform: [
        {
          translateX:
            flatListIndex.value === dataLength - 1
              ? withTiming(100)
              : withTiming(0),
        },
      ],
    };
  });

  const textAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity:
        flatListIndex.value === dataLength - 1 ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX:
            flatListIndex.value === dataLength - 1
              ? withTiming(0)
              : withTiming(-100),
        },
      ],
    };
  });

  return (

    <TouchableWithoutFeedback
    onPress={() => {
      // navigation.navigate('Home');
    }}>
    <Animated.View style={[styles.container, buttonAnimationStyle]}>
      <Animated.Text style={[styles.textButton, textAnimationStyle]}>
        SKIP
      </Animated.Text>
      <Animated.Image
        source={require('../assets/ArrowIcon.png')}
        style={[styles.arrow, arrowAnimationStyle]}
      />
    </Animated.View>
  </TouchableWithoutFeedback>

  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4F5962',
    padding:5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  arrow: {
    position: 'absolute',
  },
  textButton: {
    color: '#C8CBCE',
    fontSize: 18,
    position: 'absolute',
    fontWeight: '500',
  },
});
