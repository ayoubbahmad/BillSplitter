import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from 'navigation/MainStackNavigator';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HomeScreen } from 'screens/HomeScreen';

export type IAppProps = {};

const App: React.FC<IAppProps> = ({}) => {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      <MainStackNavigator />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
});

export { App };
