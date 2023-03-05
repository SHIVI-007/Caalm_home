import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const AvatarComponent = ({profile}) => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate('Profile');
  };
  return profile ? (
    <>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.imageAvatar}
          source={{
            uri: 'https://img.freepik.com/premium-vector/avatar-portrait-young-caucasian-boy-man-round-frame-vector-cartoon-flat-illustration_551425-19.jpg?w=2000',
          }}
        />
      </View>
    </>
  ) : (
    <TouchableOpacity style={styles.container} onPress={handleNavigation}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://img.freepik.com/premium-vector/avatar-portrait-young-caucasian-boy-man-round-frame-vector-cartoon-flat-illustration_551425-19.jpg?w=2000',
        }}
      />
      <Text style={styles.text}>Rohit & Aman</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    height: 160,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#0c4848',
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 150,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: '#F5F878',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Poppins-Light',
    color: 'white',
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 300,
  },
  imageAvatar: {
    width: 250,
    height: 250,
    borderRadius: 150,
    backgroundColor: 'red',
    borderWidth: 3,
    borderColor: '#F5F878',
  },
});
