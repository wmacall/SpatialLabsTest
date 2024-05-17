import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {COLORS} from '../../constants';
import {TypographyProps, TypographyVariant} from './Typography.types';
import styles from './Typography.styles';

const typographyVariants: Record<TypographyVariant, StyleProp<TextStyle>> = {
  h3: styles.h3,
  h4: styles.h4,
  h5: styles.h5,
  h6: styles.h6,
  paragraph: styles.paragraph,
  small: styles.small,
};

export const Typography = ({
  children,
  variant = 'h3',
  textColor = 'BLACK',
}: TypographyProps) => {
  const typographyColor: TextStyle = {
    color: COLORS[textColor],
  };

  return (
    <Text
      style={[styles.baseStyle, typographyVariants[variant], typographyColor]}>
      {children}
    </Text>
  );
};
