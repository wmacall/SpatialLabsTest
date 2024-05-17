import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {Typography} from '../Typography';
import styles from './Button.styles';
import {ButtonProps, ButtonVariant} from './Button.types';
import {Icon} from '../Icon';
import {COLORS} from '../../constants';

const typographyVariants: Record<ButtonVariant, StyleProp<ViewStyle>> = {
  primary: styles.container,
  secondary: styles.secondary,
  rounded: styles.rounded,
  rounded_small: styles.rounded_small,
};

export const Button = ({
  onPress,
  text = '',
  isDisabled = false,
  variant = 'primary',
  icon,
  buttonColor = 'BLACK',
}: ButtonProps) => {
  const disabledStyle = isDisabled ? styles.containerDisabled : {};
  const textColor = isDisabled ? 'MONOCHROME_400' : 'WHITE';
  const buttonColorStyle: ViewStyle = {backgroundColor: COLORS[buttonColor]};
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={isDisabled}
      style={[
        styles.container,
        typographyVariants[variant],
        buttonColorStyle,
        disabledStyle,
      ]}
      onPress={onPress}>
      {text ? (
        <Typography textColor={textColor} variant="h6">
          {text}
        </Typography>
      ) : null}
      {icon ? <Icon name={icon} /> : null}
    </TouchableOpacity>
  );
};
