import {StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Modal} from 'react-native';
import React,{useState} from 'react';

const {width, height} = Dimensions.get('screen');

const SlideItem = ({item, widthHalf}) => {
  const [imageViewerVisible, setImageViewerVisible] = useState(false)

  const showImage =()=>{
    setImageViewerVisible(true)
    
  }

  return (
   <>
    <Modal visible={imageViewerVisible}  onRequestClose={() => setImageViewerVisible(false)} style={{ backgroundColor: 'black'}}>
      <Image source={ {uri : item.img} } resizeMode="contain" style={styles.modalimage} onSwipeDown={() => setImageViewerVisible(false) } enableSwipeDown={true} />
    </Modal>
    <TouchableOpacity style={styles.touchableContainer} onPress={showImage}>
    <View style={widthHalf ? styles.containerHalf : styles.container }>
      <Image
        source={{uri: item.img}}
        resizeMode="contain"
        style={widthHalf ? styles.imageHalf : styles.image}
      />

      {/* <View style={styles.content}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text> 
        </View> */}
    </View>
    </TouchableOpacity>
   </>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  touchableContainer: {},

  container: {
    height: height / 4 - 20,
    width: width,
    alignItems: 'center',
  },
  containerHalf: {
    height: height / 4 - 20,
    alignItems: 'center',
  },

  image: {
    flex: 1,
    width: width - 20,
    borderRadius: 10,
  },

  content: {
    flex: 1,
    alignItems: 'center',
  },
  imageHalf:{
    flex: 1,
    width: ((width - 25) / 2.7),
    borderRadius: 10,
    marginHorizontal: 5,
  },
  modalimage:{
    flex: 1,
    width: width,
    borderRadius: 10,
  }
});
