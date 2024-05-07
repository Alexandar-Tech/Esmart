import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const TextCarousal = () => {
  const data = [
    { id: 1, title: 'Slide 1' },
    { id: 2, title: 'Slide 2' },
    { id: 3, title: 'Slide 3' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={300}
      itemWidth={300}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
});

export default TextCarousal;
