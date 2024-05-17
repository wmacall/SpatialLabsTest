import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AuthStackRouter, AuthStackRoutes} from './Auth.routes.types';
import {SignUpScreen} from '../../screens';

const AuthNavigator = createNativeStackNavigator<AuthStackRouter>();
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
