import React, {ReactNode} from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import styles from './Typography.styles';

type TypographyVariant = 'h3' | 'h4' | 'h5' | 'h6' | 'paragraph' | 'small';

interface TypographyProps {
  children: ReactNode;
  variant?: TypographyVariant;
}

const typographyVariants: Record<TypographyVariant, StyleProp<TextStyle>> = {
  h3: styles.h3,
  h4: styles.h4,
  h5: styles.h5,
  h6: styles.h6,
  paragraph: styles.paragraph,
  small: styles.small,
};

export const Typography = ({children, variant = 'h3'}: TypographyProps) => {
  return (
    <Text style={[styles.baseStyle, typographyVariants[variant]]}>
      {children}
    </Text>
  );
};
