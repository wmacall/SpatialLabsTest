import React, {useEffect} from 'react';
import {AppRouter, AuthRouter, OnBoardingRouter} from '../../routes';
import BootSplash from 'react-native-bootsplash';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {getProfileSelector} from '../../store';
import {COLORS} from '../../constants';

export const SplashScreen = () => {
  const {isSignUpComplete, isOnboardingComplete} =
    useSelector(getProfileSelector);

  useEffect(() => {
    BootSplash.hide({fade: true});
  }, []);

  return (
    <>
      <SafeAreaView style={styles.safeArea} />
      {!isOnboardingComplete && !isSignUpComplete ? <AuthRouter /> : null}
      {isSignUpComplete && !isOnboardingComplete ? <OnBoardingRouter /> : null}
      {isSignUpComplete && isOnboardingComplete ? <AppRouter /> : null}
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: COLORS.PRIMARY,
  },
});
