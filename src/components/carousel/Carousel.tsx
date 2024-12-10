import React, {useRef} from 'react';
import {FlatList, Image, StyleSheet, View, Animated} from 'react-native';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({images}) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const renderItem = ({item}: {item: string}) => (
    <Image source={{uri: item}} style={styles.image} />
  );

  return (
    <View>
      <FlatList
        data={images}
        keyExtractor={(item, index) => `${item}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        renderItem={renderItem}
      />
      <View style={styles.pagination}>
        {images.map((_, index) => {
          const inputRange = [
            (index - 1) * 300,
            index * 300,
            (index + 1) * 300,
          ];

          const dotScale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1.4, 0.8],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={[styles.dot, {transform: [{scale: dotScale}]}]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#333',
    marginHorizontal: 5,
  },
});

export default Carousel;
