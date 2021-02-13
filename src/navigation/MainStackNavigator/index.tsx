import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from 'screens/HomeScreen';
import { SplitNowScreen } from 'screens/SplitNowScreen';

export type IMainStackNavigatorProps = {};

const Stack = createStackNavigator();

export const MainStackNavigator: React.FC<IMainStackNavigatorProps> = ({}) => {
  const header = () => null;
  return (
    <Stack.Navigator screenOptions={{ header }} initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={SplitNowScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
