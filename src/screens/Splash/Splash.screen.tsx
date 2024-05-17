import React from 'react';
import {AuthRouter, OnBoardingRouter} from '../../routes';
import {SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {getProfileSelector} from '../../store';

export const SplashScreen = () => {
  const {isSignUpComplete, socialMedia} = useSelector(getProfileSelector);
  console.log({socialMedia});
  return (
    <>
      <SafeAreaView />
      {isSignUpComplete ? <OnBoardingRouter /> : <AuthRouter />}
    </>
  );
};
