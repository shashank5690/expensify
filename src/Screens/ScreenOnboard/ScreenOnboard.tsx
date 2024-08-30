import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions, SafeAreaView, Image, ViewabilityConfig, ViewToken, ImageSourcePropType, StatusBar } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedRef,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import data from './data/data'; 
import Pagination from './Components/Pagination/Pagination'; 
import CustomButton from './Components/CustomButton/CustomButton';
import styles from './StylesOnboars';


interface DataItem {
  id: number;
  imageSource: ImageSourcePropType;
  title: string;
  text: string;
}

const OnboardScreen: React.FC = () => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const flatListRef = useAnimatedRef<Animated.FlatList<DataItem>>();
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue<number>(0);

  // Corrected onViewableItemsChanged handler
  const onViewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken<DataItem>[] }) => {
    const firstViewableItem = viewableItems[0];
    if (firstViewableItem?.index !== undefined) {
      flatListIndex.value = firstViewableItem.index as number;
    }
  };

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  const RenderItem: React.FC<{ item: DataItem; index: number }> = ({ item, index }) => {
    const imageAnimationStyle = useAnimatedStyle(() => {
      const opacityAnimation = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [0, 1, 0],
        Extrapolation.CLAMP,
      );

      const translateYAnimation = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [100, 0, 100],
        Extrapolation.CLAMP,
      );

      return {
        opacity: opacityAnimation,
        width: SCREEN_WIDTH * 1,
        height: SCREEN_WIDTH * 1.8,
        transform: [{ translateY: translateYAnimation }],
      };
    });

    const textAnimationStyle = useAnimatedStyle(() => {
      const opacityAnimation = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [0, 1, 0],
        Extrapolation.CLAMP,
      );

      const translateYAnimation = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [100, 0, 100],
        Extrapolation.CLAMP,
      );

      return {
        opacity: opacityAnimation,
        transform: [{ translateY: translateYAnimation }],
      };
    });
    
    const renderTitle = (title: string) => {
      const splitTitle = title.split('\n');
      const lastPart = splitTitle.pop(); // Get the last part for special styling
      return (
        <>
          {splitTitle.map((part, index) => (
            <Text key={index} style={styles.itemTitle}>{part}</Text>
          ))}
          {lastPart && (
            <Text style={[styles.itemTitle, styles.itemTitleLastPart]}>{lastPart}</Text>
          )}
        </>
      );
    };

    return (
      <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>
         <StatusBar
        translucent
        backgroundColor="transparent"
      />
        <Animated.View style={imageAnimationStyle}>
          <Image source={item.imageSource} style={styles.image} />
         
        </Animated.View>
        <Animated.View style={textAnimationStyle}>
        {renderTitle(item.title)}
          <Text style={styles.itemText}>{item.text}</Text>
        </Animated.View>
      </View>
    );
  };

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <View style={{flexGrow: 1}}>
      <Animated.FlatList
        ref={flatListRef}
        onScroll={onScroll}
        data={data}
        renderItem={({ item, index }: { item: DataItem; index: number }) => (
          <RenderItem item={item} index={index} />
        )}
        keyExtractor={(item) => item.id.toString()} 
        horizontal
        bounces={false}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          minimumViewTime: 300,
          viewAreaCoveragePercentThreshold: 10,
        } as ViewabilityConfig} 
      />
      <View style={styles.bottomContainer}>
        <Pagination data={data} x={x} screenWidth={SCREEN_WIDTH} />
        <CustomButton
          flatListRef={flatListRef}
          flatListIndex={flatListIndex}
          dataLength={data.length}
        />
      </View>
      </View>
    </View>
    </SafeAreaView>

  );
};

export default OnboardScreen;


