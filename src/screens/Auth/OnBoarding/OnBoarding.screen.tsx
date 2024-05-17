import React, {useState} from 'react';
import {View} from 'react-native';
import {AccountSelection, CreateProfile} from '../../../components';
import styles from './OnBoarding.screen.styles';

export const OnBoardingScreen = () => {
  const [step, setStep] = useState(0);

  const handleBackStep = () => setStep(prev => prev - 1);
  const handleIncrementStep = () => setStep(prev => prev + 1);

  return (
    <View style={styles.container}>
      {step === 0 ? (
        <CreateProfile onIncrementStep={handleIncrementStep} />
      ) : null}
      {step === 1 ? <AccountSelection handleBackStep={handleBackStep} /> : null}
    </View>
  );
};
