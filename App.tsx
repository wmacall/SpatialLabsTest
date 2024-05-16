import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Typography} from './src/components';

const App = () => {
  return (
    <View>
      <SafeAreaView />
      <Typography variant="h3">Hello World!</Typography>
      <Typography variant="h4">Hello World!</Typography>
      <Typography variant="h5">Hello World!</Typography>
      <Typography variant="h6">Hello World!</Typography>
      <Typography variant="paragraph">Hello World!</Typography>
      <Typography variant="small">Hello World!</Typography>
    </View>
  );
};

export default App;
