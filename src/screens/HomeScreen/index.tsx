import React from 'react';
import { Text, View } from 'react-native';

export type IHomeScreenProps = {};

const HomeScreen: React.FC<IHomeScreenProps> = ({}) => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export { HomeScreen };
