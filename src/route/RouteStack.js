import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../sceens/HomeScreen';
import LoginScreen from '../sceens/LoginScreen/LoginScreen';
import {AuthContext} from '../context/AuthContext';
import ProfileScreen from '../sceens/LoginScreen/ProfileScreen';

const Stack = createNativeStackNavigator();

const RouteStack = () => {
  const {authenticated} = useContext(AuthContext);
  return (
    <>
      {authenticated ? (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                headerShown: false,
                animationTypeForReplace: 'push',
                animation: 'fade',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <LoginScreen />
      )}
    </>
  );
};

export default RouteStack;
