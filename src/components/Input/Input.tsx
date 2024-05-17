import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import styles from './Input.styles';
import {Typography} from '../Typography';
import {Icon} from '../Icon';
import {COLORS} from '../../constants';

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
  style,
  ...rest
}: InputProps) => {
  return (
    <View>
      <TextInput
        style={[styles.container, style]}
        value={value}
        onChangeText={onChangeText}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        multiline={multiline}
        keyboardType={keyboardType}
        placeholderTextColor={COLORS.MONOCHROME_400}
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        {...rest}
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
