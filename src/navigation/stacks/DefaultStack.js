import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FeedHeader from '../headers/FeedHeader';
import HeaderOptions from '../headers/HeaderOptions';
import DeveloperScreen from '../../screens/DeveloperScreen';
import FeedScreen from '../../screens/FeedScreen';
import {useTheme} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function DefaultStack() {
  const {colors} = useTheme();

  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen
        name="Feed"
        component={FeedScreen}
        options={({navigation}) =>
          FeedHeader({title: 'Kiura', navigation, colors: colors})
        }
      />
      <Stack.Screen
        name="Developer"
        component={DeveloperScreen}
        options={({navigation}) =>
          HeaderOptions({title: 'Developer', navigation, colors: colors})
        }
      />
    </Stack.Navigator>
  );
}
