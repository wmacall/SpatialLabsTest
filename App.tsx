import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SplashScreen} from './src/screens';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/store';
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs();

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <NavigationContainer>
        <SplashScreen />
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default App;
