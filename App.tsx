import React from 'react';
import 'react-native-gesture-handler';
import { App } from 'containers/App';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const app: React.FC = () => {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
};

export default app;
