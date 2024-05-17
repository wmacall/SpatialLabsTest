import React from 'react';
import {AppRouter, AuthRouter, OnBoardingRouter} from '../../routes';
import {SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {getProfileSelector} from '../../store';

export const SplashScreen = () => {
  const {isSignUpComplete, socialMedia, isOnboardingComplete} =
    useSelector(getProfileSelector);
  console.log({socialMedia});
  return (
    <>
      <SafeAreaView />
      {!isOnboardingComplete && !isSignUpComplete ? <AuthRouter /> : null}
      {isSignUpComplete && !isOnboardingComplete ? <OnBoardingRouter /> : null}
      {isSignUpComplete && isOnboardingComplete ? <AppRouter /> : null}
    </>
  );
};
