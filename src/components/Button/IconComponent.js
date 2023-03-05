import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import { Icon, NativeBaseProvider, CheckIcon, HStack, LocationIcon  } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';

const IconComponent = ({icon, title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icon name={icon} size={28} color="#B2E9C5" />
      </View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default IconComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: 5,
  },
  icon: {
    height: 60,
    backgroundColor: '#297373',
    borderRadius: 5,
    padding: 5,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
    fontFamily: 'Poppins-Light',
    fontSize: 10,
  },
});
