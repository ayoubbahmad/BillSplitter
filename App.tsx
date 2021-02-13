import React from 'react';
import 'react-native-gesture-handler';
import { App } from 'containers/App';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

const app: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default app;
