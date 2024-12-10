// AppNavigator.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import {CustomDarkTheme, LightTheme} from '../themes/KiuraTheme';
import DefaultStack from './stacks/DefaultStack';

const AppNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? CustomDarkTheme : LightTheme}>
      <DefaultStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
