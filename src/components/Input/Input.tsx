import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import styles from './Input.styles';
import {Typography} from '../Typography';
import {Icon} from '../Icon';

interface InputProps extends TextInputProps {
  showLimit?: boolean;
  isValid?: boolean;
}

export const Input = ({
  maxLength = 30,
  secureTextEntry = false,
  showLimit = false,
  value,
  onChangeText,
  placeholder = '',
  multiline = false,
  keyboardType = 'default',
  isValid = false,
}: InputProps) => {
  return (
    <View>
      <TextInput
        style={styles.container}
        value={value}
        onChangeText={onChangeText}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        multiline={multiline}
        keyboardType={keyboardType}
      />
      {isValid ? (
        <View style={styles.containerValid}>
          <Icon name="DoneIcon" />
        </View>
      ) : null}
      {showLimit ? (
        <View style={styles.limitContainer}>
          <Typography variant="small">
            {value?.length || 0}/{maxLength}
          </Typography>
        </View>
      ) : null}
    </View>
  );
};
