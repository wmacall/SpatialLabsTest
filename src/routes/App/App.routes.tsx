import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppStackRouter, AppStackRoutes} from './App.routes.types';
import {HomeScreen, ProfileScreen} from '../../screens';

const AppNavigator = createNativeStackNavigator<AppStackRouter>();
export const AppRouter = () => (
  <AppNavigator.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <AppNavigator.Screen name={AppStackRoutes.HOME} component={HomeScreen} />
    <AppNavigator.Screen
      name={AppStackRoutes.PROFILE}
      component={ProfileScreen}
    />
  </AppNavigator.Navigator>
);
