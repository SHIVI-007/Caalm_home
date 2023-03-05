import {StyleSheet, Text, View, FlatList, Animated} from 'react-native';
import React, {useRef} from 'react';

import data from './data';
import SlideItem from './SlideItem';
import Pagination from './Pagination';

const CarouselComponent = ({widthHalf}) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnDcroll = event => {
    Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
      useNativeDriver: false,
    })(event);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <SlideItem item={item}  widthHalf={widthHalf} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="center"
        onScroll={handleOnDcroll}
      />
      {/* <Pagination data={data} scrollX={scrollX} /> */}
    </View>
  );
};

export default CarouselComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});
