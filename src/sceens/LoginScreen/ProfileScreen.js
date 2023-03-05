import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProfileComponent from '../../components/ScreenComponent/ProfileComponent';
import LinearGradient from 'react-native-linear-gradient';

const ProfileScreen = () => {
  return (
    <LinearGradient
      colors={['#032525', '#0c4848']}
      style={styles.linearGradient}>
      <ProfileComponent />
    </LinearGradient>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    minHeight: 100,
  },
});
