import React from 'react';
import {AuthRouter} from '../../routes';
import {SafeAreaView} from 'react-native';

export const SplashScreen = () => {
  return (
    <>
      <SafeAreaView />
      <AuthRouter />
    </>
  );
};
