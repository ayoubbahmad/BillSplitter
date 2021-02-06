import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HomeScreen } from 'screens/HomeScreen';

export type IAppProps = {};

const App: React.FC<IAppProps> = ({}) => {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
});

export { App };
