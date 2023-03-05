import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const DetailComponent = ({icon, title}) => {
  return (
    <View style={styles.detailContainer}>
      <Icon name={icon} size={25} color="#B2E9C5" />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default DetailComponent;

const styles = StyleSheet.create({
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: '#1b3021',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 0.5,
    // borderColor: '#B2E9C5',
    borderLeftColor: '#B2E9C5',
    borderTopColor: '#B2E9C5',
    borderRightColor: '#d4ffff',
    borderBottomColor: '#d4ffff',
  },
  text: {
    fontSize: 15,
    color: 'white',
    textTransform: 'uppercase',
    fontFamily: 'Poppins-Light',
  },
});
