import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  AuthStackRouter,
  AuthStackRoutes,
  OnBoardingStackRouter,
  OnBoardingStackRoutes,
} from './Auth.routes.types';
import {OnBoardingScreen, SignUpScreen} from '../../screens';

const AuthNavigator = createNativeStackNavigator<AuthStackRouter>();
const OnBoardingNavigator = createNativeStackNavigator<OnBoardingStackRouter>();

export const OnBoardingRouter = () => (
  <OnBoardingNavigator.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <OnBoardingNavigator.Screen
      name={OnBoardingStackRoutes.ON_BOARDING}
      component={OnBoardingScreen}
    />
  </OnBoardingNavigator.Navigator>
);

export const AuthRouter = () => (
  <AuthNavigator.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <AuthNavigator.Screen
      name={AuthStackRoutes.SIGN_UP}
      component={SignUpScreen}
    />
  </AuthNavigator.Navigator>
);
