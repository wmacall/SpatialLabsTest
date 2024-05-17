import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {Button, Input, Typography} from '../../../components';
import {translate} from '../../../i18n';
import DotImage from '../../../assets/img/dot.png';
import styles from './SignUp.screen.styles';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const SignUpScreen = () => {
  const [step, setStep] = useState(0);
  const [echo, setEcho] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleNextStep = () => setStep(step + 1);
  const handleBackStep = () => setStep(step - 1);
  const handleEmailChange = (text: string) => {
    setEmail(text);
    setIsValidEmail(emailRegex.test(text));
  };

  const isValid = password.length >= 8 && isValidEmail;

  return (
    <View style={styles.container}>
      {step === 0 ? (
        <>
          <Image source={DotImage} style={styles.imageDot} />
          <Typography>{translate('welcome')}</Typography>
          <Typography variant="h5">{translate('congratulations')}</Typography>
          <Button
            style={styles.containerGetStarted}
            text={translate('get_started')}
            buttonColor="BLUE"
            onPress={handleNextStep}
          />
        </>
      ) : null}
      {step === 1 ? (
        <>
          <Button
            style={styles.containerBack}
            onPress={handleBackStep}
            variant="rounded_medium"
            buttonColor="DARK_SECONDARY"
            icon="BackArrowIcon"
          />
          <Image source={DotImage} style={styles.imageDot} />
          <Typography variant="h4">{translate('create_your_echo')}</Typography>
          <Typography style={styles.description} variant="h6">
            {translate('create_your_echo_description')}
          </Typography>
          <Input
            value={echo}
            onChangeText={setEcho}
            placeholder={translate('your_echo')}
            showLimit
            maxLength={20}
            isValid={echo.length >= 3}
          />
          <Button
            isDisabled={echo.length < 3}
            style={styles.containerGetStarted}
            text={translate('claim')}
            onPress={handleNextStep}
          />
        </>
      ) : null}
      {step === 2 ? (
        <>
          <Button
            style={styles.containerBack}
            onPress={handleBackStep}
            variant="rounded_medium"
            buttonColor="DARK_SECONDARY"
            icon="BackArrowIcon"
          />
          <Image source={DotImage} style={styles.imageDot} />
          <Typography variant="h4">{translate('echo_secured')}</Typography>
          <Typography style={styles.echoSecured} variant="h5">
            {translate('echo_secured_description')}
          </Typography>
          <Input
            value={email}
            onChangeText={handleEmailChange}
            placeholder={translate('email_or_phone')}
            keyboardType="email-address"
            style={styles.inputSignUp}
          />
          <Input
            value={password}
            onChangeText={setPassword}
            placeholder={translate('password')}
            secureTextEntry
            style={styles.inputSignUp}
          />
          <Button
            isDisabled={!isValid}
            style={styles.containerCreateAccount}
            text={translate('create_account')}
            onPress={handleNextStep}
            textVariant="paragraph"
          />
        </>
      ) : null}
    </View>
  );
};
